import FinalConsultingPage from "./FinalConsultingPage"

const FinalConsultingForm = () => {
  const consultData = [
    {
      type: '스킨 케어',
      condition1: '피부 상태',
      solutionInput1: '아침',
      solutionInput2: '저녁'
    },
    {
      type: '메이크업',
      condition1: '얼굴 유형',
      condition2: '얼굴 분위기',
      solutionInput1: '쉐이딩',
      solutionInput2: '블러셔',
      solutionInput3: '하이라이팅',
      solutionInput4: '립 메이크업',
      solutionInput5: '아이 메이크업',
      solutionInput6: '피부 메이크업',
    },
    {
      type: '헤어스타일',
      condition1: '헤어 컬러',
      condition2: '헤어 스타일',
    },
  ]

  return (
    <>
      {consultData.map((el) => {
        return (
          <FinalConsultingPage
            key={el.type}
            userType={el.type}
          />
        )
      })}
    </>
  )
}

export default FinalConsultingForm