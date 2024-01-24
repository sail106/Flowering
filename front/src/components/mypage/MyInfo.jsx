import styled from "styled-components";
import { ButtonBox } from "../store/Button";
import { Link } from "react-router-dom";

const InfoDiv = styled.span`
  margin: 0% 12%;
  height: 695px;
  width: 565px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MyImg = styled.img`
  margin-top: 3%;
  border-radius: 500px;
  height: 250px;
  width: 250px;
`;

const ProfileDiv = styled.div`
  display: flex;
  /* justify-content:center; */
  margin: 10% 0;
  width: 100%;
  font-family: "Noto Sans KR";
  font-size: 18px;
`;

const LeftDiv = styled.div`
  padding-left: 20%;

  white-space: pre;
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
  width: 200px;
  border-radius: 30px;
  margin: 0;
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
          <StyledP>이{"     "}름</StyledP>
          <StyledP>닉 네 임</StyledP>
          <StyledP>이 메 일</StyledP>
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
