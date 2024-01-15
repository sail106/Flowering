import SignupEmailHeader from "./signup/SignupEmailHeader"
import Input from "./store/Input"
import Button from "./store/Button"
import EmailContainer from "./signup/EmailContainer"
import Card from "./store/Card"
import SignupPwHeader from "./signup/SignupPwHeader"
import ButtonWrapper from "./signup/ButtonWrapper"
import SignupRequiredHeader from "./signup/SignupRequiredHeader"

const SignupForm = () => {
  return (
    <Card>
      {/* 회원가입 이메일 */}
      <SignupEmailHeader />
      <EmailContainer>
        <Input htmlFor="signupEmail" width="250px" id="signupEmail" placeholder="이메일 입력" />
        <Button width="25%" >인증 요청</Button>
      </EmailContainer>
      <Input htmlFor="authNumber" id="authNumber" placeholder="인증번호"/>
      <p>인증 번호가 같아요</p>
      <p>인증번호가 오지 않아요.</p>
      <ButtonWrapper>
        <Button width="40%" borderRadius="25px">다음</Button>
      </ButtonWrapper>

      {/* 회원가입 패스워드 */}
      <SignupPwHeader />
      <Input htmlFor="pw1" id="pw1" placeholder="영문, 숫자, 특수문자 포함 8~20자"/>
      <Input htmlFor="pw2" id="pw2" placeholder="비밀번호 재입력"/>
      <ButtonWrapper>
        <Button width="40%" borderRadius="25px">다음</Button>
      </ButtonWrapper>

      <SignupRequiredHeader />
      <Input htmlFor="name" id="name">이름</Input>
      <Input htmlFor="nickname" id="nickname">닉네임</Input>
    </Card>
  )
}

export default SignupForm