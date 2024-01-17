import styled from "styled-components";
import { Page } from "../store/Page";

const MyPage = styled(Page)``;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const TextDiv4_1 = styled.div`
  position: absolute;
  color: black;
  font-family: Lexend Deca;
  font-size: 60px;
  line-height: 66px;
  letter-spacing: -2.25px;
  margin-left: 10%;
  right: 25%;
  left: 5%;
  top: 15%;
  margin: 0;
  text-align: start;
`;

const ConsultantDiv = styled.div`
  display: flex;
  margin-top: 15%;
  height: 68vh;
`;

const ConsultantNameDiv = styled(ConsultantDiv)`
  margin-top: 3%;
`;

const ConsultantCard = styled.div`
  margin-top: 20%;
  margin-left: 4%;
  width: 29vw;
  height: 100%;
  background: #f6f6f6;
`;

const ConsultantNameCard = styled(ConsultantCard)`
  background-color: white;
  height: 0vh;
  font-family: Lexend Deca;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const BIBICard = styled(ConsultantCard)`
  border-radius: 50px 0px 0px 50px;
  text-align: center;
`;

const BIBIIMage = styled(Image)`
  width: 80%;
`;

const FourthPage = () => {
  return (
    <MyPage>
      <TextDiv4_1>
        WE CAN FIND YOUR <br /> PERSONAL STYLE
      </TextDiv4_1>

      <ConsultantDiv>
        <BIBICard>
          <BIBIIMage src="src/assets/BIBI.png" alt="BIBI" />
        </BIBICard>

        <ConsultantCard>
          <Image src="src/assets/LEINA.png" alt="BIBI" />
        </ConsultantCard>

        <ConsultantCard>
          <Image src="src/assets/DIANA.png" alt="BIBI" />
        </ConsultantCard>
      </ConsultantDiv>

      <ConsultantNameDiv>
        <ConsultantNameCard>BIBI</ConsultantNameCard>

        <ConsultantNameCard>LEINA</ConsultantNameCard>

        <ConsultantNameCard>DIANA</ConsultantNameCard>
      </ConsultantNameDiv>
    </MyPage>
  );
};

export default FourthPage;
