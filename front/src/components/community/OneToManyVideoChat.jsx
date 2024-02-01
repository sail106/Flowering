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

import { CONSULTANT, CUSTOMER } from '../../api/CustomConst';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import Participant from '../participant/Participant';
import SmallChat from '../chat/SmallChat';
import { OpenVidu } from 'openvidu-browser';

import {
  settingModalOn, setSession,
  resetSessionName, resetMsg, appendParticipantList
} from '../../store/communitySlice'
import UserVideoComponent from './UserVideoComponent';
import axios from 'axios';
import { CiVideoOn } from "react-icons/ci";

const OPENVIDU_SERVER_URL = 'http://localhost:4443';
const OPENVIDU_SERVER_SECRET = 'MY_SECRET';

// rafce Arrow function style 
const OneToManyVideoChat = () => {

  const { session, community_id } = useSelector(state => state.community)
  //   // const tmp = email?.replace(/[@\.]/g, '-')
  const [creator, setCreator] = useState(undefined)

  //   const [mySessionId, setMySessionId] = useState(
  //     role === CONSULTANT ? tmp : consultantSessionName
  //   )
  const [OV, setOV] = useState(null)
  const { nickname, role, id } = useSelector(state => state.auth.logonUser)
  const { creatorid } = useSelector(state => state.community.creator)

  const dispatch = useDispatch();
  const [myUserName, setMyUserName] = useState(nickname)

  const [publisher, setPublisher] = useState(undefined)
  const [consultant, setConsultant] = useState(undefined)

  const [isMic, setIsMic] = useState(false);
  const [isCam, setIsCam] = useState(false);

  //   const [OV, setOV] = useState(null)


  const sessionConnect = (token) => {
    console.log('in connection  ')

    session
      .connect(
        token, { clientData: myUserName, clientRole: role },
      )

      .then(() => {
        console.log('tokk  ' + token)

        let publisher = OV.initPublisher(undefined, {
          audioSource: undefined,
          videoSource: undefined,
          publishAudio: true,
          publishVideo: true,
          resolution: '1280x960',
          frameRate: 30,
          insertMode: 'APPEND',
          mirror: false,
        });

        publisher.subscribeToRemote()

        session.publish(publisher);
        setPublisher(publisher);

        if (id === community_id) { setCreator(publisher) }

        else { dispatch(appendParticipantList(publisher)) }

        dispatch(setSession(session))

      })
      .catch((error) => { });
  }

  useEffect(() => {
    console.log('session' + session)
    if (session) {
      session.on('streamCreated', streamCreated)
      session.on('streamDestroyed', streamDestroyed)
      session.on('exception', exception)
      getToken().then(sessionConnect);
    }
  }, [session])

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
    console.log('session', session);
  }, [session]);

  useEffect(() => {
    console.log('community_id', community_id);
  }, [community_id]);


  useEffect(() => {

    setIsMic(isMic);
    setIsCam(isCam);

    console.log('ismicchanged' + isMic)
    console.log('iscamchanged' + isCam)

  }, [isMic, isCam]);


  //   const onbeforeunload = () => {
  //     leaveSession();
  //   }

  //   const deleteSubscriber = (streamManager) => {
  //   }

  const joinSession = () => {  //세션 값 넣기.
    const getOV = new OpenVidu();
    dispatch(setSession(getOV.initSession()))
    setOV(getOV)

  }

  // const streamCreated = (event) => {  //subscriber 는 
  //   const subscriber = session.subscribe(event.stream, undefined); //새로운 스트림 구독.
  //   //event.stream 은 생성된 스트림.
  //   const subRole = JSON.parse(event.stream.connection.data).clientRole
  //   //트림의 연결(connection) 객체에서 clientRole 값을 추출 
  //   // 이 정보는 해당 스트림을 생성한 사용자의 역할 

  //   if (subRole === CUSTOMER) { dispatch(appendParticipantList(subscriber)) }
  //   else if (subRole === CUSTOMER) { setCreator(subscriber) }

  // }

  const [customers, setCustomers] = useState([]);  // 배열로 고객들을 관리합니다.
  const streamCreated = (event) => {
    const subscriber = session.subscribe(event.stream, undefined);
    const subRole = JSON.parse(event.stream.connection.data).clientRole;
    const customerId = event.stream.connection.connectionId;


    if (id === community_id && customerId !== community_id) {
      // 컨설턴트가 고객을 구독하고 있는 경우
      const customerId = event.stream.connection.connectionId; // 고객 ID를 가져옵니다.
      const newCustomer = {
        id: customerId,
        role: subRole,
        // 필요한 다른 정보들도 이곳에 추가할 수 있습니다.
      };
      dispatch(appendParticipantList(newCustomer)); // 고객을 추가합니다.
    } else if (role === CUSTOMER && customerId === community_id) {
      // 고객이 컨설턴트를 구독하고 있는 경우
      setCreator(subscriber); // 컨설턴트를 설정합니다.
    } else if (role === CUSTOMER && subRole === CUSTOMER) {
      // 여러 명의 고객이 서로를 구독하는 경우
      const customerId = event.stream.connection.connectionId; // 고객 ID를 가져옵니다.
      const newCustomer = {
        id: customerId,
        role: subRole,
        // 필요한 다른 정보들도 이곳에 추가할 수 있습니다.
      };
      dispatch(appendParticipantList(newCustomer)); // 고객을 추가합니다.
    }
  };



  const streamDestroyed = (event) => {
    deleteSubscriber(event.stream.streamManager);
  }

  const exception = (exception) => {
    console.warn(exception);
  }

  //   // 컨설턴트, 고객 종료시 분리 필요
  const leaveSession = () => {
    console.log('session' + session)

    if (session) {
      session.disconnect();
      dispatch(postConsultingResult({ files, consultingFinishRequest }))
        .then(() => {
          dispatch(changeComment(''))
          dispatch(selectTone(''))
          dispatch(setFiles(''))
          dispatch(resetColor())
          navigate('/')
        })
    }

    if (role === CUSTOMER && session) {
      session.disconnect();
    }

    setOV(null);
    // setMySessionId(role === CONSULTANT ? tmp : consultantSessionName)
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
    return createSession(community_id).then((sessionId) =>
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
          console.log('createsession then')
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

                <IoMdVideocamIcon>
                  <IoMdVideocam />

                </IoMdVideocamIcon>


              </div>

              <Myspan>
                깐달걀 피부 만드는 추천템 공개
              </Myspan>

              <VideoGroup>
                <UserVideoComponent
                  streamManager={creator} />

              </VideoGroup>

              {

                creator !== undefined ? (

                  <Grid container item xs={12} sm={2}
                    sx={{
                      height: "80%",
                      justifyContent: "space-between",
                      gap: 2,

                    }}>

                    <CiVideoOn />


                    <VideoContainer>
                      <UserVideoComponent
                        streamManager={creator}
                      />
                    </VideoContainer>


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

                <Participant />

                <SmallChat />

              </SmallChatContainer>

              {/* </UserVideoSGrid> */}
              {/* <Chat /> */}

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

                // role === CONSULTANT ?
                //   // 컨설턴트
                //   <> 
                //     <MicCamExitGroup>
                //       {/* 마이크 */}
                //       <CustomIconButton
                //         color="inherit"
                //         onClick={() => {
                //           publisher.publishAudio(!isMic)
                //           setIsMic(!isMic)
                //         }}>
                //         {isMic ? <Mic /> : <MicOff color="secondary" />}
                //       </CustomIconButton>
                //       {/* 캠 */}
                //       <CustomIconButton
                //         color="inherit"
                //         onClick={() => {
                //           publisher.publishVideo(!isCam)
                //           setIsCam(!isCam)
                //         }}>
                //         {isCam ? <Videocam /> : <VideocamOff color="secondary" />}
                //       </CustomIconButton>
                //       {/* 종료 */}
                //       <BottomBtn variant="contained" onClick={leaveSession}>
                //         종료
                //       </BottomBtn>
                //     </MicCamExitGroup>
                //   </>
                // :
                // 유저
                <>

                  {/* 마이크,캠 + 필터 + 종료*/}

                  <MicCamExitGroup>

                    {/* 마이크 */}

                    <CustomMicButton
                      color="inherit"
                      onClick={() => {
                        setIsMic(!isMic)
                        // publisher.publishAudio(isMic)

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
                        // publisher.publishVideo(!isCam)
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
                      나가기
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

export default OneToManyVideoChat
// 전체포함 margin으로 띄운 상태

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
