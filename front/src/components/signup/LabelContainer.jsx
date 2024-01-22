import styled from "styled-components";

const LabelBox = styled.div`
  display: flex;
  padding-bottom: 30px;
`;

const LabelContainer = (props) => {
  return (
    <LabelBox id="myId">{props.children}</LabelBox>
  )
}

export default LabelContainer;