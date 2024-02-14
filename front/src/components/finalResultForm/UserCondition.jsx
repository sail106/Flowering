import styled from "styled-components"

import ConditionLabel from "./ConditionLabel"
import Input from "../common/Input"

const MyCard = styled.div`
  /* display: flex; */
  margin-bottom: 80px;
`
const MyContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const UserCondition = ({ usersCondition }) => {
  return (
    <MyCard>
      {usersCondition.map((el, index) => {
        return (
          <MyContainer key={index}>
            <ConditionLabel>{el}</ConditionLabel>
            <Input
              placeholder={`${el}(을)/를 입력하세요`}
              padding-bottom="3px"
              padding-top="8px"
            />
          </MyContainer>
        )
      })}

    </MyCard>
  )
}

export default UserCondition