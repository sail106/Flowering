import styled from "styled-components";

const StyleCard = styled.div`
  padding-top: 100px;
  padding-left: 300px;
  width: 420px;
  height: 1300px;
`;

const Card = (props) => {
  return (
    <StyleCard>
      {props.children}
    </StyleCard>
  )
}

export default Card;