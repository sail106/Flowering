import Card from "./store/Card";
import RadioButton from "./store/RadioButton";

const ConsultReservation = () => {
  return (
    <Card>
      <h1>Reservation</h1>
      <div>달력달력달력</div>
      
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