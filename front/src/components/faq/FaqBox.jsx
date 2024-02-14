import styled from "styled-components";
import { useState } from "react";
import DropDown from "../../assets/DropDown.png";

const FaqContainer = styled.div`
  justify-content: center;
  width: 50%;
  cursor: pointer;
  padding: 24px;
  background-color: ${(props) => (props.open ? "#F5F5F5;" : "none")};
  border-bottom: ${(props) => (props.open ? "none" : "1px solid #b1b1b1;")};
`;

const FaqWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FaqText = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px; /* 135% */
`;

const Image = styled.img``;

const FaqAnswer = styled.div`
  color: #6d6d6d;
  font-family: Noto Sans KR;
  width: 50%;
  line-height: 175%;
  display: flex;
  justify-content: start;
  text-align: start;
  margin-top: 1%;
  display: ${(props) => (props.open ? "block" : "none")};
  margin-bottom: 2%;
`;

const DropdownWrapper = styled.div`
  width: 10%;
  height: 10%;
`;

const FaQBox = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <FaqContainer open={isOpen} onClick={toggleDropdown}>
        <FaqWrapper>
          <FaqText>{question}</FaqText>

          <DropdownWrapper>
            <Image src={DropDown} alt="DropDown" />
          </DropdownWrapper>
        </FaqWrapper>
      </FaqContainer>
      <FaqAnswer open={isOpen}>
       {answer}
      </FaqAnswer>
    </>
  );
};

export default FaQBox;
