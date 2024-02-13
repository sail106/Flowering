import styled from "styled-components";
import naverFavicon from "../../assets/naverFavicon.jpg";
import kakaoFavicon from "../../assets/kakaoFavicon.png";
import googleFavicon from "../../assets/googleFavicon.jpg";

const SnsWordContainer = styled.p`
  color: #98A2B3;
  padding-top: 20px;
  padding-bottom: 3px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const ImgContainer = styled.div`
  padding-bottom: 40px;
`;

const LogoImg = styled.img`
  border-radius: 20px;
  width: 40px;
  height: 40px;
  margin-left: 40px;
`;

const DashSpan = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  color: #D0D5DD;
`;

const SnsManage = () => {
  return (
    <>
      <SnsWordContainer><DashSpan>——————</DashSpan> SNS 계정으로 로그인 <DashSpan>——————</DashSpan></SnsWordContainer>
      <ImgContainer>
        <a href="#"><LogoImg src={naverFavicon} alt="네이버 로고" /></a>
        <a href="#"><LogoImg src={kakaoFavicon} alt="카카오 로고" /></a>
        <a href="#"><LogoImg src={googleFavicon} alt="구글 로고" /></a>
      </ImgContainer>
    </>
    
  )
}

export default SnsManage;