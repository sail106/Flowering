import React, { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import Input from "../common/Input";
import { ButtonBox } from "../common/Button";
import Search from "../modals/Search";
// import ProductList from "../FinalResultInput/ProductList";
import ConsultingType from "./ConsultingType";
import { IoClose } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
const MyButton = styled(ButtonBox)`
  border-radius: 300px;
  margin: 80px;
  width: 230.145px;
  height: 59.143px;
`;

const MyButton1 = styled(ButtonBox)`
  background-color: gray;
  border-color: gray;
  border-radius: 300px;
  margin: 80px;
  width: 230.145px;
  height: 59.143px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 100px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10%;
`;

const ConsultingContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Margin2 = styled.div`
  margin-top: 50px;
`;

const H3 = styled.h3`
  text-align: justify;
  font-family: "Noto Sans KR";
`;

const H2 = styled.h2`
  text-align: justify;
  font-family: "Noto Sans KR";
  font-size: 35px;
`;

const Put = styled.div`
  margin-left: 20px;
  margin-top: 10px;
`;

const InputSet = styled.div`
  display: flex;
`;

const ModalBox = styled.div`
  display: flex;
  align-items: center;
  border-color: "#B1B1B1";
  border-width: 1px;
  border-radius: 5px;
  border-style: groove;
`;

const ReviewInput = styled.textarea`
  width: 1290px;
  height: 120px;
  padding: 10px;
  /* margin-left: 180px; */
  font-family: "Noto Sans KR";
  font-size: 16px;
  border: 1px solid #8e8c8c;
  border-radius: 5px;
  resize: none;
  font-size: 14px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b7b5b5;
  }
`;

const FaqAnswer = styled.div`
  color: #6d6d6d;
  font-family: Noto Sans KR;
  width: 100%;
  line-height: 175%;
  display: flex;
  /* justify-content: center; */
  /* text-align: center; */
  margin-top: 1%;
  margin-bottom: 2%;
  /* border: 1px solid black; */
`;

const Image = styled.img`
  display: flex;
  width: 150px;
  height: 150px;
`;

const ContentsDiv = styled.div`
  width: 100%;
  margin-left: 3%;
`;

const Close = styled(IoClose)`
  justify-content: center;
  margin: 30px;
  font-size: 30px;
  cursor: pointer;
`;

const NameDiv = styled.h3``;

const TextInput = styled.textarea`
  padding: 10px 0 0 10px;
  width: 100%;
  height: 45%;
  &:focus {
    outline: none;
  }
  border-radius: 10px;
`;

const FinalresultInput = () => {
  // 각 Input에 대한 상태(state) 정의
  const [skinCondition, setSkinCondition] = useState("");
  const [morningSkincareRoutine, setMorningSkincareRoutine] = useState("");
  const [eveningSkincareRoutine, setEveningSkincareRoutine] = useState("");

  // 메이크업에 대한 상태(state) 정의
  const [faceType, setFaceType] = useState("");
  const [faceMood, setFaceMood] = useState("");
  const [faceMakeup, setFaceMakeup] = useState("");
  const [eyeMakeup, setEyeMakeup] = useState("");
  const [lipMakeup, setLipMakeup] = useState("");
  const [blusher, setBlusher] = useState("");
  const [shading, setShading] = useState("");
  const [highlighting, setHighlighting] = useState("");

  // 헤어스타일에 대한 상태(state) 정의
  const [hairColor, setHairColor] = useState("");
  const [hairStyle, setHairStyle] = useState("");

  // ReviewInput에 대한 상태(state) 정의
  const [skincareSolution, setSkincareSolution] = useState("");
  const [makeupSolution, setMakeupSolution] = useState("");
  const [hairstyleSolution, setHairstyleSolution] = useState("");

  const [productList, setProductList] = useState(null);

  const Token = useSelector((state) => state.auth.logonUser);
  const accessToken = useSelector((state) => state.auth.logonUser.access_token);
  const navigate = useNavigate();
  // 값이 변경될 때마다 호출되는 함수
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const [makeup, setMakeup] = useState([]);
  const [skin, setSkin] = useState([]);
  const [skindescriptions, setSkinDescriptions] = useState(
    skin.map((item) => item.product_description || "")
  );
  const [makeupdescriptions, setMakeupDescriptions] = useState(
    makeup.map((item) => item.product_description || "")
  );

  const skinDescriptionChange = (index, value) => {
    const newDescriptions = [...skindescriptions];
    newDescriptions[index] = value;
    setSkinDescriptions(newDescriptions);
    const newSkin = [...skin];
    newSkin[index].product_description = value;
    setSkin(newSkin);
  };

  const makeupDescriptionChange = (index, value) => {
    const newDescriptions = [...makeupdescriptions];
    newDescriptions[index] = value;
    setMakeupDescriptions(newDescriptions);
    const newMakeup = [...makeup];
    newMakeup[index].product_description = value;
    setMakeup(newMakeup);
  };

  useEffect(() => {
    // setTextInputs(makeup.map(() => ""));
    setSkinDescriptions(skin.map((item) => item.product_description || ""));
    setMakeupDescriptions(makeup.map((item) => item.product_description || ""));
  }, [skin, makeup]);
  
  const ReceiveSkin = (item) => {
    setSkin((prevSkin) => [...prevSkin, item]);
    console.log(skin);
    
  };
  
  const ReceiveMakeup = (item) => {
    setMakeup((prevMakeup) => [...prevMakeup, item]);
    console.log(makeup);

  };

  // 제거
  const RemoveSkin = (indexToRemove) => {
    setSkin((prevSkin) =>
      prevSkin.filter((_, index) => index !== indexToRemove)
    );
  };
  const RemoveMakeup = (indexToRemove) => {
    setMakeup((prevMakeup) =>
      prevMakeup.filter((_, index) => index !== indexToRemove)
    );
  };

  function extractData(inputString) {
    const splitData = inputString.split("</b>");
    return splitData[splitData.length - 1]; // 마지막 부분 반환
  }
  const location = useLocation();
  const consultingId = location.state.value.consultingId;
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  const handleSubmit = async () => {
    const baseurl = import.meta.env.VITE_APP_BASE_URL;
    console.log('s',skin)
    console.log('m',makeup)
    makeup.forEach(item => {
      item.product_name = extractData(item.product_name);
    });
    skin.forEach(item => {
      item.product_name = extractData(item.product_name);
    });
    console.log('sssss',skin)
    console.log('mmmmm',makeup)
    
    const data = {skincare_skin_state: `${skinCondition}`,
    skincare_solution: `${skincareSolution}`,
    skincare_morning: `${morningSkincareRoutine}`,
    skincare_night: `${eveningSkincareRoutine}`,
    makeup_facetype: `${faceType}`,
    makeup_facialexpression: `${faceMood}`,
    makeup_solution: `${makeupSolution}`,
    makeup_shading: `${shading}`,
    makeup_blusher: `${blusher}`,
    makeup_highlighting: `${highlighting}`,
    makeup_lipmakeup: `${lipMakeup}`,
    makeup_eyemakeup: `${eyeMakeup}`,
    makeup_skinmakeup: `${faceMakeup}`,
    hairstyle_haircolor: `${hairColor}`,
    hairstyle_hairstyle: `${hairStyle}`,
    hairstyle_solution: `${hairstyleSolution}`,
    product_list: [
      ...makeup.map((item) => ({
        product_purchase_link: item.product_purchase_link,
        product_name: item.product_name,
        product_image_uri: item.product_image_uri,
        product_description: item.product_description,
        recommended_product_type: "BEAUTY"
      })),
      ...skin.map((item) => ({
        product_purchase_link: item.product_purchase_link,
        product_name: item.product_name,
        product_image_uri: item.product_image_uri,
        product_description: item.product_description,
        recommended_product_type: "SKIN"
      })),
    ]}
    console.log(data)
    console.log(accessToken)
    try {
      // axios를 사용하여 서버로 데이터 전송
      const response = await axios.post(
        baseurl + `expert-opinion/save/${consultingId}`,data,config
      );

      navigate(`/`);
      console.log(response.data); // 성공적으로 데이터를 보낸 후 서버의 응답을 로그에 기록
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <Card>
      <ConsultingType />
      <ConsultingContent>
        <H2>스킨케어</H2>
        <InputSet>
          <H3>피부 상태 |</H3>
          <Put>
            <Input
              width="1175px"
              value={skinCondition}
              placeholder="피부상태를 입력하세요"
              onChange={(e) => handleInputChange(e, setSkinCondition)}
            />
          </Put>
        </InputSet>
        <Margin2 />
        {/* <hr /> */}
        <H3>전문가 솔루션</H3>
        <ReviewInput
          placeholder="솔루션을 입력해주세요"
          value={skincareSolution}
          onChange={(e) => handleInputChange(e, setSkincareSolution)}
        />
        <InputSet>
          <H3>아침 :</H3>
          <Put>
            <Input
              width="1215px"
              value={morningSkincareRoutine}
              placeholder="아침 스킨케어 루틴을 입력하세요"
              onChange={(e) => handleInputChange(e, setMorningSkincareRoutine)}
            />
          </Put>
        </InputSet>
        <InputSet>
          <H3>저녁 :</H3>
          <Put>
            <Input
              width="1215px"
              value={eveningSkincareRoutine}
              placeholder="저녁 스킨케어 루틴을 입력하세요"
              onChange={(e) => handleInputChange(e, setEveningSkincareRoutine)}
            />
          </Put>
        </InputSet>
        <Margin2 />
        <ModalBox>
          <H3>
            <IoMdSearch />
          </H3>
          <Put>
            <Search onReceiveItem={ReceiveSkin} title={"스킨케어"} />
          </Put>
        </ModalBox>
        {skin.map((item, index) => {
          const productName = extractData(item.product_name);

          return (
            <FaqAnswer key={index}>
              <Image src={item.product_image_uri} />
              <ContentsDiv>
                <NameDiv>{productName}</NameDiv>
                <TextInput
                  value={skindescriptions[index]}
                  onChange={(e) => skinDescriptionChange(index, e.target.value)}
                />
              </ContentsDiv>
              <Close onClick={() => RemoveSkin(index)} />
            </FaqAnswer>
          );
        })}
        <Margin2 />
        <H2>메이크업</H2>
        <InputSet>
          <H3>얼굴 유형 |</H3>
          <Put>
            <Input
              width="1175px"
              value={faceType}
              onChange={(e) => handleInputChange(e, setFaceType)}
              placeholder="얼굴 유형을 입력하세요"
            />
          </Put>
        </InputSet>
        <InputSet>
          <H3>얼굴 분위기 |</H3>
          <Put>
            <Input
              width={"1160px"}
              value={faceMood}
              placeholder="얼굴 분위기를 입력하세요"
              onChange={(e) => handleInputChange(e, setFaceMood)}
            />
          </Put>
        </InputSet>
        <H3>전문가 솔루션</H3>
        <ReviewInput
          value={makeupSolution}
          placeholder="솔루션을 입력해주세요"
          onChange={(e) => handleInputChange(e, setMakeupSolution)}
        />
        <InputSet>
          <H3>피부 메이크업 :</H3>
          <Put>
            <Input
              width="1140px"
              value={faceMakeup}
              placeholder="방법을 입력하세요"
              onChange={(e) => handleInputChange(e, setFaceMakeup)}
            />
          </Put>
        </InputSet>
        <InputSet>
          <H3>아이 메이크업 :</H3>
          <Put>
            <Input
              width={"1140px"}
              value={eyeMakeup}
              placeholder="방법을 입력하세요"
              onChange={(e) => handleInputChange(e, setEyeMakeup)}
            />
          </Put>
        </InputSet>
        <InputSet>
          <H3>립 메이크업 :</H3>
          <Put>
            <Input
              width="1160px"
              value={lipMakeup}
              placeholder="방법을 입력하세요"
              onChange={(e) => handleInputChange(e, setLipMakeup)}
            />
          </Put>
        </InputSet>
        <InputSet>
          <H3>블러셔 :</H3>
          <Put>
            <Input
              width="1200px"
              value={blusher}
              placeholder="방법을 입력하세요"
              onChange={(e) => handleInputChange(e, setBlusher)}
            />
          </Put>
        </InputSet>
        <InputSet>
          <H3>쉐이딩 :</H3>
          <Put>
            <Input
              width="1200px"
              value={shading}
              placeholder="방법을 입력하세요"
              onChange={(e) => handleInputChange(e, setShading)}
            />
          </Put>
        </InputSet>
        <InputSet>
          <H3>하이라이팅 :</H3>
          <Put>
            <Input
              width="1165px"
              value={highlighting}
              placeholder="방법을 입력하세요"
              onChange={(e) => handleInputChange(e, setHighlighting)}
            />
          </Put>
        </InputSet>
        <Margin2 />
        <ModalBox>
          <H3>
            <IoMdSearch />
          </H3>
          <Put>
            <Search onReceiveItem={ReceiveMakeup} title={"메이크업"} />
          </Put>
        </ModalBox>
        {makeup.map((item, index) => {
          const productName = extractData(item.product_name);
          return (
            <FaqAnswer key={index}>
              <Image src={item.product_image_uri} />
              <ContentsDiv>
                <NameDiv>{productName}</NameDiv>
                <TextInput
                  value={makeupdescriptions[index]}
                  onChange={(e) =>
                    makeupDescriptionChange(index, e.target.value)
                  }
                />
              </ContentsDiv>
              <Close onClick={() => RemoveMakeup(index)} />
            </FaqAnswer>
          );
        })}
        <Margin2 />
        <H2>헤어스타일</H2>
        <InputSet>
          <H3>헤어 컬러 |</H3>
          <Put>
            <Input
              width="1175px"
              value={hairColor}
              placeholder="헤어 컬러를 입력하세요"
              onChange={(e) => handleInputChange(e, setHairColor)}
            />
          </Put>
        </InputSet>
        <InputSet>
          <H3>헤어 스타일 |</H3>
          <Put>
            <Input
              width="1160px"
              value={hairStyle}
              placeholder="헤어 스타일을 입력하세요"
              onChange={(e) => handleInputChange(e, setHairStyle)}
            />
          </Put>
        </InputSet>
        <H3>전문가 솔루션</H3>
        <ReviewInput
          value={hairstyleSolution}
          placeholder="솔루션을 입력해주세요"
          onChange={(e) => handleInputChange(e, setHairstyleSolution)}
        />
        <Margin2 />
        <ButtonContainer>
          <MyButton onClick={handleSubmit}>제출하기</MyButton>
        </ButtonContainer>
        <Margin2 />
      </ConsultingContent>
    </Card>
  );
};

export default FinalresultInput;
