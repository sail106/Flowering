import styled from 'styled-components';
import QuestionCard from './QuestionCard';
import React, { useState, useEffect } from 'react';

const QuestionTitle = styled.div`
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 36px;
  font-weight: 400;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const QuestionPage = (props) => {
  const onChange = props.onChange;
  const datas = props.data;
  const [dataArray, setDataArray] = useState(Array.from({ length: datas.length }, () => 0));

  // dataArray 상태를 업데이트하는 함수
  const updateDataArray = (index, totalScore) => {
    dataArray[index] = totalScore;
    onChange(dataArray);
  };

  useEffect(() => {
    // resetIndex가 변경될 때마다 selectedButtonIndex를 null로 초기화
    setDataArray(Array.from({ length: datas.length }, () => 0));
  }, [props.resetIndex]);

  return (
    <>
      <QuestionTitle>{props.titleMain}</QuestionTitle>
      <QuestionTitle>{props.titleSub}</QuestionTitle>
      <Card>
        {datas.map((data, index) => (
          <QuestionCard
            key={index}
            questionTitle={data.questionTitle}
            items={data.items}
            onChange={(totalScore) => {
              // isSelected 값이 변경될 때마다 해당 인덱스에 맞는 값을 업데이트합니다.
              updateDataArray(index, totalScore); // 인덱스와 totalScore를 함께 전달
            }}
            resetIndex={props.resetIndex}
            cardIndex={index}
          />
        ))}
      </Card>
    </>
  );
};

export default QuestionPage;
