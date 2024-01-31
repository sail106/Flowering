import Title from "../modify/Title";
import MyCalendar from "../common/MyCalendar";
import { ButtonBox } from "../common/Button";
import RadioButton from "../common/RadioButton";
import styled from "styled-components";

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

const Margin = styled.div`
  margin: -50px;
`;
const Margin2 = styled.div`
  margin: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const ExpertsReservation = () => {
  return (
    <Cal>
      <Margin />
      <Title text={"Reservation"} />
      <Margin2 />
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

      <ButtonContainer>
        <MyButton>결제하기</MyButton>
      </ButtonContainer>
    </Cal>
  );
};

export default ExpertsReservation;
