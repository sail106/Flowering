import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import { useState } from "react";
import styled from "styled-components";
import { ButtonBox } from "../store/Button";

const EditButton = styled(ButtonBox)`
  border-radius: 100px;
  width: 220px;
  margin-top: 2%;
`;

const Text = styled.p`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const OkayButtom = styled(EditButton)`
  width: 50%;
`;

export default function Edit() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <EditButton onClick={() => setOpen(true)}>수정하기</EditButton>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: 300,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          
          <Text>수정이 완료되었습니다.</Text>
          <OkayButtom onClick={handleClose}>확인</OkayButtom>
        </Sheet>
      </Modal>
    </>
  );
}
