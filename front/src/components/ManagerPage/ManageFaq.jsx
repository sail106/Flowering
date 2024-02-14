import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import Input from "../common/Input";
import { GoPlus } from "react-icons/go";

const Span = styled.th`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
`;

const Margin = styled.div`
  margin: 100px;
`;

const Answer = styled.th`
  color: #383838;
  font-family: "Noto Sans KR";
  font-size: 17px;
  margin-left: 10px;
  margin-top: 6px;
  text-align: justify;
  font-weight: 500;
`;

const FaqRow = styled.tr`
  display: flex;
  justify-content: start;
  margin-right: 330px;
`;

const CloseOutline = styled(IoCloseOutline)`
  font-weight: bold;
  font-size: 23px;
  cursor: pointer;
`;

const GoPlus1 = styled(GoPlus)`
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  right: 405px;
`;

const ReviewInput = styled.textarea`
  width: 815px;
  height: 120px;
  padding: 10px;
  font-family: "Noto Sans KR";
  font-size: 16px;
  border: 1px solid #8e8c8c;
  border-radius: 5px;
  resize: none;
  font-size: 14px;
  margin-left: 15px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b7b5b5;
  }
`;

const Box = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  width: 80%;
`;

const Put = styled.div`
  margin-top: -10px;
  margin-bottom: 20px;
  margin-left: 10px;
`;

const H2 = styled.h3`
  font-family: "Noto Sans KR";
  font-size: 30px;
  padding-left: 8px;
`;
// ExpertsList component
const ManagerFaq = () => {


  
  return (
    <table>
      <tbody>
        <Box>
          <FaqRow>
            <Span>Q. </Span>
            <Answer>컨설팅은 어떻게 진행되나요?</Answer>
          </FaqRow>
          <CloseOutline />
        </Box>

        <FaqRow>
          <Span>A. </Span>
          <Answer>
            컨설팅은 사전 피부 진단 설문, AI 얼굴형 분석, 전문가 컨설팅, 최종
            보고서 총 4단계로 진행됩니다. <br />
            사전 피부 진단 설문 : 사전 설문을 기반으로 피부 진단 테스트를
            실시합니다. <br />
            AI 얼굴 분석 : 기본 촬영 데이터를 바탕으로 AI로 얼굴을 분석합니다.{" "}
            <br />
            전문가 컨설팅 : 뷰티 전문가가 분석데이터를 바탕으로 화상 컨설팅을
            진행합니다.
            <br /> 최종 보고서 : 컨설팅 결과 보고서를 전송해드립니다.
          </Answer>
        </FaqRow>
        <br />

        <Box>
          <FaqRow>
            <Span>Q. </Span>
            <Answer>결과 보고서는 어떻게 받아볼 수 있나요?</Answer>
          </FaqRow>
          <CloseOutline />
        </Box>
        <FaqRow>
          <Span>A. </Span>
          <Answer>
            결과 보고서는 마이페이지에서 약 3시간 이후에 받아보실 수 있습니다.
            <br />
            전문가님이 수기로 작성하다보니 다소 시간이 걸리는 점
            참고부탁드립니다.
          </Answer>
        </FaqRow>
        <br />

        <Box>
          <FaqRow>
            <Span>Q. </Span>

            <Answer>전문가는 어떻게 배정되나요?</Answer>
          </FaqRow>
          <CloseOutline />
        </Box>
        <FaqRow>
          <Span>A. </Span>
          <Answer>
            전문가는 전문가의 프로필을 보시고 마음에 드는 분을 선택하여 예약하실
            수 있습니다. <br /> 다양한 분야의 전문성을 가진 전문가분들이 여러분
            계시기에 고객님의 니즈에 따라 잘 선택해주시기 바랍니다.
          </Answer>
        </FaqRow>
        <br />
        <Box>
          <FaqRow>
            <Span>Q. </Span>
            <Put>
              <Input width={"807px"} placeholder="질문을 입력해주세요" />
            </Put>
            <GoPlus1 />
          </FaqRow>
        </Box>
        <FaqRow>
          <Span>A. </Span>
          <ReviewInput placeholder=" 답변을 입력해주세요" />
        </FaqRow>
        <Margin />
        <H2>Contents</H2>
        <hr />
      </tbody>
    </table>
  );
};

export default ManagerFaq;
