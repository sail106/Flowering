import React from 'react';
import styled from 'styled-components';

const QuestionBtn = styled.button.attrs((props) => ({
  // $clicked 속성을 필터링하여 DOM에 전달되지 않도록 수정
  // true일 때만 true 문자열을 전달하고 그 외에는 전달하지 않음
  clicked: props.$clicked ? 'true' : undefined,
}))`
  width: 100%;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 400;
  border-radius: 30px;
  border-color: #f5f5f5;
  border-style: solid;
  background-color: #ffffff;
  border-width: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  color: #000000;

  background-color: ${(props) => (props.clicked ? '#f28482' : '#ffffff')}; /* 클릭 여부에 따라 텍스트 색상 변경 */
  color: ${(props) => (props.clicked ? '#ffffff' : '#000000')};
  &:hover {
    background-color: ${(props) => (props.clicked ? '#f5f5f5' : '#f28482')}; /* 마우스 호버 시 배경색 변경 */
    color: ${(props) => (props.clicked ? '#000000' : '#ffffff')};
  }
`;

const QuestionButton = (props) => {
  const { text, score, onClick, isSelected } = props; // isSelected로 변경

  const handleClick = () => {
    onClick(score);
  };

  return (
    <QuestionBtn $clicked={isSelected} onClick={handleClick}>
      {text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </QuestionBtn>
  );
};

export default QuestionButton;
