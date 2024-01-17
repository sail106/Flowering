// FaqPage.jsx

import  { useState } from 'react';
import styled from 'styled-components';

const FaqPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FaqBox = styled.div`
  width: 80%;
  max-width: 600px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 16px;
  margin-top: 20px;
`;

const FaqQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FaqDropdown = styled.div`
  cursor: pointer;
`;

const FaqAnswer = styled.div`
  margin-top: 10px;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const FaqPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FaqPageWrapper>
      <FaqBox>
        <FaqQuestion>
          <div>컨설팅은 어떻게 진행되나요?</div>
          <FaqDropdown onClick={toggleDropdown}>V</FaqDropdown>
        </FaqQuestion>
        <FaqAnswer open={isOpen}>
          {/* Your FAQ question and answer content goes here */}
          Q: 이 FAQ 페이지를 어떻게 사용하나요?
          <br />
          A: 간단히 드롭다운 버튼을 클릭하여 답변을 확인하세요.
        </FaqAnswer>
      </FaqBox>
    </FaqPageWrapper>
  );
};

export default FaqPage;
