import styled from "styled-components";

import FinalConsultingPage from "./FinalConsultingPage"
import { ButtonBox } from "../common/Button";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 100px;
`;


const MyButton1 = styled(ButtonBox)`
  background-color: gray;
  border-color: gray;
  border-radius: 300px;
  margin: 80px;
  width: 230px;
  height: 60px;
  `;

  const MyButton2 = styled(ButtonBox)`
    border-radius: 300px;
    margin: 80px;
    width: 230px;
    height: 60px;
  `;

const FinalConsultingForm = () => {
  const consultData = [
    {
      type: '스킨 케어',
      condition: ['피부 상태'],
      solutionInput: ['아침', '저녁'],
    },
    {
      type: '메이크업',
      condition: ['얼굴 유형', '얼굴 분위기'],
      solutionInput: ['쉐이딩', '블러셔', '하이라이팅', '립 메이크업', '아이 메이크업', '피부 메이크업'],
    },
    {
      type: '헤어스타일',
      condition: ['헤어 컬러', '헤어 스타일'],
    },
  ]
  
  return (
    <form>
      {consultData.map((el) => {
        return (
          <FinalConsultingPage
            key={el.type}
            userType={el.type}
            usersCondition={el.condition}
            expertMethod={el.solutionInput}
          />
        )
      })}
      <ButtonContainer>
        <MyButton1>임시저장</MyButton1>
        <MyButton2>제출하기</MyButton2>
      </ButtonContainer>
    </form>
  )
}

export default FinalConsultingForm