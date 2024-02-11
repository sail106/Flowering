import styled from "styled-components";
import { ButtonBox } from "../common/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#F28482",
  },
});

const MyButton = styled(ButtonBox)`
  min-width: 154px;
  width: 25%;
  padding: 13px;
  height: 10%;

`;

const ConsultingDiv = styled.div`
  top: 10%;
  width: 80%;
  font-family: "Noto Sans KR";
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Head = styled.p`
  font-size: 30px;
  font-weight: 400;
`;

const H2 = styled.h2`
  font-size: 30px;
  padding-left: 4%;
`;

const Body = styled.div`
  color: #6d6d6d;
  font-family: "Noto Sans KR";
  font-size: 24px;
  display: flex;
  justify-content: space-between;
`;

const ConsultingInfo = styled.div`
  width: 30%;
  border: 1px solid #b1b1b1;
  padding: 0 5% 3% 5%;
`;

const ConsultingProfile = styled.div`
  margin-bottom: 10%;
  width: 50%;
`;

const NickName = styled.p`
  font-family: "Lexend Deca";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 30px */
  margin-left: 4%;
`;

const Half = styled.div`
  margin-left: 4%;
  width: 50%;
  font-size: 23px;
`;

const ButtonDiv = styled.div`
    text-align:end;
`

const ExpertInfoNProfile = () => {

  const navigate = useNavigate();

  const User = useSelector(
    (state) => state.auth.logonUser
  );

  const handleEnterButtonClick = ( ) => {
    console.log('버튼클릭' +  User.id)
    

    navigate('/expertsprofileregistration')

  };

  return (
    <ConsultingDiv>
      <ConsultingProfile>
        <H2>컨설팅 프로필</H2>
        <hr></hr>
        <NickName>BIBI</NickName>
        <Body>
          <Half>당신만의 고유한 아름다움을 찾아드리겠습니다.</Half>
        </Body>
        <ButtonDiv>
        {/* onClick={() => handleEnterButtonClick("0")} */}

          <MyButton onClick={handleEnterButtonClick}>수정하기</MyButton>
        </ButtonDiv>
      </ConsultingProfile>
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
                defaultValue={4.9}
                precision={0.5}
                readOnly
              />
              <span>4.9</span>
            </Stack>
          </span>
        </Body>
      </ConsultingInfo>
    </ConsultingDiv>
  );
};

export default ExpertInfoNProfile;
