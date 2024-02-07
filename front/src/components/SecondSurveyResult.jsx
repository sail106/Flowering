import styled from "styled-components";
import SecondResultPage from "./SecondServeyResult/SecondResultPage";

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
  return (
    <DefaultPage>
      <PageLayout>
        <PageTitle>2차 카메라 테스트</PageTitle>
        <hr></hr>
        <SecondResultPage />
      </PageLayout>
    </DefaultPage>
  );
};

export default SecondServeyResult;
