import LoginHeader from "./login/LoginHeader";
import Button from "./common/Button";
import AccountManage from "./login/AccountManage";
import SnsManage from "./login/SnsManage";
import Input from "./common/Input";
import Card from "./common/Card";
import CenterContainer from "./common/CenterContainer";
import axios from "axios";

import { useEffect } from "react";
//post, email,pw의 파라미터

const LoginForm = () => {

  useEffect(() => {
    // http://192.168.100.148:8080를 우리 주소로 바꾸기
    // 로그인 후 find 해서 유저 정보 확인
    // "has_additional_info": false 그냥 홈으로 이동
    // true면 추가 정보 입력 페이지로 이동
    axios.post('http://192.168.100.148:8080/v1/auth/login', {
      email : "vsdvsd@asdfasd",
      password : "1234",
    })
    .then((res) =>{
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <Card>
      <CenterContainer>
      <LoginHeader />
      <form action="#" > {/* onSubmit={loginHandler} */}
        <Input
          htmlFor="loginEmail" type="email" id="loginEmail"
          placeholder="이메일 입력" width="300px"
          // value={email}
          // onChange={inputHandler}
        />
        <Input
          htmlFor="loginPw" type="password" id="loginPw"
          placeholder="비밀번호 입력" width="300px"
          // value={password}
          // onChange={inputHandler}
        />
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
