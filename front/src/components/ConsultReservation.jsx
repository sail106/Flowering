import Card from "./store/Card";
import RadioButton from "./store/RadioButton";
import MyCalendar from "./store/MyCalendar";
import Button from "./store/Button"
import CenterContainer from "./store/CenterContainer";

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
      <CenterContainer>
        <Button
          width="40%"
        >
          예약하기
        </Button>
      </CenterContainer>
    </Card>
  )
}

export default ConsultReservation;