import styled from "styled-components";

const Commod = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 220px;
  margin-bottom: 100px;
  text-align: center;
  font-family: "Lexend Deca";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
`;

const Title = ({ text }) => {
  return (
    <>
      <Commod>{text}</Commod>
    </>
  );
};

export default Title;
