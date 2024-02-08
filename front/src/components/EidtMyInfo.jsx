import styled from "styled-components";
import { Page } from "./common/Page";
import Input from "./common/Input";
import Edit from "./mypage/Edit";
import Withdrawal from "./mypage/Withdrawal";
import BIBI from "../assets/BIBI.png";
import camera from "../assets/camera.png";
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import FirebaseConfig from "./common/FirebaseConfig";
import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBox } from "./common/Button";
import { useSelector } from "react-redux";
import axios from "axios";

const MyPage = styled(Page)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 100vh;
`;

const MyImg = styled.img`
  margin-top: 5%;
  border-radius: 50%;
  width: 250px;
  height: 250px;
`;

const CameraImg = styled(MyImg)`
  position: absolute;
  top: 24%;
  right: 43%;
  width: 3%;
  height: auto;
  background-color: #e2dfd8;
`;

const InfoContainer = styled.div`
  width: 20%;
  margin-top: 2%;
  margin-bottom: 4%;
`;
const StyledCheck = styled.p`
  display: inline-block;
  margin-left: 10px;
  color: ${(props) => (props.$isValid ? "#F28482" : "black")};
`;

const Mylabel = styled.label`
  color: #6d6d6d;
  font-family: "Noto Sans KR";
  font-size: 12px;
  margin-top: 5%;
  display: flex;
`;
const Margin = styled.div`
  height: 35%;
`;
if (!getApps().length) {
  initializeApp(FirebaseConfig);
} else {
  getApp();
}

const Button = styled(ButtonBox)`
  border-radius: 100px;
  width: 220px;
  margin-top: 2%;
  background-color: "#B1B1B1";
  border-color: "#B1B1B1";
`;

const storage = getStorage();

const EditMyInfo = () => {
  const User = useSelector((state) => state.auth.logonUser);
  const fileInput = useRef(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    console.log(`${file.name} has been uploaded.`);
  };

  const [checkEn, setCheckEn] = useState(false);
  const [checkNum, setCheckNum] = useState(false);
  const [checkSp, setCheckSp] = useState(false);
  const [checkLen, setCheckLen] = useState(false);
  const [nickname, setNickname] = useState(User.nickname);
  const [pwOne, setPwOne] = useState("");
  const [pwTwo, setPwTwo] = useState("");
  const [checkPwOne, setCheckPwOne] = useState(false);
  const [checkPwTwo, setCheckPwTwo] = useState(false);

  const navigate = useNavigate();

  const passwordHandler = (e) => {
    setPwOne(e.target.value);

    // 영문
    let regPassEn = /^(?=.*[a-zA-Z]).{1,}$/;
    if (!regPassEn.test(e.target.value)) {
      setCheckEn(false);
    } else {
      setCheckEn(true);
    }

    // 숫자
    let regPassNum = /^(?=.*[0-9]).{1,}$/;
    if (!regPassNum.test(e.target.value)) {
      setCheckNum(false);
    } else {
      setCheckNum(true);
    }

    // 특수문자
    let regPassSp = /^(?=.*[!@#$%^*+=-]).{1,}$/;
    if (!regPassSp.test(e.target.value)) {
      setCheckSp(false);
    } else {
      setCheckSp(true);
    }

    // 8-20자
    let regPassLen = /^.{8,20}$/;
    if (!regPassLen.test(e.target.value)) {
      setCheckLen(false);
    } else {
      setCheckLen(true);
    }
  };

  const nicknameHandler = (e) => {
    setNickname(e.target.value);
  }

  useEffect(() => {
    setCheckPwOne(checkEn && checkNum && checkSp && checkLen);
  }, [checkEn, checkNum, checkSp, checkLen, checkPwOne]);

  const passwordChecker = (e) => {
    if (pwOne === e.target.value) {
      setCheckPwTwo(true);
    } else {
      setCheckPwTwo(false);
    }
  };

  const alertMessage = () => {
    alert("비밀번호 형식을 다시 확인해주세요!");
  };
  
  const updateUserInfo = async () => {
    const data = {
      pwOne:pwOne,
      nickname:nickname
    };
    const config = {
      headers: {
          'Authorization': `Bearer ${state.auth.logonUser.access_token}`,
          'Content-Type': 'application/json'
          // 다른 필요한 헤더도 추가할 수 있습니다.
      }
  };
    try {
      const response = await axios.patch("v1/users/update", data, config);
      console.log(response.data);
      // 요청이 성공하면 navigate 함수를 호출하여 페이지를 이동할 수 있습니다.
      // navigate('/success');
    } catch (error) {
      console.error("Failed to update user info:", error);
      // 요청이 실패하면 사용자에게 오류 메시지를 보여줄 수 있습니다.
      // alert('사용자 정보 업데이트에 실패했습니다.');
    }
  };
  console.log(pwOne);
  return (
    <>
      <MyPage>
        <MyImg src={BIBI} alt="프로필 사진" />
        <CameraImg
          src={camera}
          alt="프로필 사진"
          onClick={() => fileInput.current && fileInput.current.click()}
        />
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInput}
          onChange={handleFileUpload}
        />
        <InfoContainer>
          <Mylabel htmlFor="nickname">닉네임</Mylabel>
          <Input placeholder={User.nickname} id="nickname" width="90%" onChange={nicknameHandler}></Input>
          <Mylabel htmlFor="pw1">비밀번호</Mylabel>
          <Input
            htmlFor="pw1"
            id="pw1"
            placeholder="**********"
            type="password"
            width="90%"
            onChange={passwordHandler}
          />
          <StyledCheck $isValid={checkEn}>✓ 영문</StyledCheck>
          <StyledCheck $isValid={checkNum}>✓ 숫자</StyledCheck>
          <StyledCheck $isValid={checkSp}>✓ 특수문자</StyledCheck>
          <StyledCheck $isValid={checkLen}>✓ 8~20자</StyledCheck>
          <Mylabel htmlFor="pw2">비밀번호 확인</Mylabel>
          <Input
            htmlFor="pw2"
            id="pw2"
            placeholder="**********"
            type="password"
            width="90%"
            onChange={passwordChecker}
          />
          <StyledCheck $isValid={checkPwTwo}>✓ 비밀번호가 같아요</StyledCheck>
        </InfoContainer>
        {checkPwOne && checkPwTwo && <Edit />}
        {(!checkPwOne || !checkPwTwo) && (
          <Button onClick={alertMessage}>수정하기</Button>
        )}

        <Withdrawal />
      </MyPage>
      <Margin />
    </>
  );
};

export default EditMyInfo;
