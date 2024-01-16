import styled, { css } from "styled-components";
import { Page } from "./store/Page";
import { ButtonBox } from "./store/Button";
import { useState } from "react";
import Footer from "./Footer";
const FirstPage = styled(Page)`
  background-color: #ffc8b9;
`;
const SecondPage = styled(Page)`
  background-color: #f8e4a9;
`;
const ThirdPage = styled(Page)`
  height: 120vh;
`;
const FourthPage = styled(Page)``;
const FifthPage = styled(Page)``;
const SixthPage = styled(Page)`
  height: 150vh;
`;
// 1페이지녀
const ImageWrapper = styled.div`
  position: absolute;
  width: 55%; //60%
  height: 80%; //80%
  bottom: 0;
  right: 70px;
`;
// 2페이지녀
const ImageWrapper2 = styled(ImageWrapper)`
  width: 90%;
  height: 95%;
  right: 30%;
`;
const ImageWrapper3 = styled(ImageWrapper)`
  left: 0;
  top: 50%;
  width: 50%;
  height: 75%;
`;
const PinkCreamWrapper = styled(ImageWrapper)`
  width: 35%;
  height: 80%;
  bottom: -38%;
  right: 32%;
  z-index: 1;
`;

const YellowCreamWrapper = styled(PinkCreamWrapper)`
  bottom: -155%;
  width: 100%;
  height: 100%;
  right: -25%;
`;

const WhiteCreamWrapper = styled(YellowCreamWrapper)`
  z-index:3;
  bottom:-670%;
  right: -10%;
`
// 기본 이미지 component
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
// N페이지_n번째 글
const TextDiv1_1 = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 10%;
  position: relative;
  top: 10%;
`;

const TextDiv1_2 = styled(TextDiv1_1)`
  font-family: Lexend Deca;
  font-size: 38px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: -1.5px;
  margin-top: 40px;
`;

const TextDiv2_1 = styled(TextDiv1_2)`
  position: absolute;
  right: 80px;
  margin-top: 100px;
`;

const TextDiv2_2 = styled(TextDiv2_1)`
  margin-top: 120px;
  font-size: 60px;
  right: 35%;
  top: 30%;
  letter-spacing: -2.25px;
  line-height: 66px; /* 133.333% */
`;
const TextDiv3_1 = styled(TextDiv2_2)`
  color: black;
  right: 25%;
  left: 25%;
  margin: 0;
  top: 20%;
  text-align: center;
`;
const TextDiv4_1 = styled(TextDiv3_1)`
  text-align: start;
  left: 5%;
  top: 15%;
`;

const MyButton = styled(ButtonBox)`
  width: 232px;
  border-radius: 30px;
  margin-left: 13%;
  margin-top: 10%;
`;
// 3페이지 이미지 카드
const Card = styled.div`
  width: 33%;
  height: 41%;
  position: absolute;
  transition: transform 0.2s ease-in-out;
`;

// 3페이지 텍스트 섹션
const TextSection = styled.div`
  position: absolute;
  width: 20%;
`;

const PersonalBeauty = styled(TextSection)`
  margin-left: 23%;
  top: 50%;
  &:hover {
    transform: scale(1.05);
  }
`;

const PersonalBeautyCard = styled(Card)`
  right: 18%;
  top: 45%;
  ${PersonalBeauty}:hover + & {
    transform: scale(1.05);
    z-index: 2;
  }
`;

const Community = styled(PersonalBeauty)`
  text-align: end;
  top: 90%;
  right: 22%;
`;

const CommunityCard = styled(Card)`
  right: 47%;
  top: 75%;
  ${Community}:hover + & {
    transform: scale(1.05);
    z-index: 2;
  }
`;

// 3페이지 텍스트 제목
const SolutionText = styled.p`
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
// 3페이지 설명 부분
const DescrText = styled(SolutionText)`
  color: #6d6d6d;
  font-size: 16px;
  line-height: 145%;
`;
// 화살표 반대 방향
const ReverseImage = styled(Image)`
  transform: scaleX(-1);
`;

const ConsultantDiv = styled.div`
  display: flex;
  margin-top: 15%;
  height: 68vh;
`;

const ConsultantNameDiv = styled(ConsultantDiv)`
  margin-top: 3%;
`;
const ConsultantCard = styled.div`
  margin-top: 20%;
  margin-left: 4%;
  width: 29vw;
  height: 100%;
  background: #f6f6f6;
`;

const ConsultantNameCard = styled(ConsultantCard)`
  background-color: white;
  height: 0vh;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const BIBICard = styled(ConsultantCard)`
  border-radius: 50px 0px 0px 50px;
  text-align: center;
`;
const BIBIIMage = styled(Image)`
  width: 80%;
`;

const SolutionDiv = styled(TextSection)`
  margin-left: 60%;
  top: 65%;
  width: 30%;
  &:hover {
    transform: scale(1.05);
  }
`;
const SolutionTitle = styled(SolutionText)`
  font-size: 40px;
  font-family: Poppins;
`;
const SolutionDescr = styled(DescrText)``;
const ArrowDiv = styled.div`
  position: absolute;
  width: 20%;
  right: 25%;
`;

const ContentsText = styled(TextDiv3_1)`
  top: 15%;
`;
const ContentsDiv = styled(ConsultantDiv)`
  justify-content: center;
  margin-left: 0;
  margin-right: 4%; // 나중에 정렬 수정 필요...
`;
const ContentsCard = styled(ConsultantCard)`
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
const ContentsArrow = styled(ArrowDiv)`
  width: 5%;
  right:15%;
  top:20%;
  &:hover {
    transform: scale(1.2);
  }
`;

const MainPage = () => {
  return (
    <>
      <FirstPage>
        <TextDiv1_1>
          <span>
            MY COLOR <br />
            ONLY MINE.
          </span>
        </TextDiv1_1>
        <TextDiv1_2>
          <span>
            Hi, we are Flowering. <br />
            Ready to create an art <br />
            form on your color.
          </span>
        </TextDiv1_2>
        <MyButton>컨설팅 신청하기</MyButton>
        <ImageWrapper>
          <Image src="src/assets/page1girl.png" alt="girl1" />
        </ImageWrapper>
      </FirstPage>
      <PinkCreamWrapper>
        <Image src="src/assets/pinkcream.svg" alt="pinkcream" />
      </PinkCreamWrapper>
      <SecondPage>
        <TextDiv2_1>
          <span>
            Discover your unique
            <br /> beauty with Flowering,
            <br /> your personal stylist.
          </span>
        </TextDiv2_1>
        <TextDiv2_2>
          <span>
            We love what <br /> we do. We are <br />
            up to the task.
          </span>
        </TextDiv2_2>

        <ImageWrapper2>
          <Image src="src/assets/page2girl.svg" alt="girl2" />
        </ImageWrapper2>
      </SecondPage>
      <YellowCreamWrapper>
        <Image src="src/assets/yellowcream.svg" alt="yellowcream" />
      </YellowCreamWrapper>

      <ThirdPage>
        <TextDiv3_1>
          <p>SHARE BEAUTY BY VIDEO</p>
        </TextDiv3_1>

        <PersonalBeauty>
          <SolutionText>PERSONAL BEAUTY SOLUTION</SolutionText>
          <DescrText>
            고객의 피부 유형과 취향 및 요구에 맞는 <br />
            뷰티와 관련된 다양한 주제에 대해 AI와 <br />
            전문가의 조언을 받는 서비스입니다.
          </DescrText>
          <Image src="src/assets/RedLine.png" alt="RedLine" />
        </PersonalBeauty>
        <PersonalBeautyCard>
          <Image src="src/assets/personalBeauty.svg" alt="personalBeauty" />
        </PersonalBeautyCard>
        <Community>
          <SolutionText>VIDEO COMMUNITY</SolutionText>
          <DescrText>
            사람들과 함께 나만의 뷰티 팁이나 <br />
            피부 관련 고민을 나눌 수 있는 <br />
            화상 커뮤니티입니다.
          </DescrText>
          <ReverseImage src="src/assets/RedLine.png" alt="RedLine" />
        </Community>
        <CommunityCard>
          <Image src="src/assets/Community.svg" alt="Community" />
        </CommunityCard>
      </ThirdPage>
      <FourthPage>
        <TextDiv4_1>
          WE CAN FIND YOUR <br /> PERSONAL STYLE
        </TextDiv4_1>
        <ConsultantDiv>
          <BIBICard>
            <BIBIIMage src="src/assets/BIBI.png" alt="BIBI" />
          </BIBICard>
          <ConsultantCard>
            <Image src="src/assets/LEINA.png" alt="BIBI" />
          </ConsultantCard>
          <ConsultantCard>
            <Image src="src/assets/DIANA.png" alt="BIBI" />
          </ConsultantCard>
          <></>
        </ConsultantDiv>
        <ConsultantNameDiv>
          <ConsultantNameCard>BIBI</ConsultantNameCard>
          <ConsultantNameCard>LEINA</ConsultantNameCard>
          <ConsultantNameCard>DIANA</ConsultantNameCard>
        </ConsultantNameDiv>
      </FourthPage>
      <FifthPage>
        <ImageWrapper3>
          <Image src="src/assets/BeautySolution.png" alt="BIBI" />
        </ImageWrapper3>
        <SolutionDiv>
          <SolutionTitle>
            PERSONAL <br />
            BEAUTY SOLUTION
          </SolutionTitle>
          <SolutionDescr>
            Flowering만의 노하우로 고객의 현재 피부 상태
            <br />와 고민을 점검하고 고객의 피부 유형, 색조, 취향
            <br />및 요구에 맞는 메이크업 기술, 헤어스타일 등을
            <br /> 추천해드립니다.
          </SolutionDescr>
          <ArrowDiv>
            <Image src="src/assets/Arrow.png" alt="BIBI" />
          </ArrowDiv>
        </SolutionDiv>
      </FifthPage>
      <SixthPage>
        <ContentsText>CONTENTS</ContentsText>
        <ContentsArrow>
          <Image src="src/assets/Arrow.png" alt="BIBI" />
        </ContentsArrow>
        <ContentsDiv>
          <ContentsCard>
            <ContentsImage src="src/assets/content_skincare.png" alt="BIBI" />
            <ContentsCategory>매거진</ContentsCategory>
            <ContentsTitle>건강한 피부를 위한 스킨케어 루틴</ContentsTitle>
            <ContentsDate>2024.01.16</ContentsDate>
          </ContentsCard>
          <ContentsCard>
            <ContentsImage src="src/assets/content_acnecare.png" alt="BIBI" />
            <ContentsCategory>매거진</ContentsCategory>
            <ContentsTitle>여드름 색소침착 완화를 위한 팁</ContentsTitle>
            <ContentsDate>2024.01.16</ContentsDate>
          </ContentsCard>
          <ContentsCard>
            <ContentsImage
              src="src/assets/content_personal_color.png"
              alt="BIBI"
            />
            <ContentsCategory>매거진</ContentsCategory>
            <ContentsTitle>퍼스널 컬러별 메이크업</ContentsTitle>
            <ContentsDate>2024.01.16</ContentsDate>
          </ContentsCard>
        </ContentsDiv>
      </SixthPage>
      <WhiteCreamWrapper  >
        <Image src="src/assets/whitecream.svg" alt="whitecream" />
      </WhiteCreamWrapper>
      <Footer />
    </>
  );
};

export default MainPage;
