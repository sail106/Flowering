import styled from "styled-components";
import { ButtonBox } from "../store/Button";
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

const Community = styled.div`
  padding: 0 10%;
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

const MyCommunity = () => {
  const data = [
    { title: "뷰티 솔루션 컨설팅", time: "10:00", date: "2024-01-19" },
    { title: "뷰티 솔루션 컨설팅2", time: "11:00", date: "2024-01-20" },
    { title: "뷰티 솔루션 컨설팅3", time: "12:00", date: "2024-01-21" },
  ];

  return (
    <Community>
      <H2>마이 커뮤니티</H2>
      <hr />
      <Table>
        <Thead>
          <Tr>
            <Th>Title</Th> {/* y축 레이블 헤더 */}
            <Th>Time</Th> {/* 데이터 헤더 (여기서는 숨길 수 있습니다) */}
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
              <ButtonTd></ButtonTd>
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
    </Community>
  );
};

export default MyCommunity;
