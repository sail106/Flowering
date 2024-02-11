import Card from "../common/Card";
import SignupRequiredHeader from "./SignupRequiredHeader";
import LabelStyle from "./LabelStyle";
import Input from "../common/Input";
import LabelContainer from "./LabelContainer";
import LabelSignup from "./LabelSignup";
import RadioLabelText from "./RadioLabelText";
import CenterContainer from "../common/CenterContainer";
import Button from "../common/Button";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SignupRequired = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.logonUser.access_token);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log('access' + accessToken)
  console.log('alllll' + name+" "+nickname+" "+gender+" "+birthdate.slice(0, 4))

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 서버로 전송할 데이터 객체 생성
    const userData = {
      name: name,
      nick_name: nickname,
      gender: gender,
      birthdate_year: birthdate.slice(0, 4),
      birthdate_month: birthdate.slice(4, 6),
    };
    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };
    console.log("accessToken : ", accessToken);
    console.log("isAuthenticated : ", isAuthenticated);
    try {
      // 서버로 데이터 전송
      // post? 여기서 토큰도 함께 보내줘야할 것 같다.
      const response = await axios.patch(
        "http://i10c106.p.ssafy.io:8080/v1/users/update",
        userData,
        config
      );
      console.log(response.data);
      alert("회원가입 완료!");
      navigate("/");
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <Card>
      <SignupRequiredHeader />
      <form onSubmit={handleSubmit}>
        <LabelStyle htmlFor="name">* 이름</LabelStyle>
        <Input
          id="name"
          placeholder="이름 입력"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <LabelStyle htmlFor="nickname">* 닉네임</LabelStyle>
        <Input
          id="nickname"
          placeholder="닉네임 입력"
          onChange={(e) => setNickname(e.target.value)}
          required
        />

        <LabelStyle htmlFor="birth">* 생년월일</LabelStyle>
        <Input
          id="birth"
          placeholder="8자리 Ex) 19990118"
          onChange={(e) => setBirthdate(e.target.value)}
          required
        />

        <LabelStyle htmlFor="gender">* 성별</LabelStyle>
        <LabelContainer>
          <LabelSignup htmlFor="male">
            <Input
              id="male"
              name="gender"
              type="radio"
              width="1"
              onChange={() => setGender("FEMALE")}
              required
            />
            <RadioLabelText>여성</RadioLabelText>
          </LabelSignup>
          <LabelSignup htmlFor="female">
            <Input
              width="1"
              id="female"
              name="gender"
              type="radio"
              onChange={() => setGender("MALE")}
            />
            <RadioLabelText>남성</RadioLabelText>
          </LabelSignup>
        </LabelContainer>
        <CenterContainer>
          <Button width="40%">완료</Button>
        </CenterContainer>
      </form>
    </Card>
  );
};

export default SignupRequired;
