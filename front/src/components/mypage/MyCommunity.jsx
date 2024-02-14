import styled from "styled-components";
import { ButtonBox } from "../common/Button";
import { LuClock3 } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { OpenVidu } from 'openvidu-browser';
import { setCommunityid,   setSession } from "../../store/communitySlice";
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { setConsultantSessionName } from "../../store/consultSlice";

const Clock = styled(LuClock3)`
  padding-bottom: 4px;
  vertical-align: middle;
`;

const Calendar = styled(IoCalendarOutline)`
  vertical-align: middle;
  padding-bottom: 4px;
`;

const H2 = styled.h2`
  font-family: "Noto Sans KR";
  font-size: 30px;
  padding-left: 8px;
`;

const Community = styled.div`
  width: 80%;
  height: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

const Th = styled.th`
  padding: 8px;
  text-align: left;
  width: 27%;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
`;

const Td = styled.td`
  padding: 8px;
  white-space: pre;
  color: #383838;
  font-family: "Noto Sans KR";
  font-size: 17px;
`;

const ButtonTd = styled.td`
  width: 10%;
  padding: 8px;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
`;

const Button = styled(ButtonBox)`
  min-width: 154px;
  width: 50%;
  justify-content: center;
  font-family: "Noto Sans KR";
  font-size: 16px;
  border-radius: 30px;
`;

const OPENVIDU_SERVER_URL = 'https://i10c106.p.ssafy.io';
const OPENVIDU_SERVER_SECRET = 'MY_SECRET';

const MyCommunity = () => {
  const [OV, setOV] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { session, community_id } = useSelector(state => state.community)
  const [publisher, setPublisher] = useState(undefined)
  const [creator, setCreator] = useState(undefined)
  
  const { nickname, email, role } = useSelector(state => state.auth.logonUser)


  const streamCreated = (event) => {
    // const subscriber = session.subscribe(event.stream, undefined);
    const subRole = JSON.parse(event.stream.connection.data).clientRole  //스트림의 구독자

  }

  const [myUserName, setMyUserName] = useState(nickname)

  // const streamDestroyed = (event) => {
  //   deleteSubscriber(event.stream.streamManager);
  // }

  // const exception = (exception) => {
  //   console.warn(exception);
  // }

  // useEffect(() => {
  //   console.log('cccccccccc'+community_id)
  //   if (session) {

  //     // session.on('streamCreated', streamCreated)
  //     // console.log('streamDestroyed '  )
  //     // session.on('streamDestroyed', streamDestroyed)
  //     // console.log('exception '  )
  //     // session.on('exception', exception)
  //     // console.log('seesion is  ' + session)
  //     // console.log('community_id is  ' + community_id)
  //     getToken().then(sessionConnect)
  //   }

  // }, [session])


  // const sessionConnect = (token) => {
  //   console.log('in connection  ')

  //   session
  //     .connect(
  //       token, { clientData: myUserName, clientRole: role },
  //     )

  //     .then(() => {
  //       console.log('tokk  ' + token)

  //       let publisher = OV.initPublisher(undefined, {
  //         audioSource: undefined,
  //         videoSource: undefined,
  //         publishAudio: true,
  //         publishVideo: true,
  //         resolution: '1280x960',
  //         frameRate: 30,
  //         insertMode: 'APPEND',
  //         mirror: false,
  //       });

  //       publisher.subscribeToRemote()
  //       console.log(' OneToManyVideoChat')

  //       session.publish(publisher);

  //       setPublisher(publisher);

  //       // if (role === CUSTOMER) { dispatch(setCustomer(publisher)) }
  //       // if (role === CUSTOMER) 

  //       setCreator(publisher)


  //       navigate('/OneToManyVideoChat')

  //     })
  //     .catch((error) => { });
  // }

  // const joinSession = (communityId) => {
  //   const getOV = new OpenVidu();
  //   dispatch(setSession(getOV.initSession()))
  //   setOV(getOV)
  //   console.log('session setCommunityid'+session)

  //   dispatch(setCommunityid(communityId))


  //   console.log(communityId);
  // }


  // const getToken = () => {
  //   console.log('commid' + community_id)
  //   return createSession(community_id).then((sessionId) => createToken(sessionId));
  // }

  // const createToken = (sessionId) => {

  //   console.log(sessionId)
  //   console.log(sessionId.customSessionId)
  //   console.log(OPENVIDU_SERVER_URL + "/openvidu/api/sessions/" + String(sessionId) + "/connection")
  //   return new Promise((resolve, reject) => {
  //     const data = {
  //       "type": "WEBRTC",
  //       "role": "PUBLISHER",
  //       "kurentoOptions": {
  //         "videoMaxRecvBandwidth": 1000,
  //         "videoMinRecvBandwidth": 300,
  //         "videoMaxSendBandwidth": 1000,
  //         "videoMinSendBandwidth": 300,
  //         "allowedFilters": [
  //           "GStreamerFilter",
  //           "FaceOverlayFilter",
  //           "ChromaFilter"
  //         ]
  //       }
  //     };
  //     console.log( "beforeconnect")

  //     axios
  //       .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions/" + String(sessionId) + "/connection", data, {
  //         headers: {
  //           Authorization: 'Basic ' + btoa(
  //             'OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET
  //           ),
  //           'Content-Type': 'application/json',
  //           'Access-Control-Allow-Origin': '*',
  //           'Access-Control-Allow-Methods': 'GET,POST',
  //         },
  //       })
  //       .then((response) => {
  //         resolve(response.data.token);
  //       })
  //       .catch((error) => reject(error));
  //   });
  // }

  // const createSession = (sessionId) => {
  //   return new Promise((resolve, reject) => {

  //     const data = JSON.stringify({ customSessionId: String(sessionId) });


  //     console.log('Basic ' + btoa(
  //       'OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET))

  //     console.log('session added' + session)
  //     console.log(sessionId)

  //     console.log(data)
  //     console.log(OPENVIDU_SERVER_URL + '/openvidu/api/sessions')

  //     axios
  //       .post(OPENVIDU_SERVER_URL + '/openvidu/api/sessions', data, {
  //         headers: {
  //           Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
  //           'Content-Type': 'application/json',

  //           // 'Access-Control-Allow-Origin': '*',
  //           // 'Access-Control-Allow-Methods': 'GET,POST',
  //         },

  //       })

  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((response) => {
  //         var error = Object.assign({}, response);
  //         if (error?.response?.status === 409) {
  //           resolve(sessionId);
  //         }
  //       });
  //   });
  // }

  const btnclick = (community_id) => {
    console.log('click' + community_id)
    dispatch(setRole('creator'))
    dispatch(setname('creator'))

    dispatch(setConsultantSessionName(community_id))
    console.log('community_id', community_id)


    const consultant = {
      imageUrl: imageUrl,
      name: name,
      isMic: 'true',
      isCam: 'true',
    };

    console.log('dddddddddddd')
    dispatch(appendParticipantList(consultant))
    // consultant 가져오는 로직 


    //payload 에 consultingid 가 온다.
    dispatch(getCustomer(consultingid)).then((response) => {

      console.log('getCustomer 액션 성공:', response)
    }).catch((error) => {
      console.error('getCustomer 액션 실패:', error);
    })
    // 위는 consultant 가져오는 로직 

    navigate('/OneToOneVideoChat')

  }

  const data = [
    { title: "뷰티 솔루션 컨설팅", time: "10:00", date: "01.19(금)", community_id: 1 },
    { title: "뷰티 솔루션 컨설팅2", time: "11:00", date: "01.19(금)", community_id: 2 },
  ];

  return (
    <Community>
      <H2>마이 커뮤니티</H2>
      <hr />
      <Table>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>{row.title}</Td>
              <Td>
                <Calendar /> {row.date}
                {"  "}|{"  "}
                <Clock /> {row.time}
              </Td>
              <ButtonTd>
                <Button>수정하기</Button>
              </ButtonTd>
              <ButtonTd>
                {/* Passing the community_id as an argument */}
                <Button onClick={() => btnclick(row.community_id)}>바로가기</Button>
              </ButtonTd>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Community>
  );
};

export default MyCommunity;
