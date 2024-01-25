import styled from "styled-components";

const Commod = styled.h1`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 100px;
`;

const Title = ({ text }) => {
  return (
    <>
      <Commod>{text}</Commod>
    </>
  );
};

export default Title;
