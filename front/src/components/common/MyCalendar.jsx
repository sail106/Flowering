import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import moment from "moment";
import styled from 'styled-components';
import axios from 'axios';

import 'react-calendar/dist/Calendar.css'
import { setSelectedDate, setSelectedTime } from '../../store/selectedSlice';

const StyledCalendar = styled(Calendar)`
  &.react-calendar {
    width: 500px;
    max-width: 100%;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 2.5em;
    font-weight: 600;
  }


  & .react-calendar--doubleView {
    width: 700px;
  }

  & .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }

  & .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }

  & .react-calendar,
  & .react-calendar *,
  & .react-calendar *:before,
  & .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  & .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  & .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  & .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }

  & .react-calendar__navigation button {
    min-width: 44px;
    background: none;
    font-weight: bold;
    background-color: #fff;
  }

  & .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }

  & .react-calendar__navigation button:enabled:hover,
  & .react-calendar__navigation button:enabled:focus {
    background-color: white;
  }

  & .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
    abbr {
      text-decoration: none;
    }
  }

  & .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }

  & .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
  }

  & .react-calendar__month-view__days__day--weekend {
    color: black;
  }

  & .react-calendar__month-view__days__day--neighboringMonth,
  & .react-calendar__decade-view__years__year--neighboringDecade,
  & .react-calendar__century-view__decades__decade--neighboringCentury {
    /* display: none; */
  }

  & .react-calendar__year-view .react-calendar__tile,
  & .react-calendar__decade-view .react-calendar__tile,
  & .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  & .react-calendar__tile {
    max-width: 100%;
    padding: 15px 6.6667px;
    background: none;
    text-align: center;
    line-height: 16px;
    font: inherit;
    font-size: 1em;
  }

  & .react-calendar__tile:disabled {
    background-color: #f0f0f0;
    color: #ababab;
  }

  & .react-calendar__month-view__days__day--neighboringMonth:disabled,
  & .react-calendar__decade-view__years__year--neighboringDecade:disabled,
  & .react-calendar__century-view__decades__decade--neighboringCentury:disabled {
    color: #cdcdcd;
  }

  & .react-calendar__tile:enabled:hover,
  & .react-calendar__tile:enabled:focus {
    background-color: white;
  }

  & .react-calendar__tile--now {
    /* background: #ffff76; */
  }

  & .react-calendar__tile--now:enabled:hover,
  & .react-calendar__tile--now:enabled:focus {
    /* background: #ffffa9; */
  }

  & .react-calendar__tile--hasActive {
    /* background: #F28482; */
  }

  & .react-calendar__tile--hasActive:enabled:hover,
  & .react-calendar__tile--hasActive:enabled:focus {
    /* background: #F28482; */
  }
  
  & .react-calendar__tile--active {
    background: #F28482;
    color: white;
    border-radius: 50%;
    transform: scale(0.6);
    font-size: 27px;
  }

  & .react-calendar__tile--active:enabled:hover,
  & .react-calendar__tile--active:enabled:focus {
    background: #F28482;
    
  }

  & .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  // value 상태 감시
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedid } = useSelector(state => state.auth)
  const accessToken = useSelector((state) => state.auth.logonUser.access_token);

  useEffect(() => {
    const checkReservation = async () => {
      const formattedDate = moment(value).format('YYYY-MM-DD'); // 선택된 날짜를 형식화
      // setSelectedDate(formattedDate); // 형식화된 날짜를 상태로 설정
      dispatch(setSelectedDate(formattedDate));
      // 여기서 value가 바뀔때마다 axios 요청을 한다.

      try {
        const baseurl = import.meta.env.VITE_APP_BASE_URL;
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        };
        const response = await axios.get(`${baseurl}users/${selectedid}/getreservation?date=${formattedDate}`, config);
        const isReserved = response.data;
        console.log("response.data : ", response.data);
        if (isReserved) {
          console.log(`Date ${formattedDate} is reserved.`);
        } else {
          console.log(`Date ${formattedDate} is available.`);
        }
      } catch (error) {
        console.error("Error while checking reservation:", error);
      }
    }

    checkReservation();

  }, [value, dispatch]);

  return (
    <>
      <StyledCalendar
        locale="en"
        onChange={onChange}
        value={value}
        calendarType="gregory"
        showNeighboringMonth={false}
        formatDay={(locale, value) =>
          moment(value).format('D')}
      />

      {/* <div>현재 선택한 날짜</div>
      <div>{moment(value).format("YYYY년 MM월 DD일")}</div>  */}
    </>
  )
}

export default MyCalendar;