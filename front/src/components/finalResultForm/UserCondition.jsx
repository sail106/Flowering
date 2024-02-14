import styled from "styled-components"

import ConditionLabel from "./ConditionLabel"
import Input from "../common/Input"

const MyCard = styled.div`
  display: flex;
  margin-bottom: 80px;
`

const UserCondition = () => {
  return (
    <MyCard>
      <ConditionLabel>피부 상태 | </ConditionLabel>
      <Input
        placeholder="피부상태를 입력하세요"
        padding-bottom="3px"
        padding-top="8px"
      />

    </MyCard>
  )
}

export default UserCondition