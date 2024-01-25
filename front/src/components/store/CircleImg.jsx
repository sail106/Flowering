import styled from "styled-components";

const MyImg = styled.img`
  margin-top: 75px;
  border-radius: 500px;
  height: 268px;
  width: 239px;
  scale: ${props => props.scale || 1};
`;

const CircleImg = (props) => {
  return (
    <MyImg src={props.src} alt="원형 사진" scale={props.scale} ></MyImg>
  );
};

export default CircleImg;