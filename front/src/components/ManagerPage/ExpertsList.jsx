import styled from "styled-components";
import { BsSend } from "react-icons/bs";
import Input from "../common/Input";

const H2 = styled.h3`
  font-family: "Noto Sans KR";
  font-size: 30px;
  padding-left: 8px;
`;

const Experts = styled.div`
  width: 80%;
  height: auto;
`;

const EmailInput = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

const Square = styled(BsSend)`
  font-size: 25px;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 5%;
`;

const Margin = styled.table`
  margin: 40px;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

const Th = styled.th`
  padding: 8px;
  text-align: left;
  width: 15%;
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

// ExpertsList component
const ExpertsList = () => {
  // Sample data for experts
  const data = [
    {
      name: "서이현",
      nickname: "BIBI",
      email: "ehyun@gmail.com",
      count: 2,
      ratio: "100%",
      review: 4.9,
    },
    {
      name: "김지민",
      nickname: "LEINA",
      email: "zmin@gmail.com",
      count: 4,
      ratio: "50%",
      review: 4.8,
    },
    {
      name: "홍설하",
      nickname: "DIANA",
      email: "sulha@gmail.com",
      count: 5,
      ratio: "75%",
      review: 4.7,
    },
    {
      name: "안유린",
      nickname: "RUNA",
      email: "urin@gmail.com",
      count: 3,
      ratio: "100%",
      review: 4.8,
    },
  ];

  return (
    // Page content
    <>
      <h1>MANAGER PAGE</h1>
      <hr />
      <Experts>
        <H2>전문가 목록</H2>
        <hr />
        <Table>
          <Thead>
            <Tr>
              <Th>이름</Th>
              <Th>닉네임</Th>
              <Th>이메일</Th>
              <Th>오늘의 컨설팅 수</Th>
              <Th>보고서 완성률</Th>
              <Th>만족도</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row, index) => (
              <Tr key={index}>
                <Td>{row.name}</Td>
                <Td>{row.nickname}</Td>
                <Td>{row.email}</Td>
                <Td>{row.count}</Td>
                <Td>{row.ratio}</Td>
                <Td>{row.review}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <H2>전문가 등록</H2>
        <hr />
        <Margin />
        <EmailInput>
          <p>이메일</p>
          <Input width={"587px"} placeholder="이메일을 입력해주세요" />
          <Square />
        </EmailInput>
        <Margin />
        <H2>FAQ</H2>
        <hr />
      </Experts>
    </>
  );
};

export default ExpertsList;
