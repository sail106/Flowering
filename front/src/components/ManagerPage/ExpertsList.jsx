import styled from "styled-components";
import { BsSend } from "react-icons/bs";
import Input from "../common/Input";

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const H2 = styled.h3`
  font-family: "Noto Sans KR";
  font-size: 30px;
  padding-left: 8px;
`;

const E = styled.h3`
  font-family: "Noto Sans KR";
  font-size: 20px;
  margin-right: 30px;
  font-weight: 400;
`;
const Experts = styled.div`
  width: 80%;
  height: auto;
`;

const EmailInput = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const Square = styled(BsSend)`
  font-size: 25px;
  cursor: pointer;
  margin-left: 20px;
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
	const { access_token } = useSelector((state) => state.auth.logonUser);
	const [expertsData, setExpertsData] = useState([]);
	const navigate = useNavigate();
  const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    };
    const baseurl = import.meta.env.VITE_APP_BASE_URL;

  const fetchData = async () => {
    try {
				const response = await axios.get(baseurl + 'consultant/list', config);        
				setExpertsData(response.data.data_body); // response.data를 expertsData에 저장
			} catch (error) {
        console.error('Error :', error);
				// alert('결제 실패');
			}
		};

    useEffect(() => {
      fetchData(); // 컴포넌트가 마운트될 때 mydata 함수 실행
    }, []);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSquareClick = () => {
      axios.put(baseurl + 'admin/toconsultant', { email: inputValue }, config)
        .then(response => {
          // 요청 성공 시 처리할 로직 작성
          console.log(response.data);
          alert('승격되었습니다!')
        })
        .catch(error => {
          // 요청 실패 시 처리할 로직 작성
          console.error(error);
        });
    };
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
              <Th>리뷰 개수</Th>
              <Th>만족도</Th>
            </Tr>
          </Thead>
          <Tbody>
            {expertsData.map((row, index) => (
              <Tr key={index}>
                <Td>{row.user_response.name}</Td>
                <Td>{row.user_response.nickname}</Td>
                <Td>{row.user_response.email}</Td>
                <Td>{row.reviewnum}</Td>
                <Td>{row.star}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <H2>전문가 등록</H2>
        <hr />
        <Margin />
        <EmailInput>
          <E>이 메 일 </E>
          <Input 
        width="800px" 
        placeholder="이메일을 입력해주세요" 
        value={inputValue} 
        onChange={handleInputChange} 
      />
          <Square onClick={handleSquareClick} />
        </EmailInput>
        <Margin />
        <H2>FAQ</H2>
        <hr />
      </Experts>
    </>
  );
};

export default ExpertsList;
