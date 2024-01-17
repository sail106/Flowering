import styled from "styled-components";
import { ButtonBox } from "./store/Button";
import MyInfo from "./mypage/MyInfo";
import { Page } from "./store/Page";

const BackPage = styled(Page)`
  height:auto;
`

const Header = styled.div`
display:flex;
  font-family: Lexend Deca;
  font-size: 56px;
  margin-top: 12%;
  justify-content: center;
  margin-bottom: 4%;
`;

const MyPage = () => {
  return (
    <BackPage>
      <Header>MY PAGE</Header>
    <MyInfo />
    </BackPage>
  );
};

export default MyPage;
