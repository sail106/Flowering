import styled from "styled-components"

const StyledCard = styled.div`
  padding-top: 40px;
  margin-left: 150px;
`;

const MyCard = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

export default MyCard