import styled from "styled-components";
import { Page } from "./common/Page";
import Input from "./common/Input";
import Edit from "./mypage/Edit";
import Withdrawal from "./mypage/Withdrawal";
import Search from "./modals/Search"

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

const EditMyInfo = () => {
  return (
    <>
      <MyPage>
        <MyImg src="src/assets/BIBI.png" alt="프로필 사진" />
        <CameraImg src="src/assets/camera.png" alt="프로필 사진" />
        <InfoContainer>
          <Mylabel htmlFor="nickname">닉네임</Mylabel>
          <Input placeholder="키티공주" id="nickname" width="90%"></Input>
          <Mylabel htmlFor="password">비밀번호</Mylabel>
          <Input placeholder="**********" id="password" width="90%" type="password"></Input>
          <Mylabel htmlFor="password confirm">비밀번호 확인</Mylabel>
          <Input
            placeholder="**********"
            id="password confirm"
            width="90%"
            type="password"
          ></Input>
        </InfoContainer>
        <Edit />
        <Withdrawal />
        <Search />
        
      </MyPage>
      <Margin />
    </>
  );
};

export default EditMyInfo;
