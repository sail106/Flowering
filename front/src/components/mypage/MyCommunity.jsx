import styled from "styled-components";
import { ButtonBox } from "../store/Button";
import { LuClock3 } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { OpenVidu } from 'openvidu-browser';
import { setSession } from "../../redux/slices/communitySlice";
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
 import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';  

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

const OPENVIDU_SERVER_URL = 'http://localhost:4443';
const OPENVIDU_SERVER_SECRET = 'OPENVIDU_SECRET';

const MyCommunity = () => {
  const [OV, setOV] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { session, community_id } = useSelector(state => state.community)

  const streamCreated = (event) => {

    const subscriber = session.subscribe(event.stream, undefined);
    const subRole = JSON.parse(event.stream.connection.data).clientRole
    if (role === CONSULTANT && subRole === CUSTOMER) { dispatch(setCustomer(subscriber)) }
    else if (role === CUSTOMER && subRole === CONSULTANT) { setConsultant(subscriber) }
  }

  const streamDestroyed = (event) => {
    deleteSubscriber(event.stream.streamManager);
  }

  const exception = (exception) => {
    console.warn(exception);
  }

  useEffect(() => {
    if (session) {
      session.on('streamCreated', streamCreated)
      session.on('streamDestroyed', streamDestroyed)
      session.on('exception', exception)
      getToken().then(sessionConnect)
      navigate('/OneToManyVideoChat')
    }
  }, [session])


  const sessionConnect = (token) => {
    session
      .connect(
        token, { clientData: myUserName, clientRole: role },
      )
      .then(() => {
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
        if (role === CUSTOMER) { dispatch(setCustomer(publisher)) }
        if (role === CONSULTANT) { setConsultant(publisher) }
        dispatch(setSession(session))
      })
      .catch((error) => { });
  }
  const joinSession = (communityId) => {  // Modified the argument to communityId
    const getOV = new OpenVidu();
    dispatch(setSession(getOV.initSession()))
    setOV(getOV)
    console.log(communityId);

  }


  const getToken = () => {
    return createSession(community_id).then((sessionId) => createToken(sessionId));
  }

  const createToken = (sessionId) => {
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
        .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions/" + sessionId + "/connection", data, {
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

  const createSession = (sessionId) => {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify({ customSessionId: sessionId });
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
          resolve(response.data.id);
        })
        .catch((response) => {
          var error = Object.assign({}, response);
          if (error?.response?.status === 409) {
            resolve(sessionId);
          } else {
            console.warn(
              'No connection to OpenVidu Server. This may be a certificate error at ' +
              OPENVIDU_SERVER_URL,
            );
            if (
              window.confirm(
                'No connection to OpenVidu Server. This may be a certificate error at "' +
                OPENVIDU_SERVER_URL +
                '"\n\nClick OK to navigate and accept it. ' +
                'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
                OPENVIDU_SERVER_URL +
                '"',
              )
            ) {
              window.location.assign(OPENVIDU_SERVER_URL + '/accept-certificate');
            }
          }
        });
    });
  }
  const data = [
    { title: "뷰티 솔루션 컨설팅", time: "10:00", date: "01.19(금)", community_id: 1 },
    { title: "뷰티 솔루션 컨설팅2", time: "11:00", date: "01.19(금)", community_id: 1 },
    { title: "뷰티 솔루션 컨설팅3", time: "12:00", date: "01.19(금)", community_id: 1 },
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
                <Button onClick={() => joinSession(row.community_id)}>바로가기</Button>
              </ButtonTd>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Community>
  );
};

export default MyCommunity;
