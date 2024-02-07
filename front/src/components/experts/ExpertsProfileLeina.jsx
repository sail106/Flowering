import Title from "../modify/Title";
import styled from "styled-components";
import Experts from "../common/Experts";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { StyledSmallDiv } from "../common/Experts";
import Review from "./ExpertsCard";
import LEINA from "../../assets/LEINA.png"
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
  return (
    <>
      <Title text={"experts profile"} />
      <ExpertCard>
        <Experts
          nickname={"LEINA"}
          text={"나를 마음껏 표현할 수 있을 때, 진정 아름다워집니다."}
          rate={4.8}
          ratenum={172}
          tag1={"스킨케어"}
          tag2={"헤어스타일링"}
          imgsrc={LEINA}
          width={"305px"}
          height={"370px"}
          path={"/expertsReservation"}
        />
      </ExpertCard>

      <Text>
        <h2>소개</h2>
        <p>
          고객들의 피부 타입과 개인적인 화장품 선호도에 맞는 맞춤 뷰티 루틴을
          제안하여 최상의 결과를 도와드립니다. 또한 트렌드에 맞는 메이크업
          스타일과 헤어 스타일을 제안하여 고객들의 아름다움을 더욱 돋보이게
          합니다. 고객들의 아름다움을 끌어올리는 것을 위해 최선을 다하겠습니다.
        </p>
        <Margin />
        <h2>경력사항</h2>
        <p>클리오 | 2017.08 ~ 2023.01</p>
        <Margin />
        <h2>전문분야</h2>

        <StyledSmallDiv1>스킨케어</StyledSmallDiv1>
        <StyledSmallDiv2>자연주의</StyledSmallDiv2>

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
