import LoginHeader from "./login/LoginHeader";
import Button from "./common/Button";
import AccountManage from "./login/AccountManage";
import SnsManage from "./login/SnsManage";
import Input from "./common/Input";
import Card from "./common/Card";
import CenterContainer from "./common/CenterContainer";

import { useDispatch } from 'react-redux'
import { authActions } from "../store/auth";
import { useState, useEffect } from "react";
import axios from 'axios';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.get('/v1/auth/login').then((res) => {
      console.log(res.data);
    })
  }, []);

  const loginHandler = (event) => {
    event.preventDefault();
    
    const body = {
      email: email,
      password: password,
    }

    if(true){//true 자리에 로그인이 되는 조건
      dispatch(authActions.login());
      console.log('email : ', email);
      console.log('password : ', password);
    }

  };

  const inputHandler = (event) => {
    const {value, type} = event.target;
    if(type === 'email'){
      setEmail(value);
    }
    else if(type === 'password'){
      setPassword(value);
    }
  };

  return (
    <Card>
      <CenterContainer>
      <LoginHeader />
      <form action="#" onSubmit={loginHandler}>
        <Input
          htmlFor="loginEmail" type="email" id="loginEmail"
          placeholder="이메일 입력" width="300px"
          value={email}
          onChange={inputHandler}
        />
        <Input
          htmlFor="loginPw" type="password" id="loginPw"
          placeholder="비밀번호 입력" width="300px"
          value={password}
          onChange={inputHandler}
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
