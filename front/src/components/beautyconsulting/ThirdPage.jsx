import styled from "styled-components";
import { Page } from "../common/Page";

const MyPage = styled(Page)`
  width: 75%;
`;

const Container = styled.div`
  margin: 10% 0%;
  display: flex;
  height: 80%;
  justify-content: center;
`;

const Head = styled.div`
  margin-top: 18%;
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

const Quarter = styled.div`
  width: 25%;
  height: 30%;
  border-left: 1px solid #B1B1B1;;
  &:last-child {
    border-right: 1px solid #B1B1B1;;
  }
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const Title = styled.div`
  color: #f28482;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 500;
  margin-bottom:15%;
  white-space:pre;
`;

const Text = styled.div`
  color: #6d6d6d;
  font-family: "Noto Sans KR";
  font-size: 18px;
  line-height: 145%;
`;

const ThirdPage = () => {
  return (
    <MyPage>
      <Head>HOW IT WORK</Head>
      <Head2>컨설팅 진행 순서</Head2>
      <Container>
        <Quarter>
          <Title>01 {"  "}설문 테스트</Title>
          <Text>설문을 기반으로<br/> 피부 유형을 분석합니다.</Text>
        </Quarter>
        <Quarter>
          <Title>02 {"  "}카메라 테스트</Title>
          <Text>AI 카메라를 기반으로<br/> 얼굴을 분석합니다.</Text>
        </Quarter>
        <Quarter>
          <Title>03 {"  "}전문가 컨설팅</Title>
          <Text>전문가가 데이터를 바탕으로 <br/>화상 컨설팅을 진행합니다.</Text>
        </Quarter>
        <Quarter>
          <Title>04 {"  "}보고서</Title>
          <Text>컨설팅 결과 보고서를 <br/>전송해드립니다.</Text>
        </Quarter>
      </Container>
    </MyPage>
  );
};

export default ThirdPage;
