import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const SearchModal = ({ onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <h3>추천 제품 검색</h3>
        {/* 이 곳에 검색 폼 또는 검색 기능을 구현합니다. */}
        {/* 예를 들어, 검색 폼을 추가할 수 있습니다: */}
        {/* <form>
              <input type="text" placeholder="제품 이름을 입력하세요" />
              <button type="submit">검색</button>
            </form> */}
        <button onClick={onClose}>닫기</button>
      </ModalContent>
    </ModalContainer>
  );
};

export default SearchModal;