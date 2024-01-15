import styled from "styled-components";
import { Page } from "./store/Page";

const MyPage = styled(Page)`
  background-color: #ffc8b9;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const TextDiv1_1 = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 100px;
  margin-top: 130px;
`;

const TextDiv1_2 = styled(TextDiv1_1)`
  font-family: Lexend Deca;
  font-size: 38px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: -1.5px;
  margin-top: 40px;
`;

const FirstPage = () => {
    return (
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
    )
  };
  
  export default FirstPage;