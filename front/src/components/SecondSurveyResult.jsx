import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SecondResultPage from "./SecondSurveyResult/SecondResultPage";
import axios from "axios";
import { useSelector } from "react-redux";

const DefaultPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const PageLayout = styled.div`
  width: 75%;
`;

const PageTitle = styled.div`
  font-family: "Noto Sans KR";
  font-size: 38px;
  margin-bottom: 15px;
`;

const SecondServeyResult = () => {
  const Token = useSelector((state) => state.auth.logonUser);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://i10c106.p.ssafy.io:8080/v1/analysis/find/1",
      headers: {
        Authorization: `Bearer ${Token.access_token}`,
      },
    })
      .then((res) => {
        setData(res.data.data_body);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  }, [Token.access_token]);

  return (
    <DefaultPage>
      <PageLayout>
        <PageTitle>2차 카메라 테스트</PageTitle>
        <hr></hr>
        {data && <SecondResultPage data={data} />}
      </PageLayout>
    </DefaultPage>
  );
};

export default SecondServeyResult;
