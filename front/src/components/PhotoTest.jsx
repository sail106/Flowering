import styled from "styled-components";
import { IoIosInformationCircle } from "react-icons/io";
import { Page } from "./common/Page";
import InfoBox from "./consultingresult/InfoBox";
import {ButtonBox} from "./common/Button";

const BackPage = styled(Page)`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.span`
  display: flex;
  font-family: "Noto Sans KR";
  font-size: 16px;
  margin-top: 5%;
  justify-content: center;
  color: #f28482;
`;

const Header2 = styled(Header)`
  display: flex;
  font-size: 48px;
  margin-top: 1%;
  justify-content: center;
  margin-bottom: 4%;
  color: black;
`;

const Margin = styled.div`
  margin-bottom: 10%;
`;

const Icon = styled(IoIosInformationCircle)`
  color: #f28482;
  font-size: 50px;
`;

const Header3 = styled(Header2)`
  font-size: 30px;
`;

const Header4 = styled(Header3)`
  font-size: 16px;
  text-align:center;
  margin-top:10%;
  margin-bottom:2%;
`;

const ImageDiv = styled.div`
  width:30%;
  height:50%;
`

const Image = styled.img`
  width: 100%;
  height:100%;
`

const Mybutton = styled(ButtonBox)`
  width:15%;
  margin-bottom:2%;
`

const PhotoTest = () => {
  return (
    <BackPage>
      <Header>2차 사진 촬영 테스트</Header>
      <Header2>2차 사진 촬영 AI 테스트</Header2>
      <Icon />
      <Header3>촬영 전 안내사항</Header3>
      <InfoBox
        title="자연광 활용하기"
        num={"01"}
        content={
          "가능하면 창문이나 실외에서 찍어서 자연광을 활용하세요. 얼굴의 세부 사항을 뚜렷하게 보여줍니다."
        }
      />
      <InfoBox
        title="얼굴 정면 맞추기"
        num={"02"}
        content={
          "카메라에 얼굴을 정면으로 맞추어 주세요. 얼굴의 여러 부분이 명확하게 나타날 수 있습니다."
        }
      />
      <InfoBox
        title="원 안에 얼굴 맞추기 "
        num={"03"}
        content={
          "화면에 표시된 원 안에 얼굴을 정확하게 맞추어 주세요. 원 밖으로 나가면 얼굴이 왜곡될 수 있습니다."
        }
      />
      <InfoBox
        title="헤어나 액세서리 제거하기"
        num={"04"}
        content={
          "얼굴 주변의 헤어나 액세서리를 제거하여 얼굴의 특징을 명확하게 나타내세요."
        }
      />
      <InfoBox
        title="고해상도 카메라 사용하기"
        num={"05"}
        content={"가능한 고해상도 카메라를 사용하여 주세요."}
      />
      <InfoBox
        title="화장 최소화 또는 제거하기  "
        num={"06"}
        content={
          "화장을 최소화하거나 제거하여 얼굴의 본질을 뚜렷하게 나타내세요."
        }
      />
      <InfoBox
        title="고해상도 카메라 사용하기"
        num={"07"}
        content={"가능한 고해상도 카메라를 사용하여 주세요."}
      />
      <InfoBox
        title="정적 표정 유지하기 "
        num={"08"}
        content={
          <>
        사진을 찍을 때는 정적인 표정을 유지하세요. <br/>
        웃거나 다양한 표정을 내면 AI가 정확한 피부 타입을 분석하기 어려울 수 있습니다.
          </>
      }
      />
      <Header4>
        원 안에 얼굴을 잘 맞춰주세요 <br></br>
        검은 선이 붉은 선으로 바뀌면 촬영이 가능합니다
      </Header4>
      <ImageDiv>
        <Image src="src/assets/phototest.png" alt="test" />
      </ImageDiv>
      <Mybutton>촬영하기</Mybutton>
      <Mybutton>결과 보기</Mybutton>
    </BackPage>
  );
};

export default PhotoTest;
