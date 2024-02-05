import styled from "styled-components";
import ExpertsList from "./ExpertsList";
import ManagerFaq from "./ManageFaq";
import Input from "../common/Input";
import { BsSend } from "react-icons/bs";

// ManagerPage 스타일드 컴포넌트
const ManagerPage = styled.div`
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
const Square = styled(BsSend)`
  font-size: 25px;
  position: absolute;
  bottom: 50px;
  right: 250px;
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  width: 75%;
  /* align-items: center; */
  justify-content: space-between;
`;

const H3 = styled.h3`
  padding-top: 30px;
  text-align: start;
`;

const Margin = styled.div`
  margin: 30px;
`;

const AddImageButton = styled.button`
  border: 1px solid #f5f5f5;
  border-radius: 30px;
  background-color: white;
  color: black;
  padding: 10px 10px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const ReviewInput = styled.textarea`
  width: 700px;
  height: 300px;
  padding: 15px;
  font-family: "Noto Sans KR";
  font-size: 16px;
  border: 1px solid #8e8c8c;
  border-radius: 5px;
  resize: none;
  font-size: 14px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b7b5b5;
  }
`;

// Manager 컴포넌트
const Manager = () => {
  return (
    <ManagerPage>
      <Margin />
      <ExpertsList />
      <ManagerFaq />
      <Center>
        <div>
          <H3>공지사항 / 매거진</H3>
          <Input placeholder="선택하세요" />
          <H3>제목</H3>
          <Input placeholder="제목을 입력하세요" />
          <H3>썸네일 이미지</H3>
          <AddImageButton>+ 사진 추가</AddImageButton>
        </div>
        <div>
          <H3>내용</H3>
          <ReviewInput placeholder=" 내용을 입력해주세요" />
          <Square />
        </div>
      </Center>
    </ManagerPage>
  );
};

export default Manager;
