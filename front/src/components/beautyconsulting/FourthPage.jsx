import styled from "styled-components";
import { Page } from "../common/Page";
import RightExpert from "../common/RightExpert";
import LeftExpert from "../common/LeftExpert";

const MyPage = styled(Page)`
  width: 75%;
  height: auto;
`;

const Head = styled.div`
  margin-top: 10%;
  text-align: center;
  font-family: "Lexend Deca";
  font-size: 40px;
  margin-bottom: 1%;
`;

const Head2 = styled.div`
  color: #979797;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 30px;
`;

const Margin = styled.div`
  margin-top: 10%;
  margin-bottom: 25%;
`;

const FourthPage = () => {
  return (
    <MyPage>
      <Head>BEAUTY CONSULTING EXPERTS</Head>
      <Head2>마음에 드는 전문가에게 받는 퍼스널 뷰티 컨설팅</Head2>
      <Margin>
        <RightExpert
          text={"당신만의 고유한 아름다움을 찾아드리겠습니다."}
          imgsrc={"src/assets/BIBI.png"}
          name={"BIBI"}
        />
        <LeftExpert
          text={`나를 마음껏 표현할 수 있을 때, 진정 아름다워집니다.`}
          imgsrc={"src/assets/LEINA.png"}
          name={"LEINA"}
        />
        <RightExpert
          text={`나의 강점을 살리며 다양하게 
          스타일링을 도전해보세요.`}
          imgsrc={"src/assets/DIANA.png"}
          name={"DIANA"}
          width={"300px"}
        />
        <LeftExpert
          text={`건강하고 자연스러운 
          아름다움을 선물해드립니다.`}
          imgsrc={"src/assets/RUNA.png"}
          name={"RUNA"}
        />
      </Margin>
    </MyPage>
  );
};

export default FourthPage;
