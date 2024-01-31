import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#F28482",
  },
});

const Margin = styled.div`
  margin: 70px;
`;

const Nickname = styled.div`
  justify-content: space-between;
  display: flex;
`;

const P = styled.p`
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const Date = styled.p`
  color: #6d6d6d;
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Review = ({ name, date, rate, desc }) => {
  return (
    <>
      <Nickname>
        <P>{name}</P>
        <Date>{date}</Date>
      </Nickname>
      <Stack spacing={1} direction="row" alignItems="center">
        <StyledRating
          name="half-rating-read"
          defaultValue={rate}
          precision={0.5}
          readOnly
        />
        <span></span>
      </Stack>
      <p>{desc}</p>
      <Margin />
    </>
  );
};

export default Review;
