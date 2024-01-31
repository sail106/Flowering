import styled from "styled-components";

const StyleCard = styled.div`
  padding-top: 100px;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const Card = (props) => {
  return (
    <StyleCard>
      {props.children}
    </StyleCard>
  )
}

export default Card;