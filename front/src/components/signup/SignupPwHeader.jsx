import styled from "styled-components";
import { useLocation } from "react-router-dom";

const StyledFont = styled.p`
  /* font-family: "Lexend Deca"; */
  color: #979797;
  font-weight: 600;
  letter-spacing: -1.2px;
`;

const SignupPwHeader = () => {
  const location = useLocation();
  const { state } = location;
  const userEmail = state ? state.userEmail : '';
  // 여기서 이메일 비빌먼호를 axios로 쏜다.
  return (
    <>
      <h2>비밀번호를 입력해 주세요</h2>
      <StyledFont>{userEmail}계정의 비밀번호를 설정합니다.</StyledFont>
    </>
  )
}

export default SignupPwHeader;