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

const StyledRadioButton = styled(RadioButton)`
  margin-right: 20px;
  margin: 0 10px; /* 여백을 조절할 값 설정 */
`;

const ExpertsReservation = () => {
  return (

    <Cal>

      <Margin />
      <Title text={"Reservation"} />
      <Margin2 />
      <MyCalendar />

      <M1>
        <StyledRadioButton
          type="radio"
          id="myradio"
          value="10:00"
          // width="200px"
          // height="100px"
          htmlFor="myradio"
        ></StyledRadioButton>

        <StyledRadioButton value="11:00" />
        <StyledRadioButton value="12:00" />
        <StyledRadioButton value="13:00" />

      </M1>


      <M1>

        <StyledRadioButton value="15:00" />
        <StyledRadioButton value="16:00" />
        <StyledRadioButton value="17:00" />
        <StyledRadioButton value="18:00" />
        
      </M1>


      <ButtonContainer>
        <MyButton>결제하기</MyButton>
      </ButtonContainer>

    </Cal>

  );
};

export default ExpertsReservation;
