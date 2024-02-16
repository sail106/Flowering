import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { LuClock3 } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { OpenVidu } from 'openvidu-browser';

import { ButtonBox } from "../common/Button";
import { setCommunityid,   setSession } from "../../store/communitySlice";
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

  const btnclick = (community_id) => {
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
