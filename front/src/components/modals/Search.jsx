import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import { ButtonBox } from "../common/Button";
import styled from "styled-components";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Text = styled.p`
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 500;
`;
const Warning = styled.div`
  text-align: start;
`;
const WithdrawalButton = styled(ButtonBox)`
  border-radius: 100px;
  width: 220px;
  margin-top: 1.5%;
`;

const ButtonDiv = styled.div`
  justify-content: center;
  display: flex;
`;
const LeaveButtom = styled(WithdrawalButton)`
  margin-top: 5%;
  width: 50%;
`;

const MySheet = styled(Sheet)`
  /* text-align: center; */
`;

const TextArea = styled.textarea`
  width: 90%;
  height: 120px;
  padding: 10px;
  font-family: "Noto Sans KR";
  font-size: 16px;
  border: 1px solid #8e8c8c;
  border-radius: 5px;
  resize: none;
  margin-bottom: 10px;
  font-size: 14px;
`;

const InputDiv = styled.div`
  display: flex;
  width: 95%;
  background-color: white;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 5%;
`;
const Input = styled.input`
  width: 400px;
  &::placeholder {
    color: #b1b1b1;
  }
  border: 0;
  outline: none;
`;
const Icon = styled(CiSearch)`
  font-size: 30px;
  margin: 10px;
`;

const InputButton = styled.input`
  border: 1px solid gray;
  width: 1245px;
  padding: 15px;
  &::placeholder {
    color: #b1b1b1;
  }
  border-width: 0 0 1px;
  &:focus {
    outline: none;
  }
`;
export default function Search({placeholder}) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <InputButton onClick={() => setOpen(true)} placeholder={placeholder}></InputButton>
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
          <Text>추천 제품 검색</Text>
          <Warning>
            <InputDiv>
              <Icon />
              <Input placeholder="제품명을 검색하세요."></Input>
            </InputDiv>
            <TextArea placeholder="추천 제품의 특징을 입력하세요." />
          </Warning>
          <ButtonDiv>
            <LeaveButtom onClick={handleClose}>추가하기</LeaveButtom>
          </ButtonDiv>
        </MySheet>
      </Modal>
    </>
  );
}
