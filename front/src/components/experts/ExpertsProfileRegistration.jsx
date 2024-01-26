import styled from "styled-components";
import Input from "../store/Input";

const MyPage = styled.div`
  width: 100vw;
  position: relative;
  z-index: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: auto; */
  min-height: 100vh;
`;

// const Margin = styled.div`
//   margin: 70px;
// `;

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
  top: 20%;
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

const H3 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 558px;
`;
const H32 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 605px;
`;
const H33 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 649px;
`;
const Put = styled.div`
  margin-left: 200px;
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
            <div>BIBI</div>
          </Regist>
          <hr />

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
      </MyPage>
    </>
  );
};

export default ExpertsProfileRegistration;
