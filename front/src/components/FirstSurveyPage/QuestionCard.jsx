import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsCircleFill } from 'react-icons/bs';
import QuestionButton from './QuestionButton';

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 63%;
  height: 543px;
  justify-content: center;
  border-color: #f5f5f5;
  border-style: solid;
  border-width: 4px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

const QuestionTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const QuestionTitle = styled.div`
  font-size: 20px;
  font-family: 'Noto Sans KR';
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-weight: bold;
  width: 80%;
`;

const QuestionNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Noto Sans KR';
  font-size: 25px;
  color: #f28482;
  font-weight: 500;
  border-radius: 50%;
  border-color: #f28482;
  border-style: solid;
  height: 35px;
  width: 35px;
  margin-right: 5%;
`;

const QuestionCard = (props) => {
  const { items, onChange, resetIndex } = props; // props에서 onChange와 resetIndex를 가져옴
  const [totalScore, setTotalScore] = useState(0);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  useEffect(() => {
    // resetIndex가 변경될 때마다 selectedButtonIndex를 null로 초기화
    setSelectedButtonIndex(null);
    setTotalScore(0);
  }, [resetIndex]);

  const handleButtonClick = (index) => {
    if (index === selectedButtonIndex) {
      setSelectedButtonIndex(null);
      setTotalScore(0);
      onChange(0);
    } else {
      setSelectedButtonIndex(index);
      setTotalScore(items[index].score);
      onChange(items[index].score); // onChange 이벤트 발생시 totalScore 전달
    }
  };

  return (
    <CardContent>
      <ContentBox>
        <QuestionTitleBox>
          <QuestionNumber>
            {props.cardIndex + 1} {/* index에 1을 더해서 숫자를 표시 */}
          </QuestionNumber>
          <QuestionTitle>{props.questionTitle}</QuestionTitle>
        </QuestionTitleBox>
        {items.map((item, index) => (
          <QuestionButton key={index} text={item.text} score={item.score} onClick={() => handleButtonClick(index)} isSelected={index === selectedButtonIndex} />
        ))}
      </ContentBox>
    </CardContent>
  );
};

export default QuestionCard;
