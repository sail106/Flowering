import styled from "styled-components";

const Container = styled.div`
  margin: 0 0 0 5%;
  position: relative;
  width: 317px;
  height: 418px;
`;

const Image = styled.img`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  width: 300px;
  height: ${(props) => props.height};
`;

const StyledDiv = styled.div`
  width: 195px;
  height: 307px;
  background: #f6f6f6;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  position: absolute;
  top: 90px;
  left: 120px;
  z-index: 0;
`;

const TextDiv = styled.div`
  position: absolute;
  width: 330px;
  margin-top: 280px;
  left: 400px;
`;

const Text = styled.div`
  color: #6d6d6d;
  text-align: left;
  font-family: "Noto Sans KR";
  font-size: 25px;
`;

const Name = styled.div`
  text-align: left;
  font-family: Poppins;
  font-size: 24px;
  margin-top: 2%;
`;

const LeftExpert = ({ imgsrc, name, text }) => {
  return (
    <Container>
      <TextDiv>
        <Text>{text}</Text>
        <Name>{name}</Name>
      </TextDiv>

      <StyledDiv />
      <Image src={imgsrc} />
    </Container>
  );
};

export default LeftExpert;
