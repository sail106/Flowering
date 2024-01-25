import Title from "./Title";
import MyCalendar from "../store/MyCalendar";
import RadioButton from "../store/RadioButton";
import styled from "styled-components";
import { ButtonBox } from "../store/Button";
import Input from "../store/Input";

const MyButton = styled(ButtonBox)`
  border-radius: 300px;
  margin: 80px;
  width: 230.145px;
  height: 59.143px;
`;

const Cal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const M1 = styled.div`
  display: flex;
  padding-top: 10px;
  margin: 20px;
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

const H3 = styled.h3`
  padding-top: 30px;
  text-align: start;
`;
const Center = styled.div`
  text-align: start;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const CommunityModify = () => {
  return (
    <Cal>
      <Title text={"예약 수정"} />
      <MyCalendar />
      <M1>
        <RadioButton
          type="radio"
          id="myradio"
          value="10:00"
          width="200px"
          height="100px"
          htmlFor="myradio"
        ></RadioButton>
        <RadioButton value="11:00"></RadioButton>
        <RadioButton value="12:00"></RadioButton>
        <RadioButton value="13:00"></RadioButton>
      </M1>
      <M1>
        <RadioButton value="15:00"></RadioButton>
        <RadioButton value="16:00"></RadioButton>
        <RadioButton value="17:00"></RadioButton>
        <RadioButton value="18:00"></RadioButton>
      </M1>

      <Center>
        <H3>주제</H3>
        <Input placeholder="주제를 입력하세요" />
        <H3>설명</H3>
        <Input placeholder="설명을 입력하세요" />
        <H3>썸네일 이미지</H3>
        <AddImageButton>+ 사진 추가</AddImageButton>
      </Center>
      <ButtonContainer>
        <MyButton>예약취소</MyButton>
        <MyButton>수정완료</MyButton>
      </ButtonContainer>
    </Cal>
  );
};

export default CommunityModify;
