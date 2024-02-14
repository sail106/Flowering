import FinalConsultingPage from "./FinalConsultingPage"

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
    <>
      {consultData.map((el) => {
        return (
          <FinalConsultingPage
            key={el.type}
            userType={el.type}
            usersCondition={el.condition}
          />
        )
      })}
    </>
  )
}

export default FinalConsultingForm