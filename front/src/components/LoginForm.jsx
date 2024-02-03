import LoginHeader from "./login/LoginHeader";
import Button from "./common/Button";
import AccountManage from "./login/AccountManage";
import SnsManage from "./login/SnsManage";
import Input from "./common/Input";
import Card from "./common/Card";
import CenterContainer from "./common/CenterContainer";
import { loginUser } from "../store/authSlice";

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//post, email,pw의 파라미터

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // await dispatch(loginUser(formData));

      // axios를 사용하여 로그인 요청 보내기
      const response = await axios.post('http://i10c106.p.ssafy.io:8080/v1/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      if(response.status === 200) {
        await dispatch(loginUser({ email: formData.email, password: formData.password }));
        console.log("로그인 성공!");
        navigate('/');
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <Card>
      <CenterContainer>
        <LoginHeader />
        <form action="#"> {/* onSubmit={loginHandler} */}
          <Input
            htmlFor="loginEmail" type="email" id="loginEmail"
            placeholder="이메일 입력" width="300px"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            htmlFor="loginPw" type="password" id="loginPw"
            placeholder="비밀번호 입력" width="300px"
            value={formData.password}
            onChange={handleInputChange}
          />            
          <Button
            type="submit"
            width="70%"
            marginTop="20px"
            onClick={handleLogin}
          >
            로그인
          </Button>
        </form>
        <AccountManage />
        <SnsManage />
      </CenterContainer>
    </Card>


  );
}

export default LoginForm
