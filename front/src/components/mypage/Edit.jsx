import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import { useState } from "react";
import styled from "styled-components";
import { ButtonBox } from "../common/Button";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { UserInfo } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
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

export default function Edit({ nickname, pwOne }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.auth.logonUser);
  const accessToken = useSelector((state) => state.auth.logonUser.access_token);
  const handleClose = () => {
    setOpen(false);
    if (User.role === "USER") {
      navigate(`/mypage/${User.id}`);
    } else {
      navigate(`/expertmypage/${User.id}`);
    }
  };

  const updateUserInfo = async () => {
    setOpen(true);
    const data = {
      password: pwOne,
      nick_name: nickname,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.patch("http://i10c106.p.ssafy.io:8080/v1/users/update", data, config);
      dispatch(UserInfo(true));

      // 요청이 성공하면 navigate 함수를 호출하여 페이지를 이동할 수 있습니다.
      // navigate('/success');
    } catch (error) {
      console.error("Failed to update user info:", error);
      // 요청이 실패하면 사용자에게 오류 메시지를 보여줄 수 있습니다.
      // alert('사용자 정보 업데이트에 실패했습니다.');
    }
  };
  return (
    <>
      <EditButton onClick={updateUserInfo}>수정하기</EditButton>
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
