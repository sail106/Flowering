import Card from "./store/Card";
import RadioButton from "./store/RadioButton";
import MyCalendar from "./store/MyCalendar";

const ConsultReservation = () => {
  

  return (
    <Card>
      <h1>Reservation</h1>
      <MyCalendar />
      <RadioButton
        type="radio"
        id="myradio"
        value="10:00"
        width="200px"
        height="100px"
        htmlFor="myradio"
      />
    </Card>
  )
}

export default ConsultReservation;