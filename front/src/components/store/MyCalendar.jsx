import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from "moment";

import 'react-calendar/dist/Calendar.css'

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Calendar onChange={setDate} value={date}/>

      <div>현재 선택한 날짜</div>
      {moment(date).format("YYYY년 MM월 DD일")} 
    </>
  )
}

export default MyCalendar;