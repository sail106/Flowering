import styled from "styled-components";
import { Page } from "./common/Page";
import FirstPage from "./beautyconsulting/FirstPage";
import SecondPage from "./beautyconsulting/SecondPage";
import ThirdPage from "./beautyconsulting/ThirdPage";
import FourthPage from "./beautyconsulting/FourthPage";

const BackPage = styled(Page)`
  height: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Margin = styled.div`
  margin-bottom: 10%;

`;

const BeautyConsulting = () => {
  return (
    <BackPage>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      {/* <Margin /> */}
    </BackPage>
  );
};

export default BeautyConsulting;
