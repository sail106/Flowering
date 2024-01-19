import { useState } from "react";
import styled from "styled-components";
import { ButtonBox } from "../store/Button";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

// 스타일링된 컴포넌트들
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WithdrawalButton = styled(ButtonBox)`
  border-radius: 100px;
  width: 220px;
  margin-top: 10%;
`;

const LeaveButtom = styled(WithdrawalButton)`
  width: 50%;
`;

const OkayButtom = styled(WithdrawalButton)`
  width: 50%;
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
  width: 25%;
  text-align: center;
`;

const Warning = styled.div`
  justify-content: center;
  display: flex;
  width: 80%;
`;

const Text = styled.p`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

function Withdrawal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeave, setisLeave] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <WithdrawalButton onClick={handleOpen}>탈퇴하기</WithdrawalButton>
      {isOpen && (
        <Modal>
          <ModalContent>
            <Text>회원 탈퇴</Text>
            <Warning>
              <Alert severity="error">
                회원 탈퇴 시 계정 정보 및 컨설팅 내역은 삭제되어 복구가
                불가해요. 정말로 탈퇴하시겠어요?
              </Alert>
            </Warning>
            <LeaveButtom onClick={handleClose}>떠날래요</LeaveButtom>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

export default Withdrawal;
