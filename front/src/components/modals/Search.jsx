import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import { ButtonBox } from "../common/Button";
import styled from "styled-components";
import { useState } from "react";

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
`
const Input =  styled.input`
border: 1px solid gray;
width: 90%;
padding:15px;
&::placeholder{
      color: #B1B1B1;
  }
border-width: 0 0 1px;
&:focus {
outline: none;
}
`;
export default function Search() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <WithdrawalButton
                color="neutral"
                onClick={() => setOpen(true)}
            >
                검색하기
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
                    <Text>추천 제품 검색</Text>
                    <Warning>
                        <Input placeholder="제품명을 검색하세요."></Input>
                        <TextArea placeholder="추천 제품의 특징을 입력하세요." />
                    </Warning>
                    <LeaveButtom onClick={handleClose}>추가하기</LeaveButtom>
                </MySheet>
            </Modal>
        </>
    );
}