import styled from "styled-components";
import Logo from "../../assets/Logo.svg"
const ImgBox = styled.div`
  padding-bottom: 80px;
`;

const LoginHeader = () => {
  return (
    <ImgBox>
      <img src={Logo} alt="" />
    </ImgBox>
  )
};

export default LoginHeader;