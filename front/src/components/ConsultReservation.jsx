import Card from "./common/Card";
import RadioButton from "./common/RadioButton";
import MyCalendar from "./common/MyCalendar";
import Button from "./common/Button"
import ButtonWrapper from "./signup/ButtonWrapper";
import CenterContainer from "./common/CenterContainer";

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