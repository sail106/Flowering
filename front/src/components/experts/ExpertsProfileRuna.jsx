import Title from "../modify/Title";
import styled from "styled-components";
import Experts from "../common/Experts";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { StyledSmallDiv } from "../common/Experts";
import Review from "./ExpertsCard";
import RUNA from "../../assets/RUNA.png"
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
  top: 1100px;
  left: 250px;
`;

const StyledSmallDiv2 = styled(StyledSmallDiv)`
  top: 1100px;
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
  return (
    <>
      <Title text={"experts profile"} />
      <ExpertCard>
        <Experts
          nickname={"LUNA"}
          text={"건강하고 자연스러운 아름다움을 선물해드립니다."}
          rate={4.8}
          ratenum={172}
          tag1={"에코뷰티"}
          tag2={"컬러리스트"}
          imgsrc={RUNA}
          width={"294px"}
          height={"363px"}
          path={"/expertsReservation"}
        />
      </ExpertCard>

      <Text>
        <h2>소개</h2>
        <p>
          환경 제품과 자연스러운 컬러감을 통해 고객님의 아름다움을 끌어올리는
          것을 목표로 하고 있습니다. 고객님의 피부 타입과 취향에 맞게 맞춤형
          뷰티 권고를 제공하여, 고객님이 자신만의 아름다움을 발견할 수 있도록
          도와드리고 있습니다. 언제든지 저에게 연락 주세요. 함께 더 아름다워지는
          여정을 함께 나눠보아요!
        </p>
        <Margin />
        <h2>경력사항</h2>
        <p>샤넬 뷰티 | 2017.08 ~ 2022.08</p>
        <Margin />
        <h2>전문분야</h2>

        <StyledSmallDiv1>에코뷰티</StyledSmallDiv1>
        <StyledSmallDiv2>컬러리스트</StyledSmallDiv2>

        <Margin />

        <H2>리뷰</H2>
        <Stack spacing={1} direction="row" alignItems="center">
          <StyledRating
            name="half-rating-read"
            defaultValue={4.9}
            precision={0.5}
            readOnly
          />
          <span>179</span>
        </Stack>
        <Intro>실제 컨설팅을 이용하신 고객님들의 리뷰입니다.</Intro>
        <hr></hr>
        <Margin2 />
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
        />
      </Text>
    </>
  );
};

export default ExpertsProfile;
