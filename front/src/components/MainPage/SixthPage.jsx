import styled from "styled-components";
import { Page } from "../common/Page";
import ContentsCard from "../common/ContentsCard";

const MyPage = styled(Page)`
  height: 150vh;
`;

const Image = styled.img`
  width: 100%;
  height: 100%; 
   &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    scale:1.2;
   }
`;

const ContentsText = styled.div`
  position: absolute;
  color: black;
  font-family: Lexend Deca;
  font-size: 60px;
  line-height: 66px;
  letter-spacing: -2.25px;
  top: 15%;
  margin-left: 10%;
  right: 25%;
  left: 25%;
  margin: 0;
  text-align: center;
`;

const ContentsDiv = styled.div`
  display: flex;
  margin-top: 15%;
  height: 68vh;
  justify-content: center;
  margin-left: 0;
  margin-right: 4%;
`;

const ContentsArrow = styled.div`
  position: absolute;
  width: 5%;
  right: 15%;
  top: 20%;

`;

const SixthPage = () => {
  return (
    <MyPage>
      <ContentsText>CONTENTS</ContentsText>

      <ContentsArrow>
        <Image src="src/assets/Arrow.png" alt="Arrow" />
      </ContentsArrow>

      <ContentsDiv>
        <ContentsCard
          category="매거진"
          title="건강한 피부를 위한 스킨케어 루틴"
          date="2024.01.16"
          imageSrc='src/assets/content_skincare.png'
          imageAlt="content_skincare"
        />

        <ContentsCard
          category="매거진"
          title="여드름 색소침착 완화를 위한 팁"
          date="2024.01.16"
          imageSrc='src/assets/content_acnecare.png'
          imageAlt="content_acnecare"
        />
        <ContentsCard
          category="매거진"
          title="퍼스널 컬러별 메이크업"
          date="2024.01.16"
          imageSrc='src/assets/content_personal_color.png'
          imageAlt="content_personal_color"
        />
      </ContentsDiv>
    </MyPage>
  );
};

export default SixthPage;
