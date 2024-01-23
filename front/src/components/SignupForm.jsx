import SignupEmailHeader from "./signup/SignupEmailHeader"
import Input from "./store/Input"
import Button from "./store/Button"
import EmailContainer from "./signup/EmailContainer"
import Card from "./store/Card"
import SignupPwHeader from "./signup/SignupPwHeader"
import CenterContainer from "./store/CenterContainer"
import SignupRequiredHeader from "./signup/SignupRequiredHeader"
import NotAuthNumber from "./signup/NotAuthNumber"
import LabelStyle from "./signup/LabelStyle"
import LabelContainer from "./signup/LabelContainer"
import LabelSignup from "./signup/LabelSignup"
import RadioLabelText from "./signup/RadioLabelText"

const SignupForm = () => {
  return (
    <Card>
      {/* 회원가입 이메일 */}
      <SignupEmailHeader />
      <EmailContainer>
        <Input htmlFor="signupEmail" width="250px" id="signupEmail" placeholder="이메일 입력" />
        <Button width="25%">인증 요청</Button>
      </EmailContainer>
      <Input htmlFor="authNumber" id="authNumber" placeholder="인증번호"/>
      <p>✓ 인증 번호가 같아요</p>
      <NotAuthNumber>인증번호가 오지 않아요.</NotAuthNumber>
      <CenterContainer>
        <Button width="40%">다음</Button>
      </CenterContainer>

      {/* 회원가입 패스워드 */}
      <SignupPwHeader />
      <Input htmlFor="pw1" id="pw1" placeholder="영문, 숫자, 특수문자 포함 8~20자"/>
      <p>✓ 영문 ✓ 숫자 ✓ 특수문자 ✓ 8~20자</p>
      <Input htmlFor="pw2" id="pw2" placeholder="비밀번호 재입력"/>
      <p>✓ 비밀번호가 같아요</p>
      <CenterContainer>
        <Button width="40%">다음</Button>
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