import LoginHeader from "./login/LoginHeader";
import Button from "./store/Button";
import AccountManage from "./login/AccountManage";
import SnsManage from "./login/SnsManage";
import Input from "./store/Input";
import Card from "./store/Card";
import CenterContainer from "./store/CenterContainer";

const LoginForm = () => {
  return (

    <Card>
      <CenterContainer>
        <LoginHeader />
      </CenterContainer>

      <form action="#">
        <CenterContainer>
          
          <Input htmlFor="loginEmail" type="email" id="loginEmail" placeholder="이메일 입력" width="300px" />
        </CenterContainer>
        <CenterContainer>
          <Input htmlFor="loginPw" type="password" id="loginPw" placeholder="비밀번호 입력" width="300px" />
        </CenterContainer>
        <CenterContainer>

        <Button
          width="70%"
          borderRadius="40px"
          marginTop="20px"
        >
          로그인
        </Button>
        </CenterContainer>
      </form>
      <AccountManage />
      <SnsManage />
    </Card>


  )
}

export default LoginForm
