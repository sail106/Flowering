import { useState } from "react";
import styled from "styled-components";
import { ButtonBox } from "../store/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditButton = styled(ButtonBox)`
  border-radius: 100px;
  width:220px;
  margin-top: 2%;
`;

const OkayButtom = styled(EditButton)`
    width:50%;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

const Text = styled.p`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

function Edit() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Container>
      <EditButton onClick={handleOpen}>수정하기</EditButton>
      {isOpen && (
        <Modal onClick={handleClose}>
          <ModalContent onClick={stopPropagation}>
            <Text>수정이 완료되었습니다.</Text>
            <OkayButtom onClick={handleClose}>확인</OkayButtom>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

export default Edit;
