import styled from "styled-components";
import { useState } from "react";

// import { Page } from "../store/Page";
// const MyPage = styled(Page)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const FaqContainer = styled.div`
  justify-content: center;
  box-shadow: 2px black;
  width: 50%;
  height: 50%;
  padding: 16px;
  margin-top: 20px;
`;

const FaqWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b1b1b1;
`;

const FaqText = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;

  font-weight: 500;
  line-height: 27px; /* 135% */
`;

const Image = styled.img``;

const FaqAnswer = styled.div`
  margin-top: 10px;
  display: ${(props) => (props.open ? "block" : "none")};
`;

const DropdownWrapper = styled.div`
  width: 10%;
  height: 10%;
  cursor: pointer;
`;

const FaQBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <FaqContainer>
      <FaqWrapper>
        <FaqText>컨설팅은 어떻게 진행되나요?</FaqText>

        <DropdownWrapper onClick={toggleDropdown}>
          <Image src="src/assets/DropDown.png" alt="DropDown" />
        </DropdownWrapper>
        <FaqAnswer open={isOpen}>
          {/* Your FAQ question and answer content goes here */}
          Q: 이 FAQ 페이지를 어떻게 사용하나요?
          <br />
          A: 간단히 드롭다운 버튼을 클릭하여 답변을 확인하세요.
        </FaqAnswer>
      </FaqWrapper>
    </FaqContainer>
  );
};

export default FaQBox;
