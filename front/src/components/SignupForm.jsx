import SignupEmailHeader from "./signup/SignupEmailHeader"
import Input from "./common/Input"
import Button from "./common/Button"
import EmailContainer from "./signup/EmailContainer"
import Card from "./common/Card"
import ButtonWrapper from "./signup/ButtonWrapper"
import CenterContainer from "./common/CenterContainer"
import SignupRequiredHeader from "./signup/SignupRequiredHeader"
import NotAuthNumber from "./signup/NotAuthNumber"
import LabelStyle from "./signup/LabelStyle"
import LabelContainer from "./signup/LabelContainer"
import LabelSignup from "./signup/LabelSignup"
import RadioLabelText from "./signup/RadioLabelText"

import { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const StyledP = styled.p`
  color: #F28482;
`;

const SignupForm = () => {
  const [isAuthCode, setIsAuthCode] = useState(false);
  const [authCorrect, setAuthCorrect] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    signupEmail: '',
    authNumber: '',
    // ... (다른 상태값들)
  });

  const buttonNavigate = () => {
    navigate('/signupPw');
  }

  const alertMessage = () => {
    alert("인증번호가 올바르지 않습니다!");
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  const handleAuthRequest = async () => {
    try {
      // 서버에 인증 요청을 보냅니다.
      await axios.post('http://i10c106.p.ssafy.io:8080/v1/email/join-code', {
        email: formData.signupEmail,
        // ... (다른 필요한 데이터)
      });
  
      setIsAuthCode(true);
      // console.log(response);
  
      // TODO: 응답에 따른 처리 로직 작성
      // 예를 들어, 서버로부터 인증 성공 여부를 받아와서 상태를 업데이트하거나,
      // 사용자에게 메시지를 보여줄 수 있습니다.
      console.log("인증 요청 성공");
      alert('인증번호가 요청되었습니다');
    } catch (error) {
      console.error('인증 요청 실패:', error);
      alert('올바르지 않은 이메일 형식입니다');
    }
  };

  const handleAuthChange = async (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log("formData.authNumber : ", formData.authNumber);
    try {
      await axios.post('http://i10c106.p.ssafy.io:8080/v1/email/confirm', {
        email: formData.signupEmail,
        code: e.target.value,
      })
      setAuthCorrect(true);
      console.log("성공성공성공성ㄱ오!!")
    } catch(error) {
      console.log("에러에러에러 : ", error);
      setAuthCorrect(false);
    }
  }

  return (
    <Card>
      {/* 회원가입 이메일 */}
      <SignupEmailHeader />
      <EmailContainer>
        <Input
          htmlFor="signupEmail" width="250px" id="signupEmail" placeholder="이메일 입력"
          value={formData.signupEmail}
          onChange={handleInputChange}
        />
        <Button width="25%" onClick={handleAuthRequest}>인증 요청</Button>
      </EmailContainer>
      {/* 위에 있는 인증 요청 버튼을 누른 순간 생성됨 */}
      {isAuthCode && (
        <>
          <Input
            htmlFor="authNumber" id="authNumber" placeholder="인증번호"
            value={formData.authNumber}
            onChange={handleAuthChange}
          />
          {!authCorrect && (
            <p>✓ 인증 번호가 같아요</p>
          )}
          {authCorrect && (
            <StyledP>✓ 인증 번호가 같아요</StyledP>
          )}
          <NotAuthNumber>인증번호가 오지 않아요.</NotAuthNumber>
        </>
      )}

      <CenterContainer>
        {authCorrect && (
          <Button
            width="40%"
            marginTop="50px"
            onClick={buttonNavigate}
          >
            다음
          </Button>
        )}
        {!authCorrect && (
          <Button
            width="40%"
            marginTop="50px"
            background-color="#B1B1B1"
            borderColor="#B1B1B1"
            onClick={alertMessage}
          >
            다음
          </Button>
        )}
      </CenterContainer>

      <SignupRequiredHeader />
      <LabelStyle htmlFor="name">이름</LabelStyle>
      <Input id="name" placeholder="이름 입력" />

      <LabelStyle htmlFor="nickname">닉네임</LabelStyle>
      <Input id="nickname" placeholder="닉네임 입력" />
      
      <LabelStyle htmlFor="birth">생년월일</LabelStyle>
      <Input id="birth" placeholder="8자리 Ex) 19990118" />
      
      <LabelStyle htmlFor="gender">성별</LabelStyle>
      
      <LabelContainer>
        <LabelSignup htmlFor="male" >
          <Input
            id="male" name="gender"
            type="radio" width="1"
          />
          <RadioLabelText>여성</RadioLabelText>
        </LabelSignup>
        <LabelSignup htmlFor="female">
          <Input width="1" id="female" name="gender" type="radio" />
          <RadioLabelText>남성</RadioLabelText>
        </LabelSignup>
      </LabelContainer>
      <CenterContainer>
        <Button width="40%">완료</Button>
      </CenterContainer>
    </Card>
  )
}

export default SignupForm