import styled from "styled-components";

const StyledText = styled.span`
  padding-left: 10px;
  padding-right: 10px;
  color: #979797;
`

const RadioLabelText = (props) => {
  return (
    <StyledText>{props.children}</StyledText>
  )
}

export default RadioLabelText;