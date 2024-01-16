import styled from "styled-components";

const LabelBox = styled.div`
  display: flex;
  justify-content: center;
`;

const LabelContainer = (props) => {
  return (
    <LabelBox id="myId">{props.children}</LabelBox>
  )
}

export default LabelContainer;