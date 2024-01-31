import styled from "styled-components";
import { Page } from "../common/Page";

const MyPage = styled(Page)`
  background-color: #f8e4a9;
`;

const ImageWrapper2 = styled.div`
  position: absolute;
  bottom: 0;
  width: 90%;
  height: 95%;
  right: 30%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const TextDiv2_1 = styled.div`
  position: absolute;
  color: #fff;
  font-family: Lexend Deca;
  font-size: 38px;
  line-height: 48px;
  letter-spacing: -1.5px;
  top: 10%;
  margin-left: 10%;
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

const SecondPage = () => {
  return (
    <MyPage>
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
    </MyPage>
  );
};

export default SecondPage;
