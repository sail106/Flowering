import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import Title from "../modify/Title";
import Experts from "../common/Experts";
import { StyledSmallDiv } from "../common/Experts";
import Review from "./ExpertsCard";
import { fetchExpertById } from "../../store/ExpertsListSlice";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#F28482",
  },
});

const ExpertCard = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Margin = styled.div`
  margin: 70px;
`;

const Margin2 = styled.div`
  margin: 40px;
`;

const Text = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  line-height: normal;
  padding: 50px 250px 250px 250px;
`;

const StyledSmallDiv1 = styled(StyledSmallDiv)`
  top: 1070px;
  left: 250px;
`;

const StyledSmallDiv2 = styled(StyledSmallDiv)`
  top: 1070px;
  left: 340px;
`;
const H2 = styled.h2`
  margin-top: 100px;
`;

const Intro = styled.p`
  font-family: "Noto Sans KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 299px;
  height: 33px;
`;

const ExpertsProfile = () => {
  const { selectedid } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const [expertData, setExpertData] = useState(null); // 응답 데이터를 저장할 상태

  useEffect(() => {
    if (selectedid) {

      // 컴포넌트가 마운트될 때 fetchExpertById 액션을 호출
      dispatch(fetchExpertById(selectedid)).then((response) => {
        setExpertData(response);
      }).catch((error) => {
        console.log('error');
      });

    }

  }, []);

  return (
    <>
      <Title text={"experts profile"} />

      <ExpertCard>
        <Experts
          nickname={expertData?.payload.user_response.nickname ?? ''}
          text={expertData?.payload.simple_introduce ?? ''}
          rate={expertData?.payload.star ?? ' '}

          ratenum={expertData?.payload.reviews.length ?? ''}

          tag1={expertData?.payload?.hash_tags[0]?.workplace ?? ''}
          tag2={expertData?.payload?.hash_tags[1]?.workplace ?? ''}
          imgsrc={expertData?.payload.user_response.profile_img_url ?? ''}
          width={"280px"}
          height={"405px"}
          path={"/expertsReservation"}
        />
      </ExpertCard>


      <Text>
        <h2>소개</h2>
        <p>
          {expertData?.payload.self_introduce ?? ''}

        </p>
        <Margin />
        <h2>경력사항</h2>
        <p>아모레퍼시픽 | 2018.08 ~ 2022.03</p>
        <Margin />
        <h2>전문분야</h2>

        <StyledSmallDiv1>{expertData?.payload?.hash_tags[0]?.workplace ?? ''}</StyledSmallDiv1>
        <StyledSmallDiv2>{expertData?.payload?.hash_tags[1]?.workplace ?? ''}</StyledSmallDiv2>

        <Margin />

        <H2>리뷰</H2>
        <Stack spacing={1} direction="row" alignItems="center">
          <StyledRating
            name="half-rating-read"
            value={parseFloat(expertData?.payload.star ?? ' ')}
            precision={0.5}
            readOnly
          />
          <span>{expertData?.payload.reviews.length ?? ''}</span>
        </Stack>
        <Intro>실제 컨설팅을 이용하신 고객님들의 리뷰입니다.</Intro>
        <hr></hr>

        <Margin2 />
        {expertData?.payload.reviews?.map((review, index) => {
          // 날짜 형식 변환
          const dateString = new Date(review.user.createAt);
          const year = dateString.getFullYear();
          const month = String(dateString.getMonth() + 1).padStart(2, "0");
          const day = String(dateString.getDate()).padStart(2, "0");
          const formattedDate = `${year}/${month}/${day}`;

          return (
            <Review
              key={index}
              name={review.user.name}
              date={formattedDate}
              rate={review.star}
              desc={review.content}
            />
          );

        })}
      </Text>
    </>
  );
};

export default ExpertsProfile;
