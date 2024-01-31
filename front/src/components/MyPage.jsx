import styled from "styled-components";
import MyInfo from "./mypage/MyInfo";
import MyConsulting from "./mypage/MyConsulting";
import MyCommunity from "./mypage/MyCommunity";
import { Page } from "./common/Page";
import MyCalendar from "./common/MyCalendar";
import "react-calendar/dist/Calendar.css";

const BackPage = styled(Page)`
  height: auto;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const Header = styled.span`
  display: flex;
  font-family: Lexend Deca;
  font-size: 56px;
  margin-top: 12%;
  justify-content: center;
  margin-bottom: 4%;
`;

const CalendarDiv = styled.span`
  position: absolute;
  top: 10%;
  right: 15%;
`;

const Margin = styled.div`
  margin-bottom : 10%;
`

const MyPage = () => {
  return (
    <BackPage>
      <Header>MY PAGE</Header>
      <MyInfo />

      <MyConsulting />
      <MyCommunity />
      
    <Margin/>
    </BackPage>
  );
};

export default MyPage;
