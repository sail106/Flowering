import styled from "styled-components";
import { Page } from "../store/Page";

const MyPage = styled(Page)`
  height: 150vh;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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

const ContentsCard = styled.div`
  margin-left: 4%;
  margin-top: 20%;
  display: flex;
  width: 377px;
  height: 415px;
  padding-bottom: 20px;
  flex-direction: column;
  align-items: start;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ContentsImage = styled(Image)`
  height: 55%;
`;

const ContentsCategory = styled.span`
  color: #6d6d6d;
  font-family: Noto Sans KR;
  font-size: 13px;
  padding: 10% 0% 0% 5%;
`;

const ContentsTitle = styled(ContentsCategory)`
  color: black;
  font-size: 23px;
  padding: 5% 0% 0% 5%;
`;

const ContentsDate = styled(ContentsCategory)`
  font-family: Poppins;
`;

const ContentsArrow = styled.div`
  position: absolute;
  width: 5%;
  right: 15%;
  top: 20%;
  &:hover {
    transform: scale(1.2);
  }
`;

const SixthPage = () => {
  return (
    <MyPage>
      <ContentsText>CONTENTS</ContentsText>

      <ContentsArrow>
        <Image src="src/assets/Arrow.png" alt="Arrow" />
      </ContentsArrow>

      <ContentsDiv>
        <ContentsCard>
          <ContentsImage
            src="src/assets/content_skincare.png"
            alt="content_skincare"
          />
          <ContentsCategory>매거진</ContentsCategory>
          <ContentsTitle>건강한 피부를 위한 스킨케어 루틴</ContentsTitle>
          <ContentsDate>2024.01.16</ContentsDate>
        </ContentsCard>

        <ContentsCard>
          <ContentsImage
            src="src/assets/content_acnecare.png"
            alt="content_acnecare"
          />
          <ContentsCategory>매거진</ContentsCategory>
          <ContentsTitle>여드름 색소침착 완화를 위한 팁</ContentsTitle>
          <ContentsDate>2024.01.16</ContentsDate>
        </ContentsCard>

        <ContentsCard>
          <ContentsImage
            src="src/assets/content_personal_color.png"
            alt="content_personal_color"
          />
          <ContentsCategory>매거진</ContentsCategory>
          <ContentsTitle>퍼스널 컬러별 메이크업</ContentsTitle>
          <ContentsDate>2024.01.16</ContentsDate>
        </ContentsCard>
      </ContentsDiv>
    </MyPage>
  );
};

export default SixthPage;
