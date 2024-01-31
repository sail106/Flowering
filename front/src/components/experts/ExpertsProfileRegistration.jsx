import styled from "styled-components";
import Input from "../common/Input";
import { ButtonBox } from "../common/Button";
import { IoMdRemove } from "react-icons/io";
import { GoPlus } from "react-icons/go";
const MyPage = styled.div`
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Margin = styled.div`
  margin: -20px;
`;

const Regist = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
`;

const MyImg = styled.img`
  margin-top: 5%;
  border-radius: 50%;
  width: 250px;
  margin-top: 80px;
  height: 250px;
`;

const CameraImg = styled(MyImg)`
  position: absolute;
  top: 13%;
  right: 43%;
  width: 3%;
  height: auto;
  background-color: #e2dfd8;
`;

const Container = styled.div`
  width: 50%;
  padding: 30px;
  background-color: #f5f5f5;
  margin: 70px;
  font-weight: 700;
  font-size: 25px;
`;

const PP = styled.p`
  margin-top: -50px;
  width: 53%;
`;

const Nic = styled.div`
  left: 515px;
  top: 534px;
  position: absolute;
`;

const H3 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 538px;
`;
const H32 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 585px;
`;
const H33 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 633px;
`;

const H4 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 890px;
`;

const H42 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 937px;
`;
const H5 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 1006px;
`;

const H52 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 1052px;
`;
const Put = styled.div`
  margin-left: 140px;
`;
const Put2 = styled.div`
  margin-left: 65px;
`;
const Career = styled.p`
  margin-top: 13px;
  margin-left: -465px;
  margin-bottom: 17px;
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Career2 = styled.p`
  align-items: start;
  margin-top: 7px;
  margin-left: -420px;
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MyButton = styled(ButtonBox)`
  border-radius: 300px;
  margin: 120px;
  width: 230.145px;
  height: 59.143px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Plus = styled(GoPlus)`
  font-size: 30px;
  position: absolute;
  left: 1145px;
  top: 1074px;
  color: gray;
`;
const Remove = styled(IoMdRemove)`
  font-size: 27px;
  position: absolute;
  left: 1145px;
  top: 951px;
  color: gray;
`;
const ExpertsProfileRegistration = () => {
  return (
    <>
      <MyPage>
        <MyImg src="src/assets/BIBI.png" alt="프로필 사진" />
        <CameraImg src="src/assets/camera.png" alt="프로필 사진" />
        <Container>전문가 소개</Container>
        <PP>
          <Regist>
            <h3>전문가 닉네임</h3>
            <Nic>BIBI</Nic>
          </Regist>

          <H3>한줄 소개</H3>
          <Put>
            <Input width={"587px"} placeholder="한줄 소개를 입력하세요" />
          </Put>
          <H32>자세한 소개</H32>
          <Put>
            <Input width={"587px"} placeholder="자세한 소개를 입력하세요" />
          </Put>
          <H33>전문 분야</H33>
          <Put>
            <Input width={"587px"} placeholder="#태그 입력 (최대5개)" />
          </Put>
        </PP>
        <Container>경력 사항</Container>
        <Margin />
        <H4>회사명</H4>
        <Career>아모레퍼시픽</Career>
        <H42>근무기간</H42>
        <Career2>2018.08 ~ 2022.03</Career2>
        <Remove />
        <Plus />
        <br />
        <H5>회사명</H5>
        <Put2>
          <Input width={"587px"} placeholder="회사명을 입력하세요" />
        </Put2>
        <H52>근무기간</H52>
        <Put2>
          <Input width={"587px"} placeholder="0000년00월~0000년00 월" />
        </Put2>

        <br />
        <ButtonContainer>
          <MyButton>저장하기</MyButton>
        </ButtonContainer>
      </MyPage>
    </>
  );
};

export default ExpertsProfileRegistration;
