import styled from "styled-components";
import { ButtonBox } from "../store/Button";

const Consulting = styled.div`
  padding: 0 5%;
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
`;

const Td = styled.td`
  padding: 8px;
  text-align: left;
`;

const ButtonTd = styled.td`
    margin:0;
`

const Button = styled(ButtonBox)`
  display: flex;
  min-width: 154px;
  width:50%;
  justify-content:center;
  font-family: "Noto Sans KR";
  font-size: 16px;
  border-radius: 30px;
  margin:0;
`;

const MyCommunity = () => {
  const data = [
    { title: "뷰티 솔루션 컨설팅", time: "2024-01-19 10:00" },
    { title: "뷰티 솔루션 컨설팅2", time: "2024-01-20 11:00" },
    { title: "뷰티 솔루션 컨설팅3", time: "2024-01-21 12:00" },
  ];

  return (
    <Consulting>
      <h2>마이 커뮤니티</h2>
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
              <Td>{row.time}</Td>
              <ButtonTd>

              </ButtonTd>
              <ButtonTd>

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

export default MyCommunity;
