import Card from "./store/Card";
import RadioButton from "./store/RadioButton";
import MyCalendar from "./store/MyCalendar";
import Button from "./store/Button"
import ButtonWrapper from "./signup/ButtonWrapper";

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
      <ButtonWrapper>
        <Button
          width="40%"
          borderRadius="25px"
        >
          예약하기
        </Button>
      </ButtonWrapper>
    </Card>
  )
}

export default ConsultReservation;