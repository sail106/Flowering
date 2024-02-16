import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import Title from "../modify/Title";
import { ButtonBox } from "../common/Button";
import LEINA from "../../assets/LEINA.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate   } from 'react-router-dom';
import { useSelector } from "react-redux";
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#F28482",
  },
});

const MyButton = styled(ButtonBox)`
  border-radius: 300px;
  margin: 80px;
  width: 230.145px;
  height: 59.143px;
`;

const Cal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 127px;
  height: 150px;
  margin-right: 50px;
`;

const CashCard = styled.div`
  width: 627px;
  height: 150px;
  display: flex;
`;

const Margin = styled.div`
  margin: 40px;
`;

const Margin2 = styled.div`
  margin: -60px;
`;

const Text = styled.div`
  color: #6d6d6d;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  text-align: start;
  margin: 30px;
  width: 800px;
`;

const Cashtext = styled.p`
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  width: 400px;
  align-items: center;
`;

const ReviewInput = styled.textarea`
  width: 800px;
  height: 120px;
  padding: 10px;
  margin: 10px;
  font-family: "Noto Sans KR";
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const Review = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const { routeid } = useParams();
  const navigate = useNavigate();
  const [consultantData, setConsultantData] = useState([]); // 상태 초기화
  const baseurl = import.meta.env.VITE_APP_BASE_URL;
  const accessToken = useSelector((state) => state.auth.logonUser.access_token);

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  const submitReview = async () => {
    const data = {
      content: review,
      star: rating,
      consultantid: Number(routeid),
    };
    console.log(data);
    try {
      const response = await axios.post(
        baseurl + "review/create",
        data,
        config
      );
      alert("등록되었습니다!");
      navigate("/");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  const mydata = async () => {
    try {
      const response = await axios.get(
        baseurl + `consultant/detail/${routeid}`,
        config
      );

      console.log(response.data.data_body); // 데이터를 상태에 저장
      setConsultantData(response.data.data_body); // 데이터를 상태에 저장
    } catch (error) {
      console.error("Failed to update user info:", error);
    }
  };

  useEffect(() => {
    mydata(); // 컴포넌트가 마운트될 때 mydata 함수 실행
  }, []);

  return (
    <Cal>
      <Margin2 />
      <Title text={"Review"} />
      <CashCard>
        {consultantData.user_response && (
          <>
            <Img src={consultantData.user_response.profile_img_url} alt="" />
            <Cashtext>
              <p>{consultantData.user_response.nickname} 뷰티 솔루션 컨설팅</p>
            </Cashtext>
          </>
        )}
      </CashCard>

      <Margin />
      <Text>컨설팅은 만족하셨나요?</Text>
      <Stack spacing={1} direction="row" alignItems="center">
        <StyledRating
          name="half-rating-read"
          style={{ fontSize: "4rem" }}
          precision={0.5}
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <span></span>
      </Stack>
      <Text>이용해보니 어떠셨나요?</Text>
      <ReviewInput
        placeholder="이용 후기를 남겨주세요."
        value={review}
        onChange={(event) => setReview(event.target.value)}
      />

      <MyButton onClick={submitReview}>작성완료</MyButton>
    </Cal>
  );
};
export default Review;
