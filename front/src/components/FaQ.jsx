import styled from "styled-components";
import { Page } from "./common/Page";
import FaQBox from "./faq/FaqBox";

const MyPage = styled(Page)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

const Header = styled.div`
  font-family: Lexend Deca;
  font-size: 50px;
  margin-top: 8%;
  justify-content: center;
  margin-bottom: 4%;
`;

const Margin = styled.div`
  height: 35%;
`;

const FaQ = () => {
  return (
    <>
      <MyPage>
        <Header>FAQ</Header>
        <FaQBox
          question="컨설팅은 어떻게 진행되나요?"
          answer="
컨설팅은 사전 피부 진단 설문, AI 얼굴형 분석, 전문가 컨설팅, 최종 보고서 총 4단계로 진행됩니다./n
사전 피부 진단 설문 : 사전 설문을 기반으로 피부 진단 테스트를 실시합니다./n
AI 얼굴 분석 : 기본 촬영 데이터를 바탕으로 AI로 얼굴을 분석합니다./n
전문가 컨설팅 : 뷰티 전문가가 분석데이터를 바탕으로 화상 컨설팅을 진행합니다./n
최종 보고서 : 컨설팅 결과 보고서를 전송해드립니다."
        />
        <FaQBox
          question="결과 보고서는 어떻게 받아볼 수 있나요?"
          answer="sdsafdd"
        />
        <FaQBox question="전문가는 어떻게 배정되나요?" answer="3번답" />
        <FaQBox
          question="커뮤니티 방 개설은 무제한으로 할 수 있나요?"
          answer="4번답"
        />
        <FaQBox
          question="예약을 변경하고 싶은데 어떻게 하면 되나요?"
          answer="555"
        />
        <FaQBox
          question="뷰티 컨설팅이랑 피부 컨설팅이랑 어떤 점이 다른가요?"
          answer="666"
        />
      </MyPage>
      <Margin />
    </>
  );
};

export default FaQ;
