import styled from "styled-components";

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenterContainer = (props) => {
  return (
    <CenterBox>{props.children}</CenterBox>
  )
}

export default CenterContainer;