import styled from "styled-components";
import FirstPage from "./mainPage/FirstPage";
import SecondPage from "./mainPage/SecondPage";
import ThirdPage from "./mainPage/ThirdPage";
import FourthPage from "./mainPage/FourthPage";
import FifthPage from "./mainPage/FifthPage";
import SixthPage from "./mainPage/SixthPage";


const PinkCreamWrapper = styled.div`
  position: absolute;
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
  bottom: -700%;
  right: -10%;
  height:75%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const MainPage = () => {
  return (
    <>
      <FirstPage />

      <PinkCreamWrapper>
        <Image src="src/assets/pinkcream.svg" alt="pinkcream" />
      </PinkCreamWrapper>

      <SecondPage />

      <YellowCreamWrapper>
        <Image src="src/assets/yellowcream.svg" alt="yellowcream" />
      </YellowCreamWrapper>

      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />

      <WhiteCreamWrapper>
        <Image src="src/assets/whitecream.svg" alt="whitecream" />
      </WhiteCreamWrapper>
    </>
  );
};

export default MainPage;
