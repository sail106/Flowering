import styled from "styled-components";
import { ButtonBox } from "../common/Button";
import { LuClock3 } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { getCustomer, setconsultid } from "../../store/consultSlice";
import { useNavigate } from "react-router-dom";
import { setRole, setname } from "../../store/authSlice";
import {
  appendParticipantList,
  setconsultantSessionName,
} from "../../store/consultsessionnameSlice";
import axios from "axios";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

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
  padding-left: 2%;
`;

const Consulting = styled.div`
  padding: 0 10%;
  height: auto;
  width: 80%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 5%;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

const Th = styled.th`
  padding: 8px;
  text-align: left;
  width: 30%;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  padding-left: 2%;
`;

const Td = styled.td`
  padding: 8px;
  padding-left: 2%;
  white-space: pre;
  color: #383838;
  font-family: "Noto Sans KR";
  font-size: 17px;
`;

const ButtonTd = styled.td`
  width: 20%;
  padding: 8px;
  text-align: end;
`;

const Button = styled(ButtonBox)`
  min-width: 154px;
  width: 50%;
  justify-content: center;
  font-family: "Noto Sans KR";
  font-size: 16px;
  border-radius: 30px;

  margin-right: 10%;
`;

const FinalButton = styled(Button)`
  background-color: black;
  border: 1px solid black;
  width: 100%;
`;

const ExpertConsulting = () => {
  const [consultingData, setconsultingData] = useState(); // 상태 초기화
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, role, id, nickname, imageUrl } = useSelector(
    (state) => state.auth.logonUser
  );
  const { access_token } = useSelector((state) => state.auth.logonUser);
  const token = access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      // 다른 필요한 헤더도 추가할 수 있습니다.
    },
  };
  const baseurl = import.meta.env.VITE_APP_BASE_URL;
  const buttonclick = async (consultingid) => {
    console.log('click' + consultingid)
    dispatch(setRole('CONSULTANT'))
    dispatch(setname(name))
    dispatch(setconsultantSessionName(consultingid))
    console.log('consultingid', consultingid)

    const consultant = {
      imageUrl: imageUrl,
      name: name,
      isMic: "true",
      isCam: "true",
    };

    dispatch(appendParticipantList(consultant));
    // consultant 가져오는 로직

    //payload 에 consultingid 가 온다.
    dispatch(getCustomer(consultingid))
      .then((response) => {
        console.log("getCustomer 액션 성공:", response);
      })
      .catch((error) => {
        console.error("getCustomer 액션 실패:", error);
      });
    // 위는 consultant 가져오는 로직

    const customer = {
      imageUrl: imageUrl,
      name: "customer2",
      isMic: "true",
      isCam: "true",
    };


    try {
      // 여기에 액세스 토큰을 설정합니다.
      // const token='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0Iiwicm9sZSI6IkNPTlNVTFRBTlQiLCJpYXQiOjE3MDc2NzIyNjcsImV4cCI6MTcwNzc1ODY2N30.3sta_Jud2eTX2jlAUX1XUgZAKAjpb6nc_3j6RWdvqFY';

      console.log(baseurl + "consultings/activate/" + consultingid, config);
      const url = `${baseurl}consultings/activate/${consultingid}`;

      const response = await axios.put(url, null, config);

      // 요청 성공 시 수행할 작업
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error :", error);
      // alert('결제 실패');
    }

    navigate("/OneToOneVideoChat");
  };

  useEffect(() => {
    const mydata = async () => {
      try {
        const alllist = await axios.get(baseurl + "consultant/myAlllist", config);
        console.log(alllist)
        setconsultingData(alllist.data.data_body);
      } catch (error) {
        console.error("Failed to update user info:", error);
      }
    };
    mydata(); // 컴포넌트가 마운트될 때 mydata 함수 실행
  }, []);

  return (
    <Consulting>
      <H2>나의 컨설팅</H2>
      <hr />
      <Table>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {consultingData && consultingData.length > 0 && (
            // consultingData가 존재하고 비어 있지 않은 경우에만 map 함수 호출
            consultingData.map((row, index) => {
              // const date = new Date(row.time);
              // const formattedDate = format(date, "MM.dd(E)", { locale: ko });
              // const formattedTime = format(date, "HH:mm");

              const date = new Date(row.date + " " + row.time); // date와 time을 합쳐서 Date 객체 생성
              const formattedDate = format(date, "MM.dd(E)", { locale: ko });
              const formattedTime = format(date, "HH:mm");

              return (
                <Tr key={index}>
                  <Td>'{row?.user_response
                    ?.name}'님 뷰티 컨설팅</Td>
                  <Td>
                    <Calendar /> {formattedDate}
                    {"  "}|{"  "}
                    <Clock /> {formattedTime}
                  </Td>
                  <ButtonTd>
                    <FinalButton>최종 결과 보고서 작성하기</FinalButton>
                  </ButtonTd>
                  <ButtonTd>
                    <Button onClick={() => buttonclick(row.consultingid)}>
                      바로가기
                    </Button>
                  </ButtonTd>
                </Tr>
              );
            })
          )}
        </Tbody>
      </Table>
    </Consulting>
  );
};

export default ExpertConsulting;
