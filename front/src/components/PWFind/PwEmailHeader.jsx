import styled from "styled-components";

const StyledFont = styled.p`
  /* font-family: "Lexend Deca"; */
  color: #979797;
  font-weight: 600;
  letter-spacing: -1.2px;
`;


const SignupEmailHeader = () => {
  return (
    <>
      <h2>가입 시 입력한 이메일 주소를 알려주세요.</h2>
      <StyledFont>입력하신 주소로 인증번호가 전송됩니다.</StyledFont>
    </>
  )
};

export default SignupEmailHeader;