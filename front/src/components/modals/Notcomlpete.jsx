import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import { useState } from "react";
import styled from "styled-components";
import { ButtonBox } from "../common/Button";

const Button = styled(ButtonBox)`
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

const OkayButtom = styled(Button)`
  width: 50%;
`;

export default function Notcomplete() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>수정하기</Button>
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
          
          <Text>결과 보고서가 완성되지 않았습니다.</Text>
          <OkayButtom onClick={handleClose}>확인</OkayButtom>
        </Sheet>
      </Modal>
    </>
  );
}
