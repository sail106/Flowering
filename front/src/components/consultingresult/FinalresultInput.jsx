import styled from "styled-components";
import Input from "../common/Input";
import { IoMdSearch } from "react-icons/io";

import { ButtonBox } from "../common/Button";

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
`;

const Consulting1stepresultpage = styled.div`
  width: 77%;
  height: auto;
  margin-top: 15%;
  margin-left: 10%;
`;

const Margin = styled.div`
  margin: 110px;
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

// const IoMdSearch1 = styled.div`
//   font-size: 25px;
// `;

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

const FinalresultInput = () => {
  return (
    <Consulting1stepresultpage>
      <Margin />

      <H2>스킨케어</H2>
      <InputSet>
        <H3>피부 상태 |</H3>
        <Put>
          <Input width={"1175px"} placeholder="피부상태를 입력하세요" />
        </Put>
      </InputSet>
      <Margin2 />
      {/* <hr /> */}
      <H3>전문가 솔루션</H3>
      <ReviewInput placeholder="솔루션을 입력해주세요" />

      <InputSet>
        <H3>아침 :</H3>
        <Put>
          <Input
            width={"1215px"}
            placeholder="아침 스킨케어 루틴을 입력하세요"
          />
        </Put>
      </InputSet>
      <InputSet>
        <H3>저녁 :</H3>
        <Put>
          <Input
            width={"1215px"}
            placeholder="저녁 스킨케어 루틴을 입력하세요"
          />
        </Put>
      </InputSet>
      <Margin2 />
      <InputSet>
        <H3>
          <IoMdSearch />
        </H3>
        <Put>
          <Input
            width={"1245px"}
            placeholder="스킨케어 추천 제품 이름을 입력하세요."
          />
        </Put>
      </InputSet>
      <Margin2 />
      <Margin />

      <H2>메이크업</H2>
      <InputSet>
        <H3>얼굴 유형 |</H3>
        <Put>
          <Input width={"1175px"} placeholder="얼굴 유형을 입력하세요" />
        </Put>
      </InputSet>
      <InputSet>
        <H3>얼굴 분위기 |</H3>
        <Put>
          <Input width={"1160px"} placeholder="얼굴 분위기를 입력하세요" />
        </Put>
      </InputSet>

      <H3>전문가 솔루션</H3>
      <ReviewInput placeholder="솔루션을 입력해주세요" />

      <InputSet>
        <H3>피부 메이크업 :</H3>
        <Put>
          <Input width={"1140px"} placeholder="방법을 입력하세요" />
        </Put>
      </InputSet>
      <InputSet>
        <H3>아이 메이크업 :</H3>
        <Put>
          <Input width={"1140px"} placeholder="방법을 입력하세요" />
        </Put>
      </InputSet>
      <InputSet>
        <H3>립 메이크업 :</H3>
        <Put>
          <Input width={"1160px"} placeholder="방법을 입력하세요" />
        </Put>
      </InputSet>
      <InputSet>
        <H3>블러셔 :</H3>
        <Put>
          <Input width={"1200px"} placeholder="방법을 입력하세요" />
        </Put>
      </InputSet>
      <InputSet>
        <H3>쉐이딩 :</H3>
        <Put>
          <Input width={"1200px"} placeholder="방법을 입력하세요" />
        </Put>
      </InputSet>
      <InputSet>
        <H3>하이라이팅 :</H3>
        <Put>
          <Input width={"1165px"} placeholder="방법을 입력하세요" />
        </Put>
      </InputSet>
      <Margin2 />
      <InputSet>
        <H3>
          <IoMdSearch />
        </H3>
        <Put>
          <Input
            width={"1245px"}
            placeholder="메이크업 추천 제품 이름을 입력하세요."
          />
        </Put>
      </InputSet>
      <Margin2 />
      <Margin />

      <H2>헤어스타일</H2>
      <InputSet>
        <H3>헤어 컬러 |</H3>
        <Put>
          <Input width={"1175px"} placeholder="헤어 컬러를 입력하세요" />
        </Put>
      </InputSet>
      <InputSet>
        <H3>헤어 스타일 |</H3>
        <Put>
          <Input width={"1160px"} placeholder="헤어 스타일을 입력하세요" />
        </Put>
      </InputSet>

      <H3>전문가 솔루션</H3>
      <ReviewInput placeholder="솔루션을 입력해주세요" />
      <Margin2 />
      <ButtonContainer>
        <MyButton1>임시저장</MyButton1>
        <MyButton>제출하기</MyButton>
      </ButtonContainer>
      <Margin2 />
    </Consulting1stepresultpage>
  );
};

export default FinalresultInput;
