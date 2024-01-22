import styled from "styled-components";

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
`;

const CenterContainer = (props) => {
  return (
    <CenterBox>{props.children}</CenterBox>
  )
};

export default CenterContainer;