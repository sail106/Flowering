import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";

import { setSelectedTime } from "../../store/selectedSlice";

const StyledLabel = styled.label`
  display: inline-block;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid black;
  margin-right: ${props => props['margin-right'] || '0px'};
  text-align: center;
  line-height: 40px;
  &:hover {
    cursor: pointer;
  }
  font-size: 20px;
  font-family: "Lexend Deca";
`;

const StyledButton = styled.input`
  display: none;
  &:checked + ${StyledLabel} {
    background: #F28482;
    border: 1px solid black;
    color: white;
  }
`;

const RadioButton = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const clickTimeHandler = async () => {
    setIsChecked(!isChecked);
    dispatch(setSelectedTime(props.value));

    // 시간을 누를때마다 axios 요청
    // try {
    //   const baseurl = import.meta.env.VITE_APP_BASE_URL;
    //   const response = await axios.get(`${baseurl}/consultings/getreservation?time=${props.selectedDate}T${props.selectedTime}`);
    //   const isReserved = response.data;
    //   if (isReserved) {
    //     console.log(`Time ${props.value} is reserved.`);
    //   } else {
    //     console.log(`Time ${props.value} is available.`);
    //   }
    // } catch (error) {
    //   console.error("Error while checking reservation:", error);
    // }
  };

  return (
    <>
      <StyledButton
        type="radio"
        id={props.value}
        value={props.value}
        onClick={clickTimeHandler}
        checked={isChecked}
        name={props.name}
      />
      <StyledLabel htmlFor={props.value} margin-right={props['margin-right']} >{props.value}</StyledLabel>
    </>
  );
};

export default RadioButton;