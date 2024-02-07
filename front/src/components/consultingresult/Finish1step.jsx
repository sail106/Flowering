import styled from "styled-components";
import { ButtonBox } from "../common/Button";
import checkcircle from "../../assets/checkcircle.png"
import step_test1 from "../../assets/1step_test.png"
const Consulting1stepresultpage = styled.div`
  margin-top: -130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyButton1 = styled(ButtonBox)`
  background-color: #f28482;
  border-color: #f28482;
  border-radius: 300px;
  margin: 80px;
  width: 230.145px;
  height: 59.143px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Margin = styled.div`
  margin: 110px;
`;
const Margin2 = styled.div`
  margin-top: 20px;
`;

const H3 = styled.h3`
  font-family: "Noto Sans KR";
  font-size: 25px;
  text-align: center;
`;

const P = styled.p`
  font-family: "Noto Sans KR";
  font-size: 20px;
  color: gray;
  text-align: center;
`;

const CheckImg = styled.img`
  width: 65px;
  height: 65px;
`;

const StepImg = styled.img`
  margin-top: 30px;
  width: 675px;
  height: 79px;
`;

const Finish1step = () => {
  return (
    <Consulting1stepresultpage>
      <Margin />

      <CheckImg src={checkcircle} alt="1차 설문 완료" />
      <H3>1차 설문 테스트 완료</H3>
      <P>
        2차 사진 테스트 진단을 완료하여 주세요. <br /> 정확한 진단을 위해
        유의사항을 잘 참고해주세요.
      </P>
      <StepImg
        src={step_test1}
        alt="1차 설문 완료, 2차 사진 테스트 진행 예정"
      />
      <Margin2 />

      <ButtonContainer>
        <MyButton1>카메라 테스트 시작</MyButton1>
      </ButtonContainer>
      <Margin2 />
    </Consulting1stepresultpage>
  );
};

export default Finish1step;
