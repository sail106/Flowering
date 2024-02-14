import styled from "styled-components"

const StyledCard = styled.div`
  padding-top: 40px;
  margin-left: 150px;
  margin-bottom: 100px;
`;

const MyCard = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

export default MyCard