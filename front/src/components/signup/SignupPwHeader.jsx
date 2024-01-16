import styled from "styled-components";

const StyledFont = styled.p`
  /* font-family: "Lexend Deca"; */
  color: #979797;
  font-weight: 600;
  letter-spacing: -1.2px;
`;

const SignupPwHeader = () => {
  return (
    <>
      <h2>비밀번호를 입력해 주세요</h2>
      <StyledFont>~~~계정의 비밀번호를 설정합니다.</StyledFont>
    </>
  )
}

export default SignupPwHeader;