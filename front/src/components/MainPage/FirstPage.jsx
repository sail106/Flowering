import styled from "styled-components";
import { Page } from "../store/Page";
import { ButtonBox } from "../store/Button";
import { Link } from "react-router-dom";
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
  line-height: normal;
  font-weight: 700;
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

const MyButton = styled(ButtonBox)`
  width: 232px;
  border-radius: 30px;
  margin-left: 13%;
  margin-top: 10%;
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 55%; //60%
  height: 80%; //80%
  bottom: 0;
  right: 70px;
`;

const FirstPage = () => {
  return (
    <MyPage>
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
      <Link to="/beautyconsulting" reloadDocument>
        <MyButton>컨설팅 신청하기</MyButton>
      </Link>
      <ImageWrapper>
        <Image src="src/assets/page1girl.png" alt="girl1" />
      </ImageWrapper>
    </MyPage>
  );
};

export default FirstPage;
