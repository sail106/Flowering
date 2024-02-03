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
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import Participant from '../components/participant/Participant';

import { OpenVidu } from 'openvidu-browser';

import {
  settingModalOn, setSession,
  resetSessionName, resetMsg, postConsultingResult, getConsultant, getCustomer, appendParticipantList,
} from '../store/consultSlice'

import axios from 'axios';
import UserVideoComponent from './community/UserVideoComponent';
import SmallChat from './chat/SmallChat';
import OneToOneChat from './chat/OneToOneChat';
import { setCustomer } from '../store/consultSlice';
import { useNavigate } from 'react-router-dom';
import { CiVideoOn } from "react-icons/ci";
import ConsultantParticipant from './participant/ConsultantParticipant';
const OPENVIDU_SERVER_URL = 'http://localhost:4443';
const OPENVIDU_SERVER_SECRET = 'MY_SECRET';

// rafce Arrow function style 
const OneToOneVideoChat = () => {


  //   // const tmp = email?.replace(/[@\.]/g, '-')
  const [creator, setCreator] = useState(undefined)

  //   const [mySessionId, setMySessionId] = useState(
  //     role === CONSULTANT ? tmp : consultantSessionName
  //   )
  const [OV, setOV] = useState(null)
  const { name, role, id, nickname, imageUrl } = useSelector(state => state.auth.logonUser)

  const { creatorid } = useSelector(state => state.community.creator)
  const { session, customer, reservationId, consultantSessionName } = useSelector(state => state.consult)
  const { consultantSessionName2 } = useSelector(state => state.consultsessionname)
  const navigate = useNavigate();

  useEffect(() => {

    // setIsMic(isMic);
    // setIsCam(isCam);
    console.log('consultantSessionName2' + consultantSessionName2)

  }, [consultantSessionName2]);


  const [mySessionId, setMySessionId] = useState(
    consultantSessionName2
  )

  const dispatch = useDispatch();
  const [myUserName, setMyUserName] = useState(name)

  const [publisher, setPublisher] = useState(undefined)
  const [consultant, setConsultant] = useState(undefined)

  const [isMic, setIsMic] = useState(true);
  const [isCam, setIsCam] = useState(true);

  //   const [OV, setOV] = useState(null)
  const [customerStream, setCustomerStream] = useState(null);


  const sessionConnect = (token) => {  //스트림 생성 
    console.log('in connection  ')

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
          resolution: '1821x761',

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

        //밑에 부분은 임시로 조건문 주석 처리 한것이다..........
        console.log('streamcreate')
        if (role === CUSTOMER) {

          dispatch(setCustomer(publisher))

          const persondata = {
            imageUrl: imageUrl,
            name: name,
            isMic: isMic,
            isCam: isCam,
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
          dispatch(getCustomer(consultantSessionName2)).then((response) => {

            console.log('getCustomer 액션 성공:', response)


            const User = {
              // imageUrl: response.data_body.imageUrl,
              imageUrl: '',
              name: 'Customer',
              isMic: 'true',
              isCam: 'true',
            };
            console.log('User 넣기')

            dispatch(appendParticipantList(User))



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

      console.log('consultantSessionName2', consultantSessionName2)

    const mine = {
      id: 11,
      role: role,
      name: name,
      imageUrl: 'data:image/jpeg;base64,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',
    }

    dispatch(appendParticipantList(mine))
    alert('myrole' + role)

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

  // useEffect(() => {
  //   if (role === CUSTOMER) {
  //     console.log(consultantSessionName)

  //     if (!consultantSessionName) {

  //       alert('요청된 세션이 없거나 공란입니다. 종료 후 정상접근 바랍니다.')
  //     }

  //   }
  // }, [consultantSessionName])
  const addparticiapnt = (event) => {
    const data = JSON.parse(event.data)
    // console.log('data length message role' + ' ' + data.length + data.message + data.role)

    if (data.role !== role) {
      dispatch(appendParticipantList(data))
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


      session.on('signal:participant', addparticiapnt)



      getToken().then(sessionConnect);

    }
  }, [session])


  const streamCreated = (event) => {
    const subscriber = session.subscribe(event.stream, undefined);
    const subRole = JSON.parse(event.stream.connection.data).clientRole
    //밑에는 임시로 주석처리 한 코드......
    // console.log('streamcreated ' + customer.stream)




    if (role === CONSULTANT) {
      dispatch(setCustomer(subscriber))
      console.log('customer ' + subscriber.stream)

    }

    else if (role === CUSTOMER) {
      // alert('setconsultantsubscriber')
      setConsultant(subscriber)


      if (subRole == CONSULTANT) {
        // payload 에 consultingid 가 온다.
        dispatch(getConsultant(consultantSessionName2)).then((response) => {

          console.log('getConsultant 액션 성공:', response)


          const Consultant = {
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

    // dispatch(appendParticipantList())

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
    consultingid: consultantSessionName2,
    // consultingComment: consultingComment,


  }

  //   // 컨설턴트, 고객 종료시 분리 필요
  const leaveSession = () => {
    console.log('session' + session)
    // role==CONSULTANT &&
    if (role == CONSULTANT && session) {
      session.disconnect();
      dispatch(postConsultingResult({ consultingFinishRequest }))
        .then(() => {
          // dispatch(changeComment(''))
          navigate('/')
        })
    }

    if (role === CUSTOMER && session) {
      session.disconnect();
    }

    setOV(null);
    setMySessionId(consultantSessionName2)
    dispatch(setSession(undefined))
    dispatch(setCustomer(undefined))
    dispatch(resetMsg())
    // setMyUserName(nickname)
    setConsultant(undefined)

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

            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET,POST',
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
            resolve(sessionId);
          }
        });
    });
  }

  const createToken = (sessionId) => {
    console.log('tokennnnnn')
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

            <SGridContainer container spacing={2}>
              <div>

                <Header>

                  <IoMdVideocamIcon>
                    <IoMdVideocam />

                  </IoMdVideocamIcon>
                  <Myspan>
                    뷰티 솔루션 컨설팅

                  </Myspan>
                </Header>

                {

                  consultant !== undefined ? (

                    <Grid container item xs={12} sm={4}
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
                        role == CUSTOMER && consultant &&

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



              </div>
              {/* 
              <Myspan>
                뷰티 솔루션 컨설팅
              </Myspan> */}


              {/* <VideoGroup>
                 

              </VideoGroup> */}


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
                  isCam && customer !== undefined && role == CUSTOMER &&

                  <MyVideoContainer>
                    <UserVideoComponent
                      streamManager={customer}
                    />
                  </MyVideoContainer>

                }
              </SmallChatContainer>

              {/* </UserVideoSGrid> */}


              {/* 우측 컬러팔레트, 채팅*/}
              {
                // role === CONSULTANT &&
                // sgrid
                // <Grid item xs={12} sm={4}
                //   sx={{
                //     display: "flex",
                //     flexDirection: "column",
                //     alignItems: "center",
                //     height: '100%',
                //   }}>


                // </Grid>

              }

              {
                // role === CUSTOMER &&
                // <Grid item xs={12} sm={4}
                //   sx={{
                //     display: "flex",
                //     justifyContent: "end",
                //     height: "80%",
                //     flexDirection: "column",
                //     width: '100%',
                //     border: '2px solid #18c24b99'

                //   }}>


                // </Grid>

              }

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
  // borderRadius: "1rem",
  // padding: "1rem",
  // position:

})
// 내 비디오 컨테이너
const MyVideoContainer = styled(Box)({
  width: "33%",
  // borderRadius: "1rem",
  // padding: "1rem",
  // position:

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
    /* border: 12px solid #dc121299; */
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


const VideoGroup = styled(Grid)`
    display: flex;
    flex-direction: row;
    gap: 3;
    width:  70%;  
      background-color: #d1cbcb;
      position: absolute;
      height: 85%;
  top: 10%;
  left: 5;
  `;
