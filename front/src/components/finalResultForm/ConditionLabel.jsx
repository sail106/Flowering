import styled from "styled-components"

const MyLabel = styled.label`
  display: flex;
  font-size: 20px;
  margin-right: 10px;
`

const ConditionLabel = ({ children }) => {
  return (
    <MyLabel>{children}</MyLabel>
  )
}

export default ConditionLabel