import styled from "styled-components";
import MBTIresultCard from "./MBTIresultCard";

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

const FirstSurveyResultPage = (props) => {
  const data = props.data;
  const mbtiLetters = data?.survey_type?.split("")??[]; // survey_type을 한 글자씩 나누어 배열로 만듭니다.
  
  return (
    <Consulting1stepresultpage>
      <Margin />
      <H1>1차 피부 MBTI 진단 테스트 결과</H1>
      <hr />
      <H2>{data.survey_type}</H2>
      <H3>{data.skin_type}</H3>
      <P>{data.content}</P>
      <P>
        STRENGTH : {data.strength} <br />
        WEAKNESS : {data.weakness}
      </P>
      <Margin />

      <MBTIresultCard
        title1={mbtiLetters[0] === "D" ? <ColoredText>D</ColoredText> : mbtiLetters[0]}
        subtitle1={mbtiLetters[0] === "D" ? <ColoredText>건성</ColoredText> : "건성"}
        ensubtitle1={"Dry"}
        content1={"피지 분비량과 수분 보유량 모두 적어  거칠고 각질과 주름이 잘 생기는 타입"}
        content2={"피지 분비량이 많아 번들거리고 여드름이 자주 생기는 타입"}
        title2={mbtiLetters[0] === "O" ? <ColoredText>O</ColoredText> : mbtiLetters[0]}
        subtitle2={mbtiLetters[0] === "O" ? <ColoredText>지성</ColoredText> : "지성"}
        ensubtitle2={"Oily"}
      />
      <Margin2 />
      <MBTIresultCard
        title1={mbtiLetters[1] === "S" ? <ColoredText>S</ColoredText> : mbtiLetters[1]}
        subtitle1={mbtiLetters[1] === "S" ? <ColoredText>민감성</ColoredText> : "민감성"}
        ensubtitle1={"Sensitive"}
        content1={"피부가 얇고 섬세해 외부 자극에 쉽게 반응하는 타입 "}
        content2={"피부 장벽이 견고해 외부적인 스트레스에 대해 견디는 힘이 강한 타입"}
        title2={mbtiLetters[1] === "R" ? <ColoredText>R</ColoredText> : mbtiLetters[1]}
        subtitle2={mbtiLetters[1] === "R" ? <ColoredText>저항성</ColoredText> : "저항성"}
        ensubtitle2={"Resistant"}
      />
      <Margin2 />
      <MBTIresultCard
        title1={mbtiLetters[2] === "P" ? <ColoredText>P</ColoredText> : mbtiLetters[2]}
        subtitle1={mbtiLetters[2] === "P" ? <ColoredText>민감성</ColoredText> : "민감성"}
        ensubtitle1={"Pigment"}
        content1={"멜라닌 활성도가 높아 기미, 주근깨 혹은 잡티 등 눈에 보이는 색소가 많은 타입"}
        content2={"멜라닌 활성도가 낮아 눈에 보이는 색소가 적은 타입"}
        title2={mbtiLetters[2] === "N" ? <ColoredText>N</ColoredText> : mbtiLetters[2]}
        subtitle2={mbtiLetters[2] === "N" ? <ColoredText>비색소성</ColoredText> : "비색소성"}
        ensubtitle2={"Non-Pigment"}
      />
      <Margin2 />
      <MBTIresultCard
        title1={mbtiLetters[3] === "W" ? <ColoredText>W</ColoredText> : mbtiLetters[3]}
        subtitle1={mbtiLetters[3] === "W" ? <ColoredText>주름</ColoredText> : "주름"}
        ensubtitle1={"Wrinkle"}
        content1={"피부 결이 고르지 않고 주름이 많은 타입"}
        content2={"피부 결이 고르고 주름이 적어 탄력이 있는 타입"}
        title2={mbtiLetters[3] === "T" ? <ColoredText>T</ColoredText> : mbtiLetters[3]}
        subtitle2={mbtiLetters[3] === "T" ? <ColoredText>탱탱한</ColoredText> : "탱탱한"}
        ensubtitle2={"Tight"}
      />
    </Consulting1stepresultpage>
  );
};

export default FirstSurveyResultPage;
