import styled from "styled-components";
import { ButtonBox } from "../common/Button";
import { LuClock3 } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { setRole, setname } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { setconsultantSessionName } from "../../store/consultsessionnameSlice";
import axios from "axios";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Link } from "react-router-dom";

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

const Consulting = styled.div`
  width: 80%;
  height: auto;
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
  width: 20%;
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
  width: 15%;
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
  margin: 0;
`;

const FinalButton = styled(Button)`
  background-color: black;
  border: 1px solid black;
`;

const MyConsulting = () => {
  const data = [
    {
      title: "뷰티 솔루션 컨설팅",
      time: "10:00",
      date: "01.19(금)",
      consulting_id: "1",
    },
  ];
  const { access_token } = useSelector((state) => state.auth.logonUser);
  const { name, role, id, nickname, imageUrl } = useSelector(
    (state) => state.auth.logonUser
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const consultantSessionName = useSelector(
    (state) => state.consultsessionname.consultantSessionName
  );

  const [isactive, Setisactive] = useState(null);

  const btnclick = async (consulting_id) => {
    console.log("consulting_id " + consulting_id);

    try {
      const token = access_token; // 여기에 액세스 토큰을 설정합니다.
      console.log("tooo   " + token);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const baseurl = import.meta.env.VITE_APP_BASE_URL;

      const response = await axios.get(
        baseurl + "consultings/" + consulting_id,
        config
      );

      // 요청 성공 시 수행할 작업
      console.log("Response:", response.data);
      console.log("data_body  :", response.data.data_body);
      Setisactive(response.data.data_body.active);
      dispatch(setconsultantSessionName(consulting_id));

      console.log("isactive" + isactive);
    } catch (error) {
      console.error("Error :", error);
      // alert('결제 실패');
    }

    console.log("isactive" + isactive);
  };

  useEffect(() => {
    console.log("isactive", isactive);

    if (isactive === null) {
      // isactive가 null일 때는 아무것도 하지 않음
      return;
    }

    if (isactive) {
      dispatch(setRole("USER"));
      dispatch(setname(name));

      navigate("/OneToOneVideoChat");
    } else {
      alert("컨설턴트가 아직 방을 입장하지 않았습니다");
    }
  }, [isactive]);

  const [consultingData, setConsultingData] = useState([]); // 상태 초기화
  const accessToken = useSelector((state) => state.auth.logonUser.access_token);
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  const mydata = async () => {
    try {
      const baseurl = import.meta.env.VITE_APP_BASE_URL;

      // const response = await axios.get("http://i10c106.p.ssafy.io:8080/v1/users/myallconsultinglist", config);
      const response = await axios.get(
        baseurl + "users/myallconsultinglist",
        config
      );
      console.log(response.data);
      console.log("성공");
      setConsultingData(response.data.data_body); // 데이터를 상태에 저장
    } catch (error) {
      console.error("Failed to update user info:", error);
    }
  };
  const [isfirstdone, setisfirstdone] = useState(""); // 상태 초기화
  const [isseconddone, setisseconddone] = useState(""); // 상태 초기화
  const judge = async (consulting_id) => {
    try {
      const baseurl = import.meta.env.VITE_APP_BASE_URL;
      const firstresponse = await axios.get(
        baseurl + `survey/find/${consulting_id}`,
        config
      );
      const secondresponse = await axios.get(
        baseurl + `analysis/find/${consulting_id}`,
        config
      );
      console.log("first", firstresponse.data);
      console.log("second", secondresponse.data);
      if (firstresponse.data.data_body === null) {
        navigate(`/firstsurvey`, { state: { value: { consulting_id } } });
      } else if (secondresponse.data.data_body === null) {
        navigate(`/phototest`, { state: { value: { consulting_id } } });
      } else {
        btnclick(consulting_id);
      }
    } catch (error) {
      console.error("Failed to update user info:", error);
    }
  };
  useEffect(() => {
    mydata(); // 컴포넌트가 마운트될 때 mydata 함수 실행
  }, []);
  // console.log(consultingData)

  return (
    <Consulting>
      <H2>마이 컨설팅</H2>
      <hr />
      <Table>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {consultingData &&
            consultingData.length > 0 &&
            consultingData?.map((row, index) => {
              const date = new Date(row.date + " " + row.time); // date와 time을 합쳐서 Date 객체 생성
              const formattedDate = format(date, "MM.dd(E)", { locale: ko });
              const formattedTime = format(date, "HH:mm");

              return (
                <Tr key={index}>
                  <Td>뷰티 솔루션 컨설팅</Td>
                  <Td>
                    <Calendar /> {formattedDate}
                    {"  "}|{"  "}
                    <Clock /> {formattedTime}
                  </Td>
                  <ButtonTd>
                    <FinalButton>최종 결과 보고서</FinalButton>
                  </ButtonTd>
                  <ButtonTd>
                    <Link to={`/review/${row.consulting_id}`} reloadDocument>
                      <Button>리뷰 작성</Button>
                    </Link>
                  </ButtonTd>
                  <ButtonTd>
                    <Button>일정 변경</Button>
                  </ButtonTd>
                  <ButtonTd>
                    <Button onClick={() => judge(row.consulting_id)}>
                      바로가기
                    </Button>
                  </ButtonTd>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </Consulting>
  );
};

export default MyConsulting;
