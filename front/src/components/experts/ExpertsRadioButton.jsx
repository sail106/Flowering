import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

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
  border-color: ${props => props.active ? 'black' : '#B1B1B1'};
  color: ${props => props.active ? 'black' : '#B1B1B1'};
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

const ExpertsRadioButton = (props) => {
  const dispatch = useDispatch();

  const clickTimeHandler = async () => {
    props.setSelectedValue(props.value);
    dispatch(setSelectedTime(props.value));
  };
  return (
    <>
      <StyledButton
        type="radio"
        id={props.value}
        value={props.value}
        onClick={clickTimeHandler}
        checked={props.selectedValue === props.value}
        name={props.name}
        disabled={!props.active} // active가 false일 때 버튼 비활성화
      />
      <StyledLabel htmlFor={props.value} margin-right={props['margin-right']} active={props.active} >{props.value}</StyledLabel>
    </>
  );
};

export default ExpertsRadioButton;