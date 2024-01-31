import styled from "styled-components";
import { ButtonBox } from "../common/Button";
import { LuClock3 } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";

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
  width:80%;
  height: auto;
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
    { title: "뷰티 솔루션 컨설팅", time: "10:00", date: "01.19(금)" },
  ];

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
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>{row.title}</Td>
              <Td>
                <Calendar /> {row.date}
                {"  "}|{"  "}
                <Clock /> {row.time}
              </Td>
              <ButtonTd>
                <FinalButton>최종 결과 보고서</FinalButton>
              </ButtonTd>
              <ButtonTd>
                <Button>리뷰 작성</Button>
              </ButtonTd>
              <ButtonTd>
                <Button>일정 변경</Button>
              </ButtonTd>
              <ButtonTd>
                <Button>바로가기</Button>
              </ButtonTd>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Consulting>
  );
};

export default MyConsulting;
