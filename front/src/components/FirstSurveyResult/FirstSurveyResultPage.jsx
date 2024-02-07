import styled from "styled-components";
import MBTIresultCard from "../consultingresult/MBTIresultCard";
import { ButtonBox } from "../common/Button";

const Consulting1stepresultpage = styled.div`
  width: 77%;
  height: auto;
  margin-top: 15%;
  margin-left: 10%;
`;

const Margin = styled.div`
  margin: 80px;
`;

const Margin2 = styled.div`
  margin: 20px;
`;

const H1 = styled.h1`
  text-align: justify;
  font-family: "Noto Sans KR";
  font-size: 30px;
  font-weight: 400;
`;

const H2 = styled.h2`
  text-align: justify;
  font-family: "Noto Sans KR";
  font-size: 35px;
`;

const H3 = styled.h3`
  text-align: justify;
  font-family: "Noto Sans KR";
`;

const P = styled.p`
  text-align: justify;
  font-family: "Noto Sans KR";
`;

const ColoredText = styled.span`
  color: #f28482;
`;

const MyButton = styled(ButtonBox)`
  border-radius: 300px;
  margin: 120px;
  width: 230.145px;
  height: 59.143px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Consulting1stepresult = () => {
  return (
    <Consulting1stepresultpage>
      <Margin />
      <H1>1차 피부 MBTI 진단 테스트 결과</H1>
      <hr />
      <H2>OSPT</H2>
      <H3>지성 | 민감, 색소형 피부</H3>
      <P>여드름과 색소침착이 있지만 주름은 쉽게 지지 않는 피부 유형</P>
      <P>
        STRENGTH : 끝까지 탄력을 잃지 않는 편이기에 개선의 여지가 존재 <br />
        WEAKNESS : 피지, 염증, 색소침착의 악순환 반복
      </P>
      <Margin />

      <MBTIresultCard
        title1={"D"}
        subtitle1={"건성"}
        ensubtitle1={"Dry"}
        content1={"피지 분비량과 수분 보유량 모두 적어  거칠고 각질과 주름이 잘 생기는 타입"}
        content2={"피지 분비량이 많아 번들거리고 여드름이 자주 생기는 타입"}
        title2={<ColoredText>O</ColoredText>}
        subtitle2={<ColoredText>지성</ColoredText>}
        ensubtitle2={"Oily"}
      />
      <Margin2 />
      <MBTIresultCard
        title1={<ColoredText>S</ColoredText>}
        subtitle1={<ColoredText>민감성</ColoredText>}
        ensubtitle1={"Sensitive"}
        content1={"피부가 얇고 섬세해 외부 자극에 쉽게 반응하는 타입 "}
        content2={"피부 장벽이 견고해 외부적인 스트레스에 대해 견디는 힘이 강한 타입"}
        title2={"R"}
        subtitle2={"저항성"}
        ensubtitle2={"Resistant"}
      />
      <Margin2 />
      <MBTIresultCard
        title1={<ColoredText>P</ColoredText>}
        subtitle1={<ColoredText>민감성</ColoredText>}
        ensubtitle1={"Pigment"}
        content1={"멜라닌 활성도가 높아 기미, 주근깨 혹은 잡티 등 눈에 보이는 색소가 많은 타입"}
        content2={"멜라닌 활성도가 낮아 눈에 보이는 색소가 적은 타입"}
        title2={"N"}
        subtitle2={"비색소성"}
        ensubtitle2={"Non-Pigment"}
      />
      <Margin2 />
      <MBTIresultCard
        title1={"W"}
        subtitle1={"주름"}
        ensubtitle1={"Wrinkle"}
        content1={"피부 결이 고르지 않고 주름이 많은 타입"}
        content2={"피부 결이 고르고 주름이 적어 탄력이 있는 타입"}
        title2={<ColoredText>T</ColoredText>}
        subtitle2={<ColoredText>탱탱한</ColoredText>}
        ensubtitle2={"Tight"}
      />
      <Margin />
      <ButtonContainer>
        <MyButton>닫 기</MyButton>
      </ButtonContainer>
      <Margin />
    </Consulting1stepresultpage>
  );
};

export default Consulting1stepresult;
