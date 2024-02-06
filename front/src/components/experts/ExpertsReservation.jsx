import Title from "../modify/Title";
import MyCalendar from "../common/MyCalendar";
import { ButtonBox } from "../common/Button";
import RadioButton from "../common/RadioButton";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // useSelector import 추가
import { setSelectedDate, setSelectedTime } from "../../store/selectedSlice";
import { Navigate, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const { selectedTime, selectedDate } = useSelector(state => state.selected);
  //   const { role, imageUrl } = useSelector(state => state.auth.logonUser)

  const handleClick = () => {

    console.log("Button clicked!" + selectedDate + " " + selectedTime);
    // 클릭 이벤트에 대한 추가적인 동작 구현
    navigate('/orderpage')
  };

  // useEffect(() => {
  //   console.log('selectedTime', selectedTime);
  // }, [selectedTime]);

  // const handleRadioChange = (value) => {
  //   console.log('settt' + selectedTime)
  //   setSelectedTime(value);
  // };

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
          htmlFor="myradio"
          name="btn"
        // onClick={() => setSelectedTime("10:00")}
        />
        <StyledRadioButton
          value="11:00"
          type="radio"
          id="myradio2"
          htmlFor="myradio2"
          name="btn"
          onClick={() => setSelectedTime("11:00")}
        />
        <StyledRadioButton
          value="12:00"
          type="radio"
          id="myradio3"
          htmlFor="myradio3"
          name="btn"
          onClick={() => setSelectedTime("12:00")}
        />
        <StyledRadioButton
          value="13:00"
          type="radio"
          id="myradio4"
          htmlFor="myradio4"
          name="btn"
          onClick={() => setSelectedTime("13:00")}
        />
      </M1>
      <M1>
        <StyledRadioButton
          value="15:00"
          type="radio"
          id="myradio5"
          htmlFor="myradio5"
          name="btn"
          onClick={() => setSelectedTime("15:00")}
        />
        <StyledRadioButton
          type="radio"
          id="myradio6"
          value="16:00"
          htmlFor="myradio6"
          name="btn"
          onClick={() => setSelectedTime("16:00")}
        />
        <StyledRadioButton
          type="radio"
          id="myradio7"
          value="17:00"
          htmlFor="myradio7"
          name="btn"
          onClick={() => setSelectedTime("17:00")}
        />
        <StyledRadioButton
          type="radio"
          id="myradio8"
          value="18:00"
          htmlFor="myradio8"
          name="btn"
          onClick={() => setSelectedTime("18:00")}
        />
      </M1>
      <ButtonContainer>
        <MyButton onClick={handleClick}>결제하기</MyButton>
      </ButtonContainer>
    </Cal>
  );
};

export default ExpertsReservation;
