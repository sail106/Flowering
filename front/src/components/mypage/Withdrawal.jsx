import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { ButtonBox } from "../store/Button";
import styled from "styled-components";
import Alert from "@mui/material/Alert";
import { useState } from "react";
const Text = styled.p`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Warning = styled.div`
  text-align: start;
  /* display: flex;
  width: 80%; */
`;
const WithdrawalButton = styled(ButtonBox)`
  border-radius: 100px;
  width: 220px;
  margin-top: 1.5%;
`;
const LeaveButtom = styled(WithdrawalButton)`
  margin-top: 5%;
  width: 50%;
`;

const MySheet = styled(Sheet)`
  text-align: center;
`;
function WithdrawalCompleted(){

}
export default function Withdrawal() {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmOpen = () => {
    setOpen(false); // 첫 번째 모달 닫기
    setConfirmOpen(true); // 두 번째 모달 열기
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false); // 두 번째 모달 닫기
  };

  return (
    <>
      <WithdrawalButton
        color="neutral"
        onClick={() => setOpen(true)}
      >
        탈퇴하기
      </WithdrawalButton>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <MySheet
          sx={{
            maxWidth: 400,
            borderRadius: "md",
            p: 2,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Text>회원 탈퇴</Text>
          <Warning>
            <Alert severity="error">
              회원 탈퇴 시 계정 정보 및 컨설팅 내역은 삭제되어 복구가 불가해요.
              정말로 탈퇴하시겠어요?
            </Alert>
          </Warning>
          <LeaveButtom onClick={handleConfirmOpen}>떠날래요</LeaveButtom>
        </MySheet>
      </Modal>
      <Modal
        aria-labelledby="confirm-modal-title"
        aria-describedby="confirm-modal-desc"
        open={confirmOpen}
        onClose={handleConfirmClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <MySheet

          sx={{
            maxWidth: 400,
            borderRadius: "md",
            p: 2,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Text>확인</Text>
          <Warning>
            <Alert severity="success">
              확인되었습니다.
            </Alert>
          </Warning>
          <LeaveButtom onClick={handleConfirmClose}>닫기</LeaveButtom>
        </MySheet>
      </Modal>
    </>
  );
}