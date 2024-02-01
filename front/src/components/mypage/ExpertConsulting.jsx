import styled from "styled-components";
import { ButtonBox } from "../common/Button";
import { LuClock3 } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { setConsultantSessionName, setconsultid } from "../../redux/slices/consultSlice";
import { useNavigate } from 'react-router-dom';
import { setRole, setname } from "../../redux/slices/authSlice";
import { setConsultantSessionName2 } from "../../redux/slices/consultsessionnameSlice";

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
  width:80%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom:5%;
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
  padding-left:2%;
  `;

const Td = styled.td`
  padding: 8px;
  padding-left:2%;
  white-space: pre;
  color: #383838;
  font-family: "Noto Sans KR";
  font-size: 17px;
`;

const ButtonTd = styled.td`
  width: 20%;
  padding: 8px;
  text-align:end;
`;

const Button = styled(ButtonBox)`
  min-width: 154px;
  width: 50%;
  justify-content: center;
  font-family: "Noto Sans KR";
  font-size: 16px;
  border-radius: 30px;
  
  margin-right:10%;
`;

const FinalButton = styled(Button)`
  background-color: black;
  border: 1px solid black;
  width:100%;
`;


const ExpertConsulting = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { session, customer, reservationId, consultantSessionName } = useSelector(state => state.consult)

  const buttonclick = (consultingid) => {
    console.log('click' + consultingid)
    dispatch(setRole('CONSULTANT'))
    dispatch(setname('CONSULTANT'))
    dispatch(setConsultantSessionName2(consultingid))
    console.log('consultingid', consultingid)

    navigate('/OneToOneVideoChat')
  }
  const data = [
    { title: "'김아인'님뷰티 컨설팅", time: "10:00", date: "2024-01-19", consultingid: "1" },
    { title: "'김아인'님뷰티 컨설팅", time: "10:00", date: "2024-01-19", consultingid: "2" },
  ];

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
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>{row.title}</Td>
              <Td>
                <Calendar /> {row.date}
                {"  "}|{"  "}
                <Clock /> {row.time}
              </Td>
              <ButtonTd>

                <FinalButton>최종 결과 보고서 작성하기</FinalButton>
              </ButtonTd>

              <ButtonTd>
                <Button onClick={() => buttonclick(row.consultingid)}>바로가기</Button>

              </ButtonTd>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Consulting>
  );
};

export default ExpertConsulting;
