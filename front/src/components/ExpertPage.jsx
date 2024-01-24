import styled from "styled-components";
import { ButtonBox } from "./store/Button";
import MyInfo from "./mypage/MyInfo";
import ExpertConsulting from "./mypage/ExpertConsulting";
import { Page } from "./store/Page";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Pets from '@mui/icons-material/Pets';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FaDragon } from "react-icons/fa";
const BackPage = styled(Page)`
  height: auto;
`;
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#F28482",
  },
});

const Header = styled.span`
  display: flex;
  font-family: Lexend Deca;
  font-size: 56px;
  margin-top: 12%;
  justify-content: center;
  margin-bottom: 5%;
`;

const MyButton = styled(ButtonBox)`
    min-width:154px;
    width:25%;
    padding:13px;
    height:10%;
    border-radius:30px;
`

const ConsultingDiv = styled.div`
  position: absolute;
  top: 10%;
  right: 12%;
  width: 35%;
  font-family: "Noto Sans KR";
`;

const Head = styled.p`
  font-size: 30px;
  font-weight: 400;
`;

const Body = styled.div`
  color: #6d6d6d;
  font-family: "Noto Sans KR";
  font-size: 24px;
  display: flex;
  justify-content: space-between;
`;

const ConsultingInfo = styled.div`
  margin-bottom: 10%;
  width:90%;
`;

const NickName = styled.p`
  font-family: "Lexend Deca";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 30px */
  margin-left:3%;
`;

const Margin = styled.div`
  margin-bottom: 10%;
`;

const Half = styled.div`
    margin-left:3%;
    width:50%;
    font-size:23px;
`;

const ExpertPage = () => {
  return (
    <BackPage>
      <Header>EXPERT PAGE</Header>
      <MyInfo />
      <ConsultingDiv>
        <ConsultingInfo>
          <Head>컨설팅 정보</Head>
          <Body>
            <span>오늘의 컨설팅 수</span>
            <span>2개</span>
          </Body>
          <Body>
            <p>결과 보고서 완성률</p>
            <p>100%</p>
          </Body>
          <Body>
            <span>만족도</span>
            <span>
              <Stack spacing={1} direction="row" alignItems="center">
                <StyledRating
                  name="half-rating-read"
                  defaultValue={3.3}
                  precision={0.5}
                  readOnly
                  icon={<Pets />}
                  emptyIcon={<Pets />}
                />
                <span>4.9</span>
              </Stack>
            </span>
          </Body>
        </ConsultingInfo>
        <Head>컨설팅 프로필</Head>
        <hr></hr>
        <NickName>BIBI</NickName>
        <Body>
            <Half>당신만의 고유한 아름다움을 찾아드리겠습니다.</Half>
            <MyButton>수정하기</MyButton>
        </Body>
      </ConsultingDiv>
      <ExpertConsulting />

      <Margin />
    </BackPage>
  );
};

export default ExpertPage;
