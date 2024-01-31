import LoginHeader from "./login/LoginHeader";
import Button from "./common/Button";
import AccountManage from "./login/AccountManage";
import SnsManage from "./login/SnsManage";
import Input from "./common/Input";
import Card from "./common/Card";
import CenterContainer from "./common/CenterContainer";

const LoginForm = () => {
  return (
    <Card>
      <CenterContainer>
      <LoginHeader />
      <form action="#">
        <Input htmlFor="loginEmail" type="email" id="loginEmail" placeholder="이메일 입력" width="300px" />
        <Input htmlFor="loginPw" type="password" id="loginPw" placeholder="비밀번호 입력" width="300px" />
        <Button
          width="70%"
          marginTop="20px"
        >
          로그인
        </Button>
      </form>
      <AccountManage />
      <SnsManage />
      </CenterContainer>
    </Card>


  )
}

export default LoginForm
