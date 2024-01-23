import styled from "styled-components";

const StyleCard = styled.div`
  padding-top: 100px;
  width: 500px;
  height: 1300px;
  margin: 0 auto;
`;

const Card = (props) => {
  return (
    <StyleCard>
      {props.children}
    </StyleCard>
  )
}

export default Card;