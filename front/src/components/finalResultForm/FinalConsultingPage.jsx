import styled from "styled-components"

import MyCard from "./MyCard"
import ConsultingType from "./consultingType"
import UserCondition from "./UserCondition"
import ConsultantSolution from "./ConsultantSolution"

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid black;
  width: 90%;
`

const FinalConsultingPage = () => {
  return (
    <>
      <MyCard>
        <h1>I am Final Consulting Form</h1>
        <ConsultingType>스킨케어</ConsultingType>
        <UserCondition />
      </MyCard>
      <HorizontalLine />
      <MyCard>
        <ConsultantSolution />
      </MyCard>
    </>
  )
}

export default FinalConsultingPage