import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { ButtonBox } from "../store/Button";
import styled from 'styled-components';
import Alert from "@mui/material/Alert";
const Text = styled.p`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Warning = styled.div`
  justify-content: center;
  display: flex;
  width: 80%;
`;
const WithdrawalButton = styled(ButtonBox)`
  border-radius: 100px;
  width: 220px;
  margin-top: 10%;
`;
export default function New() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <WithdrawalButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        탈퇴하기
      </WithdrawalButton>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Text>회원 탈퇴</Text>
          <Warning>
              <Alert severity="error">
                회원 탈퇴 시 계정 정보 및 컨설팅 내역은 삭제되어 복구가
                불가해요. 정말로 탈퇴하시겠어요?
              </Alert>
            </Warning>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}