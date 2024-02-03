import styled from "styled-components";
import { useState } from "react";

const InfoContainer = styled.div`
  width: 70%;
  padding: 24px;
  border: solid 3px lightgrey;
  display:flex;
  height:10%;
  margin-bottom:3%;
`;

const Title = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px; /* 135% */
`;


const Content = styled.div`
  color: #6d6d6d;
  font-family: Noto Sans KR;
  line-height: 22px;
  margin-top: 1%;
`;


const Num = styled.div`
    width:15%;
    justify-content:center;
    font-size:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:2% 0%;
`

const TextDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const InfoBox = ({title, content,num}) => {

  return (
      <InfoContainer >
        <Num>
        {num}
        </Num>
        <TextDiv>
          <Title>{title}</Title>
          <Content>
        {content}
          </Content>
        </TextDiv>
      </InfoContainer>
  );
};

export default InfoBox;
