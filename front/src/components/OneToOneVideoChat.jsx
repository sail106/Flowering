import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { BsRecord2 } from "react-icons/bs";

import { Box, Button, Grid, Typography, ButtonGroup, IconButton, CircularProgress } from '@mui/material'
import { Mic, MicOff, Videocam, VideocamOff } from '@mui/icons-material';
import { CiMicrophoneOn } from "react-icons/ci";
import { GoShare } from "react-icons/go";
import { LiaComment } from "react-icons/lia";
import { IoMdVideocam } from "react-icons/io";
import { HiOutlineVideoCameraSlash } from "react-icons/hi2";

import { CONSULTANT, CUSTOMER } from '../api/CustomConst';
import Participant from '../components/participant/Participant';

import { OpenVidu } from 'openvidu-browser';

import {
  settingModalOn, setSession,
  resetSessionName, resetMsg, postConsultingResult, getConsultant, getCustomer, appendParticipantList, appendMessageList, makeResult, resetParticipant,
} from '../store/consultSlice'
import { useDispatch, useSelector } from "react-redux";

import axios from 'axios';
import UserVideoComponent from './community/UserVideoComponent';
import SmallChat from './chat/OneToManyChat';
import OneToOneChat from './chat/OneToOneChat';
import { setCustomer } from '../store/consultSlice';
import { useNavigate } from 'react-router-dom';
import { CiVideoOn } from "react-icons/ci";
import ConsultantParticipant from './participant/ConsultantParticipant';
import { removeconsultantSessionName } from '../store/consultsessionnameSlice';
const OPENVIDU_SERVER_URL = 'https://i10c106.p.ssafy.io';

// const OPENVIDU_SERVER_URL = 'http://localhost:4443';
const OPENVIDU_SERVER_SECRET = 'MY_SECRET';

// rafce Arrow function style 
const OneToOneVideoChat = () => {


  //   // const tmp = email?.replace(/[@\.]/g, '-')
  const [creator, setCreator] = useState(undefined)

  const [OV, setOV] = useState(null)
  const { name, role, id, nickname, imageUrl } = useSelector(state => state.auth.logonUser)

  const { creatorid } = useSelector(state => state.community.creator)
  const { session, customer, reservationId } = useSelector(state => state.consult)
  const { consultantSessionName } = useSelector(state => state.consultsessionname)
  const navigate = useNavigate();

  const dispatch = useDispatch();


  const [mySessionId, setMySessionId] = useState(
    consultantSessionName
  )

   const [myUserName, setMyUserName] = useState(name)

  const [publisher, setPublisher] = useState(undefined)
  const [consultant, setConsultant] = useState(undefined)

  const [isMic, setIsMic] = useState(true);
  const [isCam, setIsCam] = useState(true);

  //   const [OV, setOV] = useState(null)
  const [customerStream, setCustomerStream] = useState(null);
  const { access_token } = useSelector(state => state.auth.logonUser);


  const sessionConnect = (token) => {  //스트림 생성 
    console.log('in connection  ' + token) //in connection  ws://localhost:4443?sessionId=1&token=tok_MF2VTBpuHQz79T5o
    // token = token.replace('localhost', 'i10c106.p.ssafy.io');
    // console.log('in connection  '+token) // in connection ws://i10c106.p.ssafy.io:4443?sessionId=1&token=tok_BC6nORx9VG3G5RQB
    console.log('iiiiiiiiii' + isMic)
    session
      .connect(
        token, { clientData: myUserName, clientRole: role },
      )

      .then(() => {
        console.log('tokk  ' + token)

        let publisher = OV.initPublisher(undefined, {
          // 오디오 소스: undefined로 설정하여 기본 오디오 장치 사용
          audioSource: undefined,

          // 비디오 소스: undefined로 설정하여 기본 비디오 장치 사용
          videoSource: undefined,

          // 오디오 발행 여부: true로 설정하여 오디오 발행 활성화
          publishAudio: true,

          // 비디오 발행 여부: true로 설정하여 비디오 발행 활성화
          publishVideo: true,

          // 비디오 해상도: '1821x761'로 설정하여 비디오 해상도 지정
          resolution: '660x327',

          // 프레임 속도: 30으로 설정하여 초당 프레임 수 지정
          frameRate: 30,

          // 삽입 모드: 'APPEND'로 설정하여 스트림을 추가 모드로 삽입
          insertMode: 'APPEND',

          // 미러 모드: false로 설정하여 미러 모드 비활성화
          mirror: false,
        });

        publisher.subscribeToRemote()

        session.publish(publisher);
        setPublisher(publisher);  // stream 생성....

        console.log('streamcreate')
        if (role === "USER") {
          console.log('setcustomer')
          dispatch(setCustomer(publisher))

          const persondata = {
            imageUrl: imageUrl,
            name: name,
            isMic: isMic,
            isCam: isCam,
            role: role,
          };
          session.signal({
            data: JSON.stringify(persondata),
            to: [],
            type: 'participant'
          })

        }

        if (role === CONSULTANT) {
          setConsultant(publisher)

          //payload 에 consultingid 가 온다.
          dispatch(getCustomer(consultantSessionName)).then((response) => {

            console.log('getCustomer 액션 성공:', response)



            console.log('User 넣기')




          }).catch((error) => {
            console.error('getCustomer 액션 실패:', error);
          })
          // 위는 customer 가져오는 로직 

        }


        console.log('publisher' + publisher.stream)
        console.log('customer ' + customer.stream)
        console.log('session' + session)
        dispatch(setSession(session))

      })
      .catch((error) => { });
  }


  // 마이크 권한을 변경하는 함수
  const handleAudioPermissionChange = () => {
    // dispatch(setAudioPermission(isMic)); // 토글
    console.log(isMic)
  };

  // 카메라 권한을 변경하는 함수
  const handleVideoPermissionChange = () => {
    // dispatch(setVideoPermission(isCam)); // 토글
    console.log(isCam)

  };

  useEffect(() => {

    // setIsMic(isMic);
    // setIsCam(isCam);
    console.log('ismic' + isMic)
    console.log('iscam' + isCam)

  }, [isMic, isCam]);


  useEffect(() => {
    console.log('role' + role)
  }, [role]);

  //   const onbeforeunload = () => {
  //     leaveSession();
  //   }

  //   const deleteSubscriber = (streamManager) => {
  //   }

  const joinSession = () => {  //세션 값 넣기.
    const getOV = new OpenVidu();

    dispatch(setSession(getOV.initSession()))
    setOV(getOV)

    if (role == 'CONSULTANT')

      console.log('consultantSessionName', consultantSessionName)

    const mine = {
      id: 11,
      role: role,
      name: name,
      imageUrl: imageUrl,
    }

    dispatch(appendParticipantList(mine))

  }


  useEffect(() => {


    window.addEventListener(
      'beforeunload',
      onbeforeunload);
    return () => {
      window.removeEventListener(
        'beforeunload',
        onbeforeunload);
    }
  }, [])


  const deleteSubscriber = (streamManager) => {
    console.log('deleteSubscriber')
    if (role == "USER") {
      navigate('/mypage')
    }
    else if (role == CONSULTANT) {
      navigate('/expertconsulting')
    }
  }
  const addparticiapnt = (event) => {
    const data = JSON.parse(event.data)
    // console.log('data length message role' + ' ' + data.length + data.message + data.role)

    if (data.role !== role) {
      console.log('datarole role ' + data.role, ' ', role, data.name)
      dispatch(appendParticipantList(data))
    }
  }

  const textChat = (event) => {
    const data = JSON.parse(event.data)


    if (data.role !== role) {
      console.log('  dataid  role  message role' + ' ' + data.id + ' ' + role + data.message + data.role)

      dispatch(appendMessageList(data));
    }

  }

  useEffect(() => {
    console.log('ssssssssssssss' + session)

    if (session) {
      console.log('inn')

      session.on('streamCreated', streamCreated)
      console.log('inn')

      session.on('streamDestroyed', streamDestroyed)
      console.log('inn')

      session.on('exception', exception)

      session.on('signal:chat', textChat)

      session.on('signal:participant', addparticiapnt)



      getToken().then(sessionConnect);

    }
  }, [session])


  const streamCreated = (event) => {
    const subscriber = session.subscribe(event.stream, undefined);
    const subRole = JSON.parse(event.stream.connection.data).clientRole
    // console.log('streamcreated ' + customer.stream)


    if (role === CONSULTANT) {
      dispatch(setCustomer(subscriber))
      console.log('customer ' + subscriber.stream)

    }

    else if (role === "USER") {
      // alert('setconsultantsubscriber')
      setConsultant(subscriber)


      if (subRole == CONSULTANT) {
        // payload 에 consultingid 가 온다.
        dispatch(getConsultant(consultantSessionName)).then((response) => {

          console.log('getConsultant 액션 성공:', response)


          const Consultant = {   ///////////////
            // imageUrl: response.data_body.imageUrl,
            imageUrl: '',
            name: 'Consultant',
            isMic: 'true',
            isCam: 'true',
          };
          console.log('Consultant 넣기')

          dispatch(appendParticipantList(Consultant))



        }).catch((error) => {
          console.error('getCustomer 액션 실패:', error);
        })
        // 위는 customer 가져오는 로직 



      }
    }


  }

  useEffect(() => {
    if (customer) {
      setCustomerStream(customer);
    } else {
      setCustomerStream(null);
    }
  }, [customer]); ////////

  const streamDestroyed = (event) => {
    deleteSubscriber(event.stream.streamManager);
  }

  const exception = (exception) => {
    console.warn(exception);
  }

  const consultingFinishRequest = {
    consultingid: consultantSessionName,
    // consultingComment: consultingComment,


  }

  //   // 컨설턴트, 고객 종료시 분리 필요
  const leaveSession = () => {
    console.log('session' + session)
    // role==CONSULTANT &&

    // dispatch(resetParticipant)

    if (role == CONSULTANT && session) {
      session.disconnect();

      try {
        const token = access_token; // 여기에 액세스 토큰을 설정합니다.
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
            // 다른 필요한 헤더도 추가할 수 있습니다.
          }
        };
        const baseurl = import.meta.env.VITE_APP_BASE_URL;
        console.log(baseurl + 'consultings/deactivate/' + consultantSessionName, config);
        const url = `${baseurl}consultings/deactivate/${consultantSessionName}`;

        const response = axios.put(url, null, config);

        // 요청 성공 시 수행할 작업
        console.log('Response:', response.data);
      }

      catch (error) {
        console.error('Error :', error);
        // alert('결제 실패');
      }




      dispatch(makeResult({ consultingFinishRequest }))
        .then(() => {
          // dispatch(changeComment(''))
          navigate('/expertconsulting')
        })
    }

    if (role === "USER" && session) {
      session.disconnect();
      navigate('/mypage')

    }

    setOV(null);
    setMySessionId(consultantSessionName)
    dispatch(setSession(undefined))
    dispatch(setCustomer(undefined))
    dispatch(resetMsg())
    // setMyUserName(nickname)
    setConsultant(undefined)

    // axios.delete(`${OPENVIDU_SERVER_URL}/openvidu/api/sessions/${consultantSessionName}`, {



    axios
      .delete(OPENVIDU_SERVER_URL + '/openvidu/api/sessions/' + consultantSessionName, {
        headers: {
          Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
          'Content-Type': 'application/json',

          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'GET,POST',
        },

      })

      .then((response) => {

        console.log('deletesession then' + response.data.id)
        console.log('deletesession then' + response.id)
        resolve(response.data.id); // consultatnt email == session id.
      })

      .catch((response) => {
        // console.log('createsession catchhh')

        var error = Object.assign({}, response);

      });

    //redux 에 저장된 consultantsessionanme 도 제거
    dispatch(removeconsultantSessionName())

  }

  //   /**
  //    * --------------------------
  //    * SERVER-SIDE RESPONSIBILITY
  //    * --------------------------
  //    * These methods retrieve the mandatory user token from OpenVidu Server.
  //    * This behavior MUST BE IN YOUR SERVER-SIDE IN PRODUCTION (by using
  //    * the API REST, openvidu-java-client or openvidu-node-client):
  //    *   1) Initialize a Session in OpenVidu Server	(POST /openvidu/api/sessions)
  //    *   2) Create a Connection in OpenVidu Server (POST /openvidu/api/sessions/<SESSION_ID>/connection)
  //    *   3) The Connection.token must be consumed in Session.connect() method
  //    */

  const getToken = () => {
    console.log(mySessionId)
    return createSession(mySessionId).then((sessionId) =>
      createToken(sessionId));

  }

  const createSession = (sessionId) => {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify({ customSessionId: String(sessionId) });

      console.log('createsessionnn with sessionid' + sessionId)

      axios
        .post(OPENVIDU_SERVER_URL + '/openvidu/api/sessions', data, {
          headers: {
            Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
            'Content-Type': 'application/json',

            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST',
          },

        })

        .then((response) => {
          console.log(' sessionId  ' + sessionId)

          console.log('createsession then' + response.data.id)
          console.log('createsession then' + response.id)
          resolve(response.data.id); // consultatnt email == session id.
        })

        .catch((response) => {
          // console.log('createsession catchhh')
          console.log('createsession catchhh')

          var error = Object.assign({}, response);
          if (error?.response?.status === 409) {
            console.log('409')
            resolve(sessionId);
          }
        });

    });
  }

  const createToken = (sessionId) => {
    console.log('tokennnnnn' + sessionId)
    return new Promise((resolve, reject) => {
      const data = {
        "type": "WEBRTC",
        "role": "PUBLISHER",
        "kurentoOptions": {
          "videoMaxRecvBandwidth": 1000,
          "videoMinRecvBandwidth": 300,
          "videoMaxSendBandwidth": 1000,
          "videoMinSendBandwidth": 300,
          "allowedFilters": [
            "GStreamerFilter",
            "FaceOverlayFilter",
            "ChromaFilter"
          ]
        }
      };

      axios
        .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions/" + String(sessionId) + "/connection", data, {
          headers: {
            Authorization: 'Basic ' + btoa(
              'OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET
            ),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST',
          },
        })
        .then((response) => {
          console.log('creattokensuccess')
          resolve(response.data.token);
        })
        .catch((error) => reject(error));
    });
  }


  // ---------- render
  return (

    <SContainer container >
      {


        session !== undefined ?
          (

            // 세션 연결시

            <SGridContainer container spacing={12}>
              <div>

                <Header>

                  <IoMdVideocamIcon>
                    <IoMdVideocam />

                  </IoMdVideocamIcon>
                  <Myspan>
                     컨설팅

                  </Myspan>
                </Header>

                {

                  consultant !== undefined ? (

                    <Grid container item xs={12} sm={12} md={12}
                      sx={{
                        // height: "80%",
                        // justifyContent: "space-between",
                        // gap: 2,
                        width: "70%",
                        height: "150%",
                        // display: "flex",
                        // flexDirection: "row",
                        // justifyContent: "center",
                        // alignItems: "center",
                        marginLeft: "7%",
                        marginTop: "7%"
                      }}>

                      {
                        role == CONSULTANT && customer &&

                        <VideoContainer>
                          <UserVideoComponent
                            streamManager={customer}
                          />
                        </VideoContainer>

                      }

                      {
                        role == "USER" && consultant &&

                        <VideoContainer>
                          <UserVideoComponent
                            streamManager={consultant}
                          />
                        </VideoContainer>

                      }

                      {
                        // role === CONSULTANT &&

                      }




                    </Grid>

                  )
                    :

                    <SpinnerGrid item xs={12} sm={2}>

                      <CircularProgress />
                    </SpinnerGrid>
                }

                <SmallChatContainer>
                  <ConsultantParticipant />

                  <OneToOneChat />

                  {
                    isCam && consultant !== undefined && role == CONSULTANT &&

                    <MyVideoContainer>
                      <UserVideoComponent
                        streamManager={consultant}
                      />
                    </MyVideoContainer>

                  }

                  {
                    isCam && customer !== undefined && role == "USER" &&

                    <MyVideoContainer>
                      <UserVideoComponent
                        streamManager={customer}
                      />
                    </MyVideoContainer>

                  }
                </SmallChatContainer>

              </div>
              {/* 
              <Myspan>
                뷰티 솔루션 컨설팅
              </Myspan> */}


              {/* <VideoGroup>
                 

              </VideoGroup> */}




              {/* </UserVideoSGrid> */}



            </SGridContainer>

          )
          :
          // 세션 연결 안됐을시
          <SpinnerGrid container>
            <Typography variant="h3">"연결을 눌러 주세요."</Typography>
          </SpinnerGrid>

      }



      {/* 하단 || 선택된 베스트, 워스트 컬러팔레트 || 마이크, 카메라, 종료버튼 */}
      <BottomBox>
        {
          // 세션연결 안됐을시
          !session ?
            <>
              <p />
              <ButtonGroup>
                <BottomBtn variant="contained" onClick={joinSession} sx={{ backgroundColor: "#EB8F90" }}>
                  연결
                </BottomBtn>
                <BottomBtn variant="contained" onClick={() => {
                  navigate('/')
                  dispatch(resetSessionName())
                }}>
                  돌아가기
                </BottomBtn>
              </ButtonGroup>
            </>
            :
            // 세션 연결시 
            <>
              {/* 베스트,워스트 컬러셋 || 마이크,캠,종료버튼 */}
              {

                <>

                  {/* 마이크,캠 + 필터 + 종료*/}

                  <MicCamExitGroup>

                    {/* 마이크 */}

                    <CustomMicButton
                      color="inherit"
                      onClick={() => {
                        publisher.publishAudio(!isMic)
                        setIsMic(!isMic)
                        handleAudioPermissionChange()
                      }}

                      style={{
                        marginLeft: '20%'
                      }}
                    >

                      {isMic ? <CiMicrophoneOn /> : <MicOff style={{ backgroundColor: '#0a0909' }} />}
                    </CustomMicButton>

                    {/* 캠 */}
                    <CustomVideoButton
                      color="inherit"
                      onClick={() => {
                        publisher.publishVideo(!isCam)
                        setIsCam(!isCam)
                        handleVideoPermissionChange()
                      }}>

                      {isCam ? <Videocam /> : <HiOutlineVideoCameraSlash style={{ backgroundColor: '#1a1818' }} />}

                    </CustomVideoButton>


                    <CustomIconButton2

                      onClick={() => {

                      }}>
                      {<GoShare />}

                    </CustomIconButton2>


                    <CustomIconButton2

                      onClick={() => {

                      }}>
                      {<BsRecord2 />}

                    </CustomIconButton2>


                    <CustomIconButton2

                      onClick={() => {

                      }}>
                      {<LiaComment />}

                    </CustomIconButton2>


                    <CustomIconButton2

                      onClick={() => {

                      }}>
                      {<GoShare />}

                    </CustomIconButton2>

                    {/* <BottomBtn variant="contained" onClick={() => dispatch(settingModalOn())} > */}
                    {/* </BottomBtn> */}

                    {/* <BottomBtn variant="contained"  > */}

                    <ExitButton onClick={leaveSession}>
                      상담 종료하기
                    </ExitButton>

                    {/* </ButtonGroup> */}
                  </MicCamExitGroup>
                </>
              }
            </>
        }
      </BottomBox>

    </SContainer >
  )

}

export default OneToOneVideoChat
// 전체포함 margin으로 띄운 상태

// 비디오 컨테이너
const VideoContainer = styled(Box)({
  width: "100%",
  height: "100%",
  // borderRadius: "1rem",
  // padding: "1rem",
  // position:"absolute",
  

})
// 내 비디오 컨테이너
const MyVideoContainer = styled(Box)({
  width: "23%",
  position: 'absolute',
  top: 488,
  left: 290,
  right: 0,
  bottom: 0,
  margin: 'auto',
})

const Header = styled.div`
    display: flex;
    /* justify-content: ; */
    width: 100%;
`;

const BottomBtn = styled(Button)((props) => ({
  backgroundColor: '#99968D',
  color: 'white',
  '&:hover': {
    backgroundColor: '#66635C',
    color: 'black',
    fontWeight: 'normal',
  },
  fontWeight: 'normal',
  border: '1px solid #66635C70',
  // width: `${props.wd}px`,
  height: '3rem',
}))

const Myspan = styled.div`
    
      font-size: 2rem; // Adjust the font size as needed
      color: #000000;
      margin-left: 26px;
      margin-top: 26px;
      font-family: "Noto Sans KR";
  font-weight: 500;
  `;

const IoMdVideocamIcon = styled(IoMdVideocam)`
    && {
      font-size: 3rem; // Adjust the font size as needed
      color: #f28482;
      margin-left: 26px;
      margin-top: 26px;
      
    }
  `;
const SContainer = styled(Box)`
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 1rem; */
    /* margin: 3vh; */
    height: 100%;
    /* border: 2px solid #18c24b99; */
    box-sizing: border-box;
    background-color: #fffafa;
    box-shadow: 1px 2px 9px #B1B7B7;
  `;



// 공용버튼 제외 모두 포함 (상위)
// height 90% / 나머지 10% 하단
const SGridContainer = styled(Grid)`
    height: 100%; // "90%",
    display: flex;
    width: 70%;
    border: 12px solid #dc121299;
    // columnGap: 2,
  `;


// 연결안됐을시 스피너
const SpinnerGrid = styled(Grid)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;


const SmallChatContainer = styled.div`
  position: absolute;
  width: 31%;
  top: 10%;
  right: 0;
  /* border: 2px solid black; */
  height: 90%;
  `;

const BottomBox = styled(Box)`
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 90%;
    /* background-color: aliceblue; */
  `;

const CustomMicButton = styled(IconButton)`
    && {
      /* background-color: #f28482; */
      background-color: ${({ isCam }) => (isCam ? '#df6060' : '#0c0c0c')}; // Conditional background color

      color: white;
      &:hover {
        background-color: #66635c;
        color: black;
        font-weight: normal;
      }
      height: 40px;
      width: 40px;
      font-weight: normal;
      border-radius: 50%;
      margin-right: 10px;
      margin-bottom: 11px;
      margin-top: 11px;
    }
  `;

const CustomVideoButton = styled(IconButton)`
    && {
      /* background-color: #f28482; */
      background-color: ${({ isCam }) => (isCam ? '#df6060' : '#0c0c0c')}; // Conditional background color

      color: white;
      &:hover {
        background-color: #66635c;
        color: black;
        font-weight: normal;
      }
      height: 40px;
      width: 40px;
      font-weight: normal;
      border-radius: 50%;
      margin-right: 10px;
      margin-bottom: 11px;
      margin-top: 11px;
    }
  `;
const CustomIconButton2 = styled(IconButton)`
    && {
      background-color: #efc6c5;
      
      color: white;
      &:hover {
        background-color: #66635c;
        color: black;
        font-weight: normal;
      }
      height: 40px;
      width: 40px;
      font-weight: normal;
      border-radius: 50%;
      margin-right: 10px;
      margin-bottom: 11px;
      margin-top: 11px;
    }
  `;

const ExitButton = styled(Button)`
    && {
      background-color: #f28482;
      color: white;
      &:hover {
        background-color: #66635c;
        color: black;
        font-weight: normal;
      }
      font-weight: normal;
      border-radius: 15px;
      margin-left: 100px;
      height: 40px;
      width: 130px;
      margin-bottom: 11px;
      margin-top: 11px;
      
      
    }
    
  `;


const MicCamExitGroup = styled(Grid)`
    display: flex;
    flex-direction: row;
    gap: 3;
    width: 72%;  
      background-color: #ffffff;
      position: absolute;
  bottom: 0;
  height: 11%;
  align-items: center;
  left: 0;
  `;
