import styled from "styled-components";
import { Page } from "./common/Page";
import Input from "./common/Input";
import Edit from "./mypage/Edit";
import Withdrawal from "./mypage/Withdrawal";
import BIBI from "../assets/BIBI.png";
import camera from "../assets/camera.png";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { useState, useRef, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonBox } from "./common/Button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { UserInfo } from "../store/authSlice";
import { S3 } from "aws-sdk";
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
  top: 22%;
  right: 43%;
  width: 50px;
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

const Button = styled(ButtonBox)`
  border-radius: 100px;
  width: 220px;
  margin-top: 2%;
  background-color: "#B1B1B1";
  border-color: "#B1B1B1";
`;

const EditMyInfo = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const User = useSelector((state) => state.auth.logonUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { routeid } = useParams();
  const isAccessible = Number(routeid) === User.id && isAuthenticated;

  useEffect(() => {
    if (!isAccessible) {
      alert("잘못된 접근입니다."); // 시스템 경고창을 띄웁니다.
      navigate("/"); // 홈으로 리다이렉트합니다.
    }
  }, [isAccessible, navigate]); // isAccessible이 변경될 때마다 이 훅을 실행합니다.

  if (!isAccessible) {
    return null; // 이후의 컴포넌트 렌더링을 막기 위해 null을 반환합니다.
  }

  const fileInput = useRef(null);

  const accessToken = useSelector((state) => state.auth.logonUser.access_token);

  // S3
  const s3 = new S3({
    region: "ap-northeast-2", // AWS S3 버킷의 리전을 입력하세요
    accessKeyId: import.meta.env.VITE_APP_ACCESS_KEY, // AWS Access Key ID를 입력하세요
    secretAccessKey: import.meta.env.VITE_APP_SECRET_KEY, // AWS Secret Access Key를 입력하세요
    // accessKeyId: "AKIA2UC3EQURXM3FBELT", // AWS Access Key ID를 입력하세요
    // secretAccessKey: "/FuPhPdcRYL+GmahnILfrJUXOqDYdVT+89gBnijx" // AWS Secret Access Key를 입력하세요
  });
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };
    const baseurl = import.meta.env.VITE_APP_BASE_URL;
    // Firebase
    // const storage = getStorage();
    // const storageRef = ref(storage, `${User.id}_profile`);
    // console.log(storageRef)
    // await uploadBytesResumable(storageRef, file);
    // const url = await getDownloadURL(storageRef);

    const uploadParams = {
      Bucket: 'escapefromfirebase', // AWS S3 버킷 이름을 입력하세요
      Key: `${User.id}_profile`, // 유니크한 파일 이름을 생성합니다
      Body: file,
      ACL: "private", // 파일을 공개적으로 접근 가능하게 설정합니다
    };
    const uploadResult = await s3.upload(uploadParams).promise();
    const url = uploadResult.Location; // 업로드된 파일의 URL을 가져옵니다
    console.log('result',uploadResult)
    console.log('url',url)

    try {
      const data = {
        profile_img_url: url
      };

      const response = await axios.patch(
        baseurl + "users/update",
        data,
        config
      );
      console.log(response.data);
      console.log("성공");
      dispatch(UserInfo(true));

    } catch (error) {
      console.error("요청 중 에러 발생:", error);
    }
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
  const baseurl = import.meta.env.VITE_APP_BASE_URL;
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
  };

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

  return (
    <>
      <MyPage>
        <MyImg src={User.imageUrl} alt="프로필 사진" />
        <CameraImg src={camera} alt="프로필 사진" onClick={() => fileInput.current && fileInput.current.click()} />
        <input type="file" style={{ display: "none" }} ref={fileInput} onChange={handleFileUpload} />
        <InfoContainer>
          <Mylabel htmlFor="nickname">닉네임</Mylabel>
          <Input
            placeholder={User.nickname}
            id="nickname"
            width="90%"
            onChange={nicknameHandler}
          ></Input>
          <Mylabel htmlFor="pw1">비밀번호</Mylabel>
          <Input htmlFor="pw1" id="pw1" placeholder="**********" type="password" width="90%" onChange={passwordHandler} />
          <StyledCheck $isValid={checkEn}>✓ 영문</StyledCheck>
          <StyledCheck $isValid={checkNum}>✓ 숫자</StyledCheck>
          <StyledCheck $isValid={checkSp}>✓ 특수문자</StyledCheck>
          <StyledCheck $isValid={checkLen}>✓ 8~20자</StyledCheck>
          <Mylabel htmlFor="pw2">비밀번호 확인</Mylabel>
          <Input htmlFor="pw2" id="pw2" placeholder="**********" type="password" width="90%" onChange={passwordChecker} />
          <StyledCheck $isValid={checkPwTwo}>✓ 비밀번호가 같아요</StyledCheck>
        </InfoContainer>
        {checkPwOne && checkPwTwo && <Edit nickname={nickname} pwOne={pwOne} />}
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
