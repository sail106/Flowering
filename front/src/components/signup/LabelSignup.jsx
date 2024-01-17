import styled from "styled-components";

const LabelFlex = styled.label`
  display: flex;
`;

const LabelSignup = (props) => {
  return (
    <LabelFlex htmlFor={props.htmlFor}>{props.children}</LabelFlex>
  )
}

export default LabelSignup;