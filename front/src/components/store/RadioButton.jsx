import styled from "styled-components";

const StyledLabel = styled.label`
  display: inline-block;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid black;
  text-align: center;
  line-height: 40px;
  &:hover {
    /* box-shadow: 0 0 0 max(4px, 0.2em) lightgray; */
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
  console.log(props.value);
  return (
    <>
      <StyledButton
        type={props.type}
        id={props.id}
        value={props.value}
        width={props.width}
        height={props.height}
      />
      <StyledLabel htmlFor={props.htmlFor}>{props.value}</StyledLabel>
    </>
  )
}

export default RadioButton;