import Title from "../modify/Title";

import styled from "styled-components";
import Experts from "../store/Experts";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { StyledSmallDiv } from "../store/Experts";

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
  margin-top:100px;
`
const P = styled.p`
font-family: "Noto Sans KR";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
`


const ExpertsProfile = () => {
  return (
    <>
      <Title text={"experts profile"} />
      <ExpertCard>
        <Experts
          nickname={"BIBI"}
          text={"당신만의 고유한 아름다움을 찾아드리겠습니다."}
          rate={4.9}
          ratenum={172}
          tag1={"스킨케어"}
          tag2={"자연주의"}
          imgsrc={"src/assets/BIBI.png"}
          width={"280px"}
          height={"405px"}
        />
      </ExpertCard>

      <Text>
        <h2>소개</h2>
        <p>
          고객의 피부 타입, 피부 상태, 고객의 습관 및 요구에 맞는 스킨케어 제품
          및 루틴을 추천하여 피부 건강에 도움을 드립니다. 또한, 적절한 메이크업
          및 스킨케어 기술을 가르치고, 피부 문제에 대한 조언과 해결책을
          제시하기도 합니다. 고객들이 건강하고 아름다운 피부를 유지할 수 있도록
          지원합니다.
        </p>
        <Margin />
        <h2>경력사항</h2>
        <p>아모레퍼시픽 | 2018.08 ~ 2022.03</p>
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
        <p>실제 컨설팅을 이용하신 고객님들의 리뷰입니다.</p>
        <hr></hr>
        <Margin />
        <P>루루</P>

      </Text>
    </>
  );
};

export default ExpertsProfile;
