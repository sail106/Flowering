import styled from "styled-components";
import { ButtonBox } from "../common/Button";
import { Link } from "react-router-dom";
import BIBI from "../../assets/BIBI.png";
import { useSelector } from "react-redux";
import { Co2Sharp } from "@mui/icons-material";
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
  const User = useSelector((state) => state.auth.logonUser);
  return (
    <Link to={`/editmyinfo/${User.id}`} reloadDocument>
      <StyledButton>내 정보 수정하기</StyledButton>
    </Link>
  );
};

const MyInfo = () => {
  const User = useSelector((state) => state.auth.logonUser);
  return (
    <InfoDiv>
      <MyImg src={BIBI} alt="프로필 사진" />
      <ProfileDiv>
        <LeftDiv>
          <StyledP>이{"     "}름</StyledP>
          <StyledP>닉 네 임</StyledP>
          <StyledP>이 메 일</StyledP>
        </LeftDiv>
        <RightDiv>
          <p>{User.name || "\u00A0"}</p>
          <p>{User.nickname || "\u00A0"}</p>
          <p>{User.email || "\u00A0"}</p>
        </RightDiv>
      </ProfileDiv>
      <MyButton />
    </InfoDiv>
  );
};

export default MyInfo;
