import styled from "styled-components";
import { useState } from "react";
import { Page } from "../common/Page";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // 캐러셀의 기본 스타일을 가져옵니다.

const MyPage = styled(Page)``;

const ConsultantCarousel = styled(Carousel)`
  .carousel .slide {
    margin: auto;
    padding: auto;
  }
  display: flex;
  margin: 30% 1% 0% 0%;
`;

const ConsultantNameCarousel = styled(Carousel)`
  .carousel .slide {
    margin: auto;
    padding: auto;
  }
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
`;

const TextDiv4_1 = styled.div`
  position: absolute;
  color: black;
  font-family: Lexend Deca;
  font-size: 60px;
  line-height: 66px;
  letter-spacing: -2.25px;
  right: 25%;
  left: 5%;
  top: -15%;
  margin-bottom: 10%;
  text-align: start;
`;

const ConsultantCard = styled.div`
  margin-top: 20%;
  margin-left: 4%;
  width: 400px;
  height: 490px;
  background: #f6f6f6;
`;

const ConsultantNameCard = styled(ConsultantCard)`
  margin-top: 10%;
  background-color: white;
  text-align: start;
  font-family: Lexend Deca;
  font-size: 30px;
  /* padding-left: 3%; */
`;

const BIBIIMage = styled(Image)`
  padding: 9% 10% 0% 10%;
`;

const LEINAIMage = styled(Image)`
  padding-top: 9.5%;
`;

const DIANAIMage = styled(Image)`
  padding-left: 10%;
`;

const RUNAImage = styled(Image)`
  padding-top: 15%;
  padding-left: 5%;
`;

const FourthPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };
  return (
    <MyPage>
      <TextDiv4_1>
        WE CAN FIND YOUR <br /> PERSONAL STYLE
      </TextDiv4_1>

      <ConsultantCarousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        showIndicators={false}
        centerSlidePercentage={33.33}
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
        interval={4000}
        transitionTime={4000}
        stopOnHover={false}
      >
        <ConsultantCard>
          <BIBIIMage src="src/assets/BIBI.png" alt="BIBI" />
        </ConsultantCard>

        <ConsultantCard>
          <LEINAIMage src="src/assets/LEINA.png" alt="LEINA" />
        </ConsultantCard>

        <ConsultantCard>
          <DIANAIMage src="src/assets/DIANA.png" alt="DIANA" />
        </ConsultantCard>

        <ConsultantCard>
          <RUNAImage src="src/assets/RUNA.png" alt="DIANA" />
        </ConsultantCard>
      </ConsultantCarousel>
      <ConsultantNameCarousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={33.33}
        selectedItem={currentSlide}
        useKeyboardArrows
        swipeable={false}
        showIndicators={false}
        interval={4000}
        transitionTime={4000}
      >
        <ConsultantNameCard>BIBI</ConsultantNameCard>

        <ConsultantNameCard>LEINA</ConsultantNameCard>

        <ConsultantNameCard>DIANA</ConsultantNameCard>
        <ConsultantNameCard>RUNA</ConsultantNameCard>
       </ConsultantNameCarousel>
    </MyPage>
  );
};

export default FourthPage;
