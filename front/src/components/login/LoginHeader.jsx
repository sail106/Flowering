import styled from "styled-components";

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
`;

const LoginHeader = () => {
  return (
    <ImgBox>
      <img src="../../../src/assets/Logo.svg" alt="" />
    </ImgBox>
  )
};

export default LoginHeader;