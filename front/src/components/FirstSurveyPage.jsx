import styled from "styled-components";
import Progress from "./FirstSurveyPage/ProgressBar";
import QuestionPage from "./FirstSurveyPage/QuestionPage";
import Button from "./common/Button";
import React, { useState } from "react";

const PageSetting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Page = styled.div`
  flex-direction: column;
  width: 70%;
  align-items: center;
`;

const FirstTest = styled.div`
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  color: #f28482;
`;

const Title = styled.div`
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 50px;
  font-style: bold;
  font-weight: 400;
  margin-top: 15px;
  margin-bottom: 50px;
`;

const ProgressSubject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ServeyStatus = styled.div`
  white-space: pre-line;
  font-family: "Noto Sans KR";
  font-size: 2opx;
  font-weight: 400;
  color: #b1b1b1;
  color: ${(props) => (props.active ? "#f28482" : "#b1b1b1")};
`;

const FirstServeyPage = () => {
  const question = [
    {
      titleMain: "Part1",
      titleSub: "건성(D)·지성(O)",
      data: [
        {
          questionTitle: "클렌징 후에 아무것도 바르지 않고 밝은 빛 아래서 거울을 보세요. 이마와 볼이 어떻게 보이고 느껴집니까?",
          items: [
            { text: "매우 거칠고, 버석거리고 각질이 들떠보입니다.", score: 1 },
            { text: "당깁니다.", score: 2 },
            { text: "당기지 않고 건조해 보이지 않고 번들거리지 않습니다.", score: 3 },
            { text: "밝은 빛에 반사되는 듯이 번들거립니다.", score: 4 },
          ],
        },
        {
          questionTitle: "사진을 찍었을 때, 피부가 번들거립니까?",
          items: [
            { text: "결코 그렇지 않습니다.", score: 1 },
            { text: "때때로 그렇습니다.", score: 2 },
            { text: "자주 그렇습니다.", score: 3 },
            { text: "항상 그렇습니다.", score: 4 },
          ],
        },
        {
          questionTitle: "평소 메이크업 파운데이션(마우더는 안 바른 상태)을 바른 지 2~3시간 후에 메이크업 상태가 어떻습니까?",
          items: [
            { text: "약간 들떠 보이고 주름진 부분이 나타닙니다.", score: 1 },
            { text: "부드러워 보입니다.", score: 2 },
            { text: "번들거립니다.", score: 3 },
            { text: "고정이 안되고 번들거립니다.", score: 4 },
            { text: "페이셜 파운데이션을 바르지 않습니다.", score: 2.5 },
          ],
        },
      ],
    },
    {
      titleMain: "Part2",
      titleSub: "민감성(S)·지향성(R)",
      data: [
        {
          questionTitle: "얼굴에 붉은 여드름이 있습니까?",
          items: [
            { text: "결코 없습니다.", score: 1 },
            { text: "거의 없습니다.", score: 2 },
            { text: "최소 달에 한 번 정도 나타납니다.", score: 3 },
            { text: "최소 주에 한 번 정도 나타납니다.", score: 4 },
          ],
        },
        {
          questionTitle: "클렌저, 토너. 모이스처라이저를 비롯한 화장품을 피부에 적 용했을 때 발진이나, 가렵고 쏘는 듯한 증상이 나타납니까?",
          items: [
            { text: "결코 없습니다.", score: 1 },
            { text: "거의 없습니다.", score: 2 },
            { text: "자주 그렇습니다.", score: 3 },
            { text: "항상 그렇습니다.", score: 4 },
            { text: "제품을 바르지 않습니다.", score: 2.5 },
          ],
        },
        {
          questionTitle: "여드름이나 로사시아로 진단받은 적이 있습니까?",
          items: [
            { text: "아니오.", score: 1 },
            { text: "다른 사람들이 볼 때 그렇다고 합니다.", score: 2 },
            { text: "네, 약간 그렇습니다.", score: 3 },
            { text: "네. 심각한 정도입니다.", score: 4 },
            { text: "모르겠습니다.", score: 2.5 },
          ],
        },
      ],
    },
    {
      titleMain: "Part3",
      titleSub: "색소침착(P)·비색소성(N))",
      data: [
        {
          questionTitle: "여드름이나 피부 속으로 파고드는 인그로운 헤어가 발생한 후에 다크스팟이 생깁니까?",
          items: [
            { text: "없거나 본 적 없습니다.", score: 1 },
            { text: "때때로 그렇습니다.", score: 2 },
            { text: "자주 그렇습니다.", score: 3 },
            { text: "항상 그렇습니다.", score: 4 },
            { text: "여드름이나 인그로운 헤어가 없습니다.", score: 2.5 },
          ],
        },
        {
          questionTitle: "무언가에 베이거나 상처가 생기고 난 후, 어둡거나 붉은 기가 얼마나 오래도록 남아있습니까?",
          items: [
            { text: "없거나 본 적 없습니다.", score: 1 },
            { text: "1주 정도 남아있습니다.", score: 2 },
            { text: "몇 주 정도 남아있습니다.", score: 3 },
            { text: "여러 달 남아있습니다.", score: 4 },
          ],
        },
        {
          questionTitle: "임신이나 피임약 복용, 호르몬 대체요법 시 과하게 색소침착 된 부분이 얼마나 맣이 있었습니까?",
          items: [
            { text: "없습니다.", score: 1 },
            { text: "한 구역 있습니다.", score: 2 },
            { text: "여러 구역 있습니다.", score: 3 },
            { text: "엄청 많습니다.", score: 4 },
            { text: "본인에게 해당이 되지 않습니다.", score: 2.5 },
          ],
        },
      ],
    },
    {
      titleMain: "Part4",
      titleSub: "주름(W)·탱탱한(T))",
      data: [
        {
          questionTitle: "얼굴에 주름이 있습니까?",
          items: [
            { text: "아니오. 웃거나 찡그리거나 눈썹을 들어올려도 주름이 생기지 않습니다.", score: 1 },
            { text: "표정 지을 때만 생깁니다.", score: 2 },
            { text: "표정을 지을 때도 생기고 표정을 짓지 않아도 주름이 있습니다.", score: 3 },
            { text: "별다른 포정을 짓고 있지 않아도 주름이 많이 있습니다.", score: 4 },
          ],
        },
        {
          questionTitle: "당신의 어머니의 피부 나이는 얼마로 보이십니까?",
          items: [
            { text: "나이보다 5~10년 어려보입니다.", score: 1 },
            { text: "나이 그대로 보입니다.", score: 2 },
            { text: "5년 정도 더 나이 들어 보입니다.", score: 3 },
            { text: "5년 이상 더 나이 들어 보입니다.", score: 4 },
            { text: "알아볼 수 있는 문제가 아닙니다 (입양 또는 사망, 전혀 기억이 안남.)", score: 2.5 },
          ],
        },
        {
          questionTitle: "여드름이나 로사시아로 진단받은 적이 있습니까?",
          items: [
            { text: "아니오.", score: 1 },
            { text: "다른 사람들이 볼 때 그렇다고 합니다.", score: 2 },
            { text: "네, 약간 그렇습니다.", score: 3 },
            { text: "네. 심각한 정도입니다.", score: 4 },
            { text: "모르겠습니다.", score: 2.5 },
          ],
        },
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const [trueFalseArray, setTrueFalseDataArray] = useState(Array.from({ length: question.length }, () => 0));
  const MBTIScore = [0, 0, 0, 0];

  const updateTrueFalseArray = (cardIndex, dataArray) => {
    let point = 0;
    trueFalseArray[cardIndex] = true;
    for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i] === 0) {
        trueFalseArray[cardIndex] = false;
      }
      point = point + dataArray[i];
    }
    if (trueFalseArray[cardIndex] == true) {
      MBTIScore[index] = point;
    }
  };

  const checkINdex = () => {
    if (trueFalseArray[index] == true) {
      if (index < 3) {
        setIndex(index + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        let result = "";
        if (MBTIScore[0] > 26) {
          result = result + "D";
        } else {
          result = result + "O";
        }

        if (MBTIScore[1] > 29) {
          result = result + "S";
        } else {
          result = result + "R";
        }

        if (MBTIScore[2] > 30) {
          result = result + "P";
        } else {
          result = result + "N";
        }

        if (MBTIScore[0] > 40) {
          result = result + "W";
        } else {
          result = result + "T";
        }
        console.log(result);
      }
    } else {
      alert("설문을 완료해주세요");
    }
  };

  return (
    <PageSetting>
      <Page>
        <FirstTest>1차 피부진단 테스트</FirstTest>
        <Title>피부 타입 MBTI 테스트</Title>
        {/* value값은 props로 받음 */}
        <Progress value={25 * (index + 1)} />
        <ProgressSubject>
          {question.map((item, idx) => (
            <ServeyStatus key={idx} active={index === idx}>
              {`${item.titleMain}\n${item.titleSub}`}
            </ServeyStatus>
          ))}
        </ProgressSubject>
        <QuestionPage
          titleMain={question[index].titleMain}
          titleSub={question[index].titleSub}
          data={question[index].data}
          onChange={(dataArry) => {
            // isSelected 값이 변경될 때마다 해당 인덱스에 맞는 값을 업데이트합니다.
            updateTrueFalseArray(index, dataArry); // 인덱스와 totalScore를 함께 전달
          }}
          resetIndex={index}
        />
      </Page>
      <Button onClick={() => checkINdex()}>다음</Button>
    </PageSetting>
  );
};

export default FirstServeyPage;
