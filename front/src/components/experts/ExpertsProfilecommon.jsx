import Title from "../modify/Title";
import styled from "styled-components";
import Experts from "../common/Experts";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { StyledSmallDiv } from "../common/Experts";
import Review from "./ExpertsCard";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpertById } from "../../store/ExpertsListSlice";
import { useEffect, useState } from "react";

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

  // const location = useLocation();
  // const id = location.state.id;

  const { selectedid } = useSelector(state => state.ExpertsList)
  const dispatch = useDispatch();

  const [expertData, setExpertData] = useState(null); // 응답 데이터를 저장할 상태
  const [review, setreview] = useState(null);

  console.log('key ' + selectedid)


  useEffect(() => {
    console.log('keyyyy' + selectedid)

    if (selectedid) {

      // 컴포넌트가 마운트될 때 fetchExpertById 액션을 호출
      dispatch(fetchExpertById(selectedid)).then((response) => {
        console.log('ExpertsProfile', response);
        console.log(JSON.stringify(response, null, 2)); //잘받음
        console.log(JSON.stringify(response.payload.user_response, null, 2));
        setExpertData(response);
        console.log('expppp' + expertData?.payload.user_response.nickname ?? ' ')
        // console.log('expppp' + expertData?.payload.hash_tag_responses[0].workplace??' ')
        console.log('expppp' + expertData?.payload.hash_tags[0].workplace ?? ' ')
        console.log('expppp' + expertData?.payload.reviews[0].content ?? ' ')
        console.log('expppp' + expertData?.payload.reviews.length ?? ' ')
        console.log('expppp' + expertData?.payload.star ?? ' ')


      }).catch((error) => {
        console.log('error');
      });

    }

  }, []);


  // dispatch(fetchExpertById({ id: id })).then((response) => {
  //   console.log('ExpertsProfile' + response)
  //   console.log(JSON.stringify(response, null, 2));
  //   setExpertData(response)

  // }).catch((error) => {
  //   console.log('error')

  // })

  return (
    <>
      <Title text={"experts profile"} />

      <ExpertCard>
        <Experts
          nickname={expertData?.payload.user_response.nickname ?? ''}
          text={expertData?.payload.user_response.simple_introduce ?? ''}
          // text={"당신만의 고유한 아름다움을 찾아드리겠습니다."}
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
            // defaultValue={expertData?.payload.star ?? ' '}
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



        {/* 
        <Review
          name={"루루라"}
          date={"23/01/26"}
          rate={4.6}
          desc={`정말로 탁월했습니다. 내 피부 타입과 스킨케어 루틴에 대한 전문적인
          조언을 받아서 피부 상태가 훨씬 개선되었어요. 감사합니다!`}
        />
        <Review
          name={"미미로띠"}
          date={"24/01/21"}
          rate={4.8}
          desc={`말로 인상적이었습니다. 나에게 딱 맞는 화장품과 메이크업 스타일에 대한 조언을 받아서 자신감이 생겼어요. 다시 한 번 감사드립니다!`}
        />
        <Review
          name={"바비"}
          date={"24/01/18"}
          rate={4.8}
          desc={`정말로 훌륭했습니다. 나에게 어울리는 헤어 스타일과 색조에 대한 조언을 받아서 완전히 새로운 모습으로 변할 수 있었어요.  너무 감사합니다!`}
        /> */}
      </Text>
    </>
  );
};

export default ExpertsProfile;
