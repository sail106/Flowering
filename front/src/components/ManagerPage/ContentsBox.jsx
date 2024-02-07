import styled from "styled-components";

import { IoMdArrowForward } from "react-icons/io";

const Box = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  width: 60%;
  margin-right: 280px;
  border-bottom: 1px solid #b7b5b5;
`;

const Answer = styled.th`
  color: #383838;
  font-family: "Noto Sans KR";
  font-size: 16px;
  margin-left: 10px;
  margin-top: 15px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Arrow = styled(IoMdArrowForward)`
  font-weight: bold;
  font-size: 23px;
  cursor: pointer;
`;


const Manager = () => {
  return (
    <>
      <Box>
        <Answer>(공지사항) 개인정보수집 관련 안내</Answer>
        <Arrow />
      </Box>
      <hr />
      <Box>
        <Answer>(공지사항) 개인정보수집 관련 안내</Answer>
        <Arrow />
      </Box>
      <hr />
      <Box>
        <Answer>(공지사항) 개인정보수집 관련 안내</Answer>
        <Arrow />
      </Box>
      <hr />
      <Box>
        <Answer>(공지사항) 개인정보수집 관련 안내</Answer>
        <Arrow />
      </Box>
      <hr />
      <Box>
        <Answer>(공지사항) 개인정보수집 관련 안내</Answer>
        <Arrow />
      </Box>
      <hr />
      <Box>
        <Answer>(공지사항) 개인정보수집 관련 안내</Answer>
        <Arrow />
      </Box>
      <hr />
      <Box>
        <Answer>(공지사항) 개인정보수집 관련 안내</Answer>
        <Arrow />
      </Box>
      <hr />
      <Box>
        <Answer>(공지사항) 개인정보수집 관련 안내</Answer>
        <Arrow />
      </Box>
      <hr />
      <Box>
        <Answer>(공지사항) 개인정보수집 관련 안내</Answer>
        <Arrow />
      </Box>
    </>
  );
};

export default Manager;
