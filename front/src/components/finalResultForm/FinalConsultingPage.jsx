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

const FinalConsultingPage = ({ userType, usersCondition }) => {
  return (
    <>
      <MyCard>
        <h1>I am Final Consulting Page</h1>
        <ConsultingType>{userType}</ConsultingType>
        <UserCondition usersCondition={usersCondition}>{usersCondition}</UserCondition>
      </MyCard>
      <HorizontalLine />
      <MyCard>
        <ConsultantSolution />
      </MyCard>
    </>
  )
}

export default FinalConsultingPage