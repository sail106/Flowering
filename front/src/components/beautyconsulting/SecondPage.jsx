import styled from "styled-components";
import { Page } from "../common/Page";
import gray from "../../assets/gray.png"
import green from "../../assets/green.png"
import sky from "../../assets/sky.png"
const MyPage = styled(Page)`
  width: 75%;
`;

const Image = styled.img`
  width: 45%;
  height: 80%;
  margin: 0 2%;
`;

const ImageContainer = styled.div`
  margin: 5% 0%;
  display: flex;
  height: 80%;
  justify-content: center;
`;

const Head = styled.div`
  margin-top: 10%;
  text-align: center;
  font-family: Lexend Deca;
  font-size: 40px;
  margin-bottom: 1%;
`;

const Head2 = styled.div`
  color: #979797;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 30px;
`;

const SecondPage = () => {
  return (
    <MyPage>
      <Head>FIND MY COLOR</Head>
      <Head2>스타일 변화</Head2>
      <ImageContainer>
        <Image src={gray} alt="gray" />
        <Image src={green} alt="green" />
        <Image src={sky} alt="sky" />
      </ImageContainer>
    </MyPage>
  );
};

export default SecondPage;
