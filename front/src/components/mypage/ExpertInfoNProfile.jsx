import styled from "styled-components";
import { ButtonBox } from "../common/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState,  useEffect } from "react";
import axios from "axios";

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

  const [consultantData, setConsultantData] = useState(); // 상태 초기화
  const [allCount, setallCount] = useState(); // 상태 초기화
  const [todayCount, settodayCount] = useState(); // 상태 초기화
  const accessToken = useSelector(state => state.auth.logonUser.access_token);

  const mydata = async () => {

    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    };
    try {
      const baseurl = import.meta.env.VITE_APP_BASE_URL;
      // const response = await axios.get("http://i10c106.p.ssafy.io:8080/v1/users/myallconsultinglist", config);
      const myinfo = await axios.get(baseurl + "consultant/myinfo", config);
      const alllist = await axios.get(baseurl + "consultant/myAlllist", config);
      setConsultantData(myinfo.data.data_body); 
      setallCount(alllist.data.data_body.length);
      const today = new Date().toISOString().slice(0, 10);
      const count = alllist.data.data_body.filter(item => item.time.slice(0, 10) === today).length;
      settodayCount(count); 
    } catch (error) {
      console.error("Failed to update user info:", error);
    }
  };

  useEffect(() => {
    mydata(); // 컴포넌트가 마운트될 때 mydata 함수 실행
  }, []);

  return (
    <ConsultingDiv>
      <ConsultingProfile>
        <H2>컨설팅 프로필</H2>
        <hr></hr>
        <NickName>BIBI</NickName>
        <Body>
          <Half>{consultantData?.simple_introduce??''}</Half>
        </Body>
        <ButtonDiv>
          <Link to={`/expertsprofileregistration`} reloadDocument>
          <MyButton>수정하기</MyButton>
          </Link>
        </ButtonDiv>
      </ConsultingProfile>
      <ConsultingInfo>
        <Head>컨설팅 정보</Head>
        <Body>
          <span>오늘의 컨설팅 수</span>
          <span>{todayCount}개</span>
        </Body>
        <Body>
          <p>전체 컨설팅 수</p>
          <p>{allCount}개</p>
        </Body>
        <Body>
          <span>만족도</span>
          <span>
            <Stack spacing={1} direction="row" alignItems="center">
              <StyledRating
                name="half-rating-read"
                defaultValue={consultantData?.star??0}
                precision={0.5}
                readOnly
              />
              <span>{consultantData?.star??''}</span>
            </Stack>
          </span>
        </Body>
      </ConsultingInfo>
    </ConsultingDiv>
  );
};

export default ExpertInfoNProfile;
