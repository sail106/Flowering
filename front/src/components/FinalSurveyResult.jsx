import styled from "styled-components";
import SkinProductCard from "./FinalResult/MakeupProductCard";
import MakeupProductCard from "./FinalResult/MakeupProductCard";
import FirstSurveyResultPage from "./FirstSurveyResult/FirstSurveyResultPage";
import SecondResultPage from "./SecondSurveyResult/SecondResultPage";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import ProductList from "./FinalResultInput/ProductList";

const P = styled.div`
  font-family: "Noto Sans KR";
  white-space: pre-wrap;
  margin-left: 5px;
`;

const P2 = styled.p`
  font-family: "Noto Sans KR";
  margin-left: 10px;
  margin-top: 20px;
  white-space: pre-wrap;
  display: flex;
`;

const Consulting1stepresultpage = styled.div`
  width: 77%;
  height: auto;
  margin-top: 15%;
  margin-left: 10%;
`;

const Margin = styled.div`
  margin: 110px;
`;
const Margin2 = styled.div`
  margin-top: 20px;
`;
const Margin3 = styled.div`
  margin-top: 40px;
`;

const MarginM = styled.div`
  margin-top: -20px;
`;

const H3 = styled.h3`
  font-family: "Noto Sans KR";
`;

const H2 = styled.h2`
  text-align: justify;
  font-family: "Noto Sans KR";
  font-size: 35px;
  white-space: pre-wrap;
`;

const InputSet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const H = styled.span`
  font-family: "Noto Sans KR";
  font-weight: bold;
`;

const Margin4 = styled(Margin)`
  margin-bottom: 20%;
`;

const TitleBox = styled.div`
  font-size: 50px;
  font-family: "Noto Sans KR";
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

const FinalResult = () => {
  const baseurl = import.meta.env.VITE_APP_BASE_URL;
  const { name, role, id, nickname, imageUrl, access_token, email } = useSelector((state) => state.auth.logonUser);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}report/find/7`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        setData(response.data.data_body);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // Initial fetch
  }, [access_token]); // Re-fetch when Token.access_token changes

  return (
    <>
      <TitleBox>{data.consulting_data.user_data.name}님 최종 결과 보고서</TitleBox>
      {data && <FirstSurveyResultPage data={data.survey_data} />}
      <Consulting1stepresultpage>
        {data && <SecondResultPage data={data.analysis_data} />}
        <Margin />
        <H2>3차 화상 컨설팅</H2>
        <hr />
        <H2>스킨케어</H2>
        <InputSet>
          <H3>피부 상태 |</H3>
          <P2> {data.expert_opinion_data.skincare_skin_state}</P2>
        </InputSet>
        <H3>전문가 솔루션</H3>
        <P2>{data.expert_opinion_data.skincare_solution}</P2>
        <Margin2 />
        <InputSet>
          <H3>아침 :</H3>
          <P2> {data.expert_opinion_data.skincare_morning}</P2>
        </InputSet>
        <MarginM />
        <InputSet>
          <H3>저녁 :</H3>
          <P2> {data.expert_opinion_data.skincare_night}</P2>
        </InputSet>
        <Margin2 />
        <ProductList data={data.expert_opinion_data.recommended_skin_products} />
        <Margin2 />
        <Margin />
        <H2>메이크업</H2>
        <InputSet>
          <H3>얼굴 유형 |</H3>

          <P2> {data.expert_opinion_data.makeup_facetype}</P2>
        </InputSet>
        <MarginM />
        <InputSet>
          <H3>얼굴 분위기 |</H3>
          <P2> {data.expert_opinion_data.makeup_facialexpression}</P2>
        </InputSet>
        <H3>전문가 솔루션</H3>
        <P2>{data.expert_opinion_data.makeup_solution}</P2>
        <Margin3 />
        <InputSet>
          <P>
            <H>피부 메이크업 : </H>
            {data.expert_opinion_data.makeup_skinmakeup}
          </P>
        </InputSet>
        <Margin2 />
        <InputSet>
          <P>
            <H>아이 메이크업 : </H>
            {data.expert_opinion_data.makeup_eyemakeup}
          </P>
        </InputSet>
        <Margin2 />
        <InputSet>
          <P>
            <H>립 메이크업 : </H>
            {data.expert_opinion_data.makeup_lipmakeup}
          </P>
        </InputSet>
        <Margin2 />
        <InputSet>
          <P>
            <H>블러셔 : </H>
            {data.expert_opinion_data.makeup_blusher}
          </P>
        </InputSet>
        <Margin2 />
        <InputSet>
          <P>
            <H>쉐이딩 : </H>
            {data.expert_opinion_data.makeup_shading}
          </P>
        </InputSet>
        <Margin2 />
        <InputSet>
          <P>
            <H>하이라이팅 : </H>
            {data.expert_opinion_data.makeup_highlighting}
          </P>
        </InputSet>
        <Margin />
        <ProductList data={data.expert_opinion_data.recommended_make_up_products} />
        <Margin2 />
        <Margin />
        <H2>헤어스타일</H2>
        <InputSet>
          <H3>헤어 컬러 |</H3>
          <P2>브라운 컬러</P2>
        </InputSet>
        <MarginM />
        <InputSet>
          <H3>헤어 스타일 |</H3>
          <P2>웨이브 컬</P2>
        </InputSet>
        <H3>전문가 솔루션</H3>
        <P>{data.expert_opinion_data.hairstyle_solution}</P>
        <Margin4 />
      </Consulting1stepresultpage>
    </>
  );
};

export default FinalResult;
