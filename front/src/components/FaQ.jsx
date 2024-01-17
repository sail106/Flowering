import styled from "styled-components";
import { Page } from "./store/Page";
import FaQBox from "./faq/FaqBox";

const MyPage = styled(Page)`
display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  font-family: Lexend Deca;
  font-size: 50px;
  margin-top: 12%;
  justify-content: center;
`;

const FaQ = () => {

  return (
    <MyPage>
      <Header>FAQ</Header>
      <FaQBox />
    </MyPage>
  );
};

export default FaQ;
