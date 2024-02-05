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
import { findIndex } from "lodash";

//post, email,pw의 파라미터

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
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

      const { access_token, refresh_token } = response.data.data_body;
      if(access_token !== undefined && refresh_token !== undefined) {

        // Redux store에 사용자 정보 저장
        dispatch(loginUser({ email: formData.email, access_token, refresh_token }));

        // 토큰을 로컬 스토리지에 저장합니다.
        localStorage.setItem('accessToken', access_token);
        localStorage.setItem('refreshToken', refresh_token);

        console.log("로그인 성공!");
        navigate('/');
        
      }
      else {
        console.log("이메일 또는 비밀번호가 잘못되었습니다!");
      }
      console.log("isAuthenticated2 : ", isAuthenticated);
    } catch (error) {
      console.error('로그인 요청 실패:', error);
    }
    console.log("isAuthenticated : ", isAuthenticated);
  };

  useEffect(() => {
    // 이미 로그인 상태인 경우 홈 화면으로 이동합니다.
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      navigate('/');
      console.log("이미 로그인 되어있습니다!");
      console.log("isAuthenticated : ", isAuthenticated);
    }
  }, [isAuthenticated, navigate]);

  return (
    <Card>
      <CenterContainer>
        <LoginHeader />
        <form action="#"> {/* onSubmit={loginHandler} */}
          <Input
            htmlFor="email" type="email" id="email"
            placeholder="이메일 입력" width="300px"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            htmlFor="password" type="password" id="password"
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
