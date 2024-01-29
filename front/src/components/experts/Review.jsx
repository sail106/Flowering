import Title from "../modify/Title";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { ButtonBox } from "../store/Button";

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
  /* justify-content: center; */
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
  return (
    <Cal>
      <Margin2 />
      <Title text={"Review"} />
      <CashCard>
        <Img src="src/assets/LEINA.png" alt="" />
        <Cashtext>
          <p>LEINA 뷰티 솔루션 컨설팅</p>
          <p>￦89,000</p>
        </Cashtext>
      </CashCard>
      <Margin />
      <Text>컨설팅은 만족하셨나요?</Text>
      <Stack spacing={1} direction="row" alignItems="center">
        <StyledRating
          name="half-rating-read"
          // defaultValue={rate}
          precision={0.5}
          readOnly
        />
        <span></span>
      </Stack>
      <Text>이용해보니 어떠셨나요?</Text>
      <ReviewInput placeholder="이용 후기를 남겨주세요." />

      <MyButton>작성완료</MyButton>
    </Cal>
  );
};
export default Review;
