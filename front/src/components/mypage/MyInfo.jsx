import styled from "styled-components";
import { ButtonBox } from "../store/Button";
import { Link } from "react-router-dom";

const InfoDiv = styled.span`
  margin: 80px;
  height: 695px;
  width: 565px;
  background-color: #fff8f7;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MyImg = styled.img`
  margin-top: 75px;
  border-radius: 500px;
  height: 268px;
  width: 239px;
`;

const ProfileDiv = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
`;

const LeftDiv = styled.div`
  padding-left: 20%;
  text-align: justify;
  flex: 1;
`;

const StyledP = styled.p`
  color: gray;
  text-align: justify;
`;

const RightDiv = styled.div`
  font-weight: bold;
  flex: 3;
`;

const StyledButton = styled(ButtonBox)`
  width: 100%;
  border-radius: 30px;
`;

const MyButton = () => {
  return (
    <Link to="/editmyinfo">
      <StyledButton>내 정보 수정하기</StyledButton>
    </Link>
  );
};

const MyInfo = () => {
  return (
    <InfoDiv>
      <MyImg src="src/assets/googleFavicon.jpg" alt="프로필 사진" />
      <ProfileDiv>
        <LeftDiv>
          <StyledP>이름</StyledP>
          <StyledP>이메일</StyledP>
          <StyledP>닉네임</StyledP>
        </LeftDiv>
        <RightDiv>
          <p>김혜미</p>
          <p>키티공주</p>
          <p>Email@google.com</p>
        </RightDiv>
      </ProfileDiv>
      <MyButton />
    </InfoDiv>
  );
};

export default MyInfo;
