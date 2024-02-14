import styled from "styled-components"

const StyledCard = styled.div`
  padding-top: 20px;
  margin-left: 80px;
`;

const MyCard = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

export default MyCard