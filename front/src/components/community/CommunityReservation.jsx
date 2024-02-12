import Title from "../modify/Title";
import MyCalendar from "../common/MyCalendar";
import RadioButton from "../common/RadioButton";
import { ButtonBox } from "../common/Button";
import Input from "../common/Input";

import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const MyButton = styled(ButtonBox)`
  border-radius: 300px;
  margin: 80px;
  width: 230.145px;
  height: 59.143px;
`;

const Cal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const M1 = styled.div`
  display: flex;
  padding-top: 10px;
  margin: 20px;
`;

const Margin = styled.div`
  margin: -20px;
`;

const AddImageButton = styled.label`
  border: 1px solid #f5f5f5;
  border-radius: 30px;
  background-color: white;
  color: black;
  padding: 10px 10px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const H3 = styled.h3`
  padding-top: 30px;
  text-align: start;
`;
const Center = styled.div`
  text-align: start;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const CommunityReservation = () => {
  const firstTimes = [
    "10:00", "11:00", "12:00", "13:00",
  ];
  const secondTimes = [
    "15:00", "16:00", "17:00", "18:00"
  ];

  const selectedDate = useSelector(state => state.selected.selectedDate);
  const selectedTime = useSelector(state => state.selected.selectedTime);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  
  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  }

  const handleContentChange = (newContent) => {
    setContent(newContent);
  }

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  }

  const reservationHandler = async () => {
    const body = {
      title: title,
      content: content,
      thumbnail_img_url: image,
      open_day: selectedDate.slice(5,),
      time: selectedTime.slice(0,5),
    }
    const response = await axios.post('http://i10c106.p.ssafy.io:8080//v1/community/add', body)
  }

  console.log("image : ", image);


  return (
    <Cal>
      <Title text={"Reservation"} />
      <Margin />
      <MyCalendar />
     
      <M1>
        {firstTimes.map((value) => (
        <RadioButton
          key={value}
          type="radio"
          // id="myradio"
          value={value}
          width="200px"
          height="100px"
          htmlFor={value}
          margin-right="10px"
        />
        ))}
      </M1>

      <M1>
        {secondTimes.map((value) => (
        <RadioButton
          key={value}
          type="radio"
          id="myradio"
          value={value}
          width="200px"
          height="100px"
          htmlFor="myradio"
          margin-right="10px"
        />
        ))}
      </M1>

      <Center>
        <H3>주제</H3>
        <Input
          placeholder="주제를 입력하세요"
          onInputChange={handleTitleChange}
        />
        <H3>설명</H3>
        <Input
          placeholder="설명을 입력하세요"
          onInputChange={handleContentChange}
        />
        <H3>썸네일 이미지</H3>
        <AddImageButton>
          + 사진 추가
          <Input
            type="file"
            display="none"
            onChange={handleImageChange}
          />
        </AddImageButton>
        {image && <img src={image} alt="사진 미리보기"/>}
      </Center>
      <ButtonContainer>
        <MyButton onClick={reservationHandler}>예약하기</MyButton>
      </ButtonContainer>
    </Cal>
  );
};

export default CommunityReservation;
