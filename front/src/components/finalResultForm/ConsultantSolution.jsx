import styled from "styled-components";

import SolutionArea from "./SolutionArea"
import ConditionLabel from "./ConditionLabel";

const MyContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const ConsultantSolution = ({ expertMethod }) => {
  console.log("exportMethod : ", expertMethod);
  console.log("exportMethod.map(el => el) : ", expertMethod?.map(el => el));
  return (
    <>
      <h2>전문가 솔루션</h2>
      <SolutionArea />
      {expertMethod?.map((el, index) => {
        return (
          <MyContainer key={index}>
            <ConditionLabel>{el} :</ConditionLabel>
          </MyContainer>
          
        )
      })}
    </>
  )
}

export default ConsultantSolution