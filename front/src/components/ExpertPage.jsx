import styled from "styled-components";
import MyInfo from "./mypage/MyInfo";
import ExpertConsulting from "./mypage/ExpertConsulting";
import ExpertInfoNProfile from "./mypage/ExpertInfoNProfile";
import { Page } from "./store/Page";

const BackPage = styled(Page)`
  height: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Header = styled.span`
  display: flex;
  font-family: Lexend Deca;
  font-size: 56px;
  margin-top: 12%;
  justify-content: center;
  margin-bottom: 5%;
`;

const Margin = styled.div`
  margin-bottom: 10%;
`;

const ExpertPage = () => {
  return (
    <BackPage>
      <Header>EXPERT PAGE</Header>
      <MyInfo />
      <ExpertInfoNProfile />
      <ExpertConsulting />
      <Margin />
    </BackPage>
  );
};

export default ExpertPage;
