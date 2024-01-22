import styled from "styled-components";
import { ButtonBox } from "./store/Button";
import MyInfo from "./mypage/MyInfo";
import MyConsulting from "./mypage/MyConsulting";
import MyCommunity from "./mypage/MyCommunity";
import { Page } from "./store/Page";
import MyCalendar from "./store/MyCalendar";
import "react-calendar/dist/Calendar.css";

const BackPage = styled(Page)`
  height: auto;
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
  top: 17%;
  right: 20%;
`;

const Calendar = styled(MyCalendar)`
  scale: 1.5;
`;

const Margin = styled.div`
  margin-bottom : 10%;
`

const MyPage = () => {
  return (
    <BackPage>
      <Header>MY PAGE</Header>
      <MyInfo />
      <CalendarDiv>
        <Calendar />
      </CalendarDiv>
      <MyConsulting />
      <MyCommunity />
    <Margin/>
    </BackPage>
  );
};

export default MyPage;
