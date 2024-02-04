import styled from "styled-components";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  margin-left: 50px;
`;

const P = styled.p`
  white-space: pre-line;
  font-family: "Noto Sans KR";
  font-size: 17px;
  color: #6d6d6d;
  margin-right: 180px;
`;

const P2 = styled.p`
  white-space: pre-line;
  font-family: "Noto Sans KR";
  font-size: 17px;
  color: #6d6d6d;
  margin-left: 10px;
  margin-right: 20px;
  width: 350px;
`;
const CardBattle = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #d3d1d1;
  position: relative;
`;

const Alpa = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;
const CenterLine = styled.div`
  position: absolute;
  height: 100%;
  width: 1px;
  background-color: #d3d1d1;
  left: 50%;
  transform: translateX(-50%);
`;

const H1Styled = styled.h1`
  font-family: "Noto Sans KR";
  font-size: 55px;
  margin-bottom: -20px;
  font-weight: 600;
`;

const H2 = styled.h2`
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 500;
  margin-bottom: -15px;
`;

const P3 = styled.h3`
  font-family: "Noto Sans KR";
  font-size: 15px;
  color: #979797;
  font-weight: 400;
  margin-bottom: 40px;
  /* width: 120px; */
`;

const MBTIresultCard = ({
  title1,
  subtitle1,
  ensubtitle1,
  content1,
  content2,
  title2,
  subtitle2,
  ensubtitle2,
}) => {
  return (
    <CardBattle>
      <Alpa>
        <Title>
          <H1Styled>{title1}</H1Styled>
          <H2>{subtitle1}</H2>
          <P3>{ensubtitle1}</P3>
        </Title>
        <P>{content1}</P>
      </Alpa>
      <CenterLine />
      <Alpa>
        <P2>{content2}</P2>
        <Title>
          <H1Styled>{title2}</H1Styled>
          <H2>{subtitle2}</H2>
          <P3>{ensubtitle2}</P3>
        </Title>
      </Alpa>

    </CardBattle>
  );
};

export default MBTIresultCard;
