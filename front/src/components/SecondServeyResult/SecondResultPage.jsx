import React from "react";
import styled from "styled-components";
import ImageCutter from "./ImageCutter";
import Button from "../common/Button";

const PageTitle = styled.div`
  font-family: "Noto Sans KR";
  font-size: 38px;
  margin-top: 15px;
`;

const FaceContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FaceContentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FaceContentPart = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FaceImageBox = styled.div`
  display: flex;
  width: 25%;
  min-height: 360px;
  align-items: center;
  justify-content: center;
`;

const FaceContent = styled.div`
  width: 50%;
`;

const FaceContentTitle = styled.div`
  font-family: "Noto Sans KR";
  font-size: 35px;
  margin-bottom: 15px;
`;

const FaceContentDetail = styled.div`
  font-family: "Noto Sans KR";
  font-size: 30px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

const SkinContentTitle = styled.p`
  font-family: "Noto Sans KR";
  font-size: 25px;
  font-weight: normal;
  font-style: normal;
`;

const SkinSubject = styled.div`
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const SecondResultPage = () => {
  const data = {
    face_shape_data: {
      face_shape: "TRIANGLE",
      x1: 194,
      y1: 54,
      x2: 279,
      y2: 265,
    },
    eye_data: {
      eyelid_direction: "MIDDLE_EYE_LID",
      eyelid_width: "PERFECT_EYE_LID",
      eyelid_size: "PERFECT_EYES",
      x1: 146,
      y1: 158,
      x2: 218,
      y2: 146,
    },
    nose_data: {
      nose_size: "MIDDLE_NOSE",
      alar_size: "BIG_ALAR",
      x1: 185,
      y1: 118,
      x2: 225,
      y2: 203,
    },
    mouth_data: {
      mouth_size: "SMALL_MOUTH",
      lip_ratio: "UPPER_PERFECT",
      x1: 192,
      y1: 209,
      x2: 238,
      y2: 235,
    },
    skin_data: {
      analysis_result_pores: 0,
      analysis_result_glabella_wrinkle: 0,
      analysis_result_forehead_wrinkle: 0,
      analysis_result_acne: 0,
      analysis_result_dark_circles: 0,
    },
    analysis_result_photo_url:
      "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/resize/416/quality/80/optimize",
  };

  const getFaceShapeLabel = (faceShape) => {
    switch (faceShape) {
      case "TRIANGLE":
        return "역삼각형 얼굴";
      case "LONG":
        return "계란형 얼굴";
      case "RECTANGLE":
        return "각진 얼굴";
      case "ROUND":
        return "동그란 얼굴";
      default:
        return "알 수 없음";
    }
  };

  const getEyeDirection = (eyeDirection) => {
    switch (eyeDirection) {
      case "DOWNSIDE_EYE_LID":
        return "쳐진눈매";
      case "MIDDLE_EYE_LID":
        return "보통눈매";
      case "UPSIDE_EYE_LID":
        return "올라간 눈매";
      default:
        return "알 수 없음";
    }
  };

  const getEyeSize = (eyeSize) => {
    switch (eyeSize) {
      case "BIG_EYES":
        return "큰 눈";
      case "PERFECT_EYES":
        return "중간 눈";
      case "SMALL_EYES":
        return "작은 눈";
      default:
        return "알 수 없음";
    }
  };

  const getEyeWidth = (eyeWidth) => {
    switch (eyeWidth) {
      case "LONG_EYE_LID":
        return "긴 눈매";
      case "PERFECT_EYE_LID":
        return "완벽한 눈매";
      case "SHORT_EYE_LID":
        return "짧은 눈매";
      default:
        return "알 수 없음";
    }
  };

  const getNoseSize = (noseSize) => {
    switch (noseSize) {
      case "BIG_NOSE":
        return "큰 코";
      case "MIDDLE_NOSE":
        return "보통 코";
      case "SMALL_NOSE":
        return "작은 코";
      default:
        return "알 수 없음";
    }
  };

  const getAlarSize = (alarSize) => {
    switch (alarSize) {
      case "BIG_ALAR":
        return "넓은 콧볼";
      case "PERFECT_ALAR":
        return "보통 콧볼";
      case "SMALL_ALAR":
        return "좁은 콧볼";
      default:
        return "알 수 없음";
    }
  };

  const getMouthSize = (mouthSize) => {
    switch (mouthSize) {
      case "BIG_MOUTH":
        return "큰 입";
      case "MIDDLE_MOUTH":
        return "중간 입";
      case "SMALL_MOUTH":
        return "작은 입";
      default:
        return "알 수 없음";
    }
  };

  const getLipRatio = (lipRatio) => {
    switch (lipRatio) {
      case "UPPER_BIG":
        return "윗 입술이 두꺼움";
      case "UPPER_PERFECT":
        return "완벽한 입술 비율";
      case "UPPER_SMALL":
        return "아랫 입술이 두꺼움";
      default:
        return "알 수 없음";
    }
  };

  const getPore = (pore) => {
    if (pore === 0) return "모공 상태가 좋습니다.";
    else return "모공이 많이 늘어져있습니다.";
  };

  const getWrinkle = (glabella, forehead) => {
    if (glabella === 0 && forehead == 0) return "주름이 발견되지 않았습니다.";
    else if (glabella == 1 && forehead == 0) return "미간에서 주름이 발견 되었습니다.";
    else if (glabella == 0 && forehead == 1) return "이마에서 주름이 발견 되었습니다.";
    else return "이마와 미간에서 주름이 발견되엇습니다.";
  };

  const getAcne = (acne) => {
    if (acne === 0) return "여드름이 있는 편입니다.";
    else return "여드름이 발견되지 않았습니다.";
  };

  const getDarkCircle = (darkCircle) => {
    if (darkCircle == 0) return "다크서클이 발견되었습니다.";
    else return "다크서클이 발견되지 않았습니다.";
  };

  const faceShapeSubject = (faceShape) => {
    switch (faceShape) {
      case "TRIANGLE":
        return "역삼각형 얼굴은 이마가 넓고 턱이 좁은 형태를 가지고 있습니다. 이런 형태의 얼굴은 턱이 좁아 보일 수 있는데, 헤어스타일이나 메이크업으로 이를 보완할 수 있습니다. 턱 부분을 강조해줌으로써 균형을 맞출 수 있습니다. 또한 이마 부분은 넓어 보일 수 있으니, 작아 보이게 하는 것이 좋습니다. 머리카락을 이마 위로 올리거나 앞머리를 내림으로써 이를 조절할 수 있습니다.";
      case "LONG":
        return "계란형 얼굴은 이마가 약간 넓고, 양 볼 부분에서 점차 좁아져 턱으로 이어지는 형태를 가지고 있습니다. 이런 형태의 얼굴은 이미 균형이 잘 잡혀 있어 대체로 어떤 스타일의 화장이나 머리 스타일, 안경 등이 잘 어울립니다. 너무 강한 강조보다는 자연스럽게 강조하는 것이 좋습니다.";
      case "RECTANGLE":
        return "각진 얼굴은 이마, 볼, 턱이 각진 형태를 가지고 있습니다. 이런 형태의 얼굴은 부드러운 느낌을 주도록 화장하는 것이 좋습니다. 강한 선을 부드럽게 해주는 것이 포인트입니다. 둥근 형태로 메이크업을 하여 각진 부분을 부드럽게 만들어주거나, 볼 부분을 강조하여 얼굴의 중심을 잡아줍니다.";
      case "ROUND":
        return "동그란 얼굴은 가로 세로 길이가 거의 비슷하고, 양 볼 부분이 둥근 형태를 가지고 있습니다. 이런 형태의 얼굴은 각진 느낌을 주도록 메이크업하는 것이 좋습니다. 얼굴 윤곽을 강조하여 얼굴을 길게 보이도록 하고, 높은 코끝을 강조하여 얼굴을 좀 더 길게 보이도록 합니다.";
      default:
        return "알 수 없음";
    }
  };

  const eyeDirectionSubject = (eyeDirection) => {
    switch (eyeDirection) {
      case "DOWNSIDE_EYE_LID":
        return "쳐진 눈매는 눈꺼풀이나 눈의 외부 구석이 아래로 향하는 형태를 말합니다. 이런 눈매는 종종 피로한 느낌이나 우울한 인상을 줄 수 있습니다. 화장법으로는 눈꺼풀에 밝은 컬러의 아이섀도를 사용하여 눈을 활짝 보이게 하거나, 아이라인을 위로 살짝 올리는 등의 방법으로 눈매를 화사하게 만들 수 있습니다.";
      case "MIDDLE_EYE_LID":
        return "보통 눈매는 눈꺼풀이나 눈의 외부 구석이 수평으로 배치된 형태를 가지고 있습니다. 이런 눈매는 대체로 어떤 화장법이나 메이크업 스타일에도 잘 어울리며, 균형잡힌 느낌을 줍니다. 눈매를 강조하고 싶다면 컬러풀한 아이섀도를 사용하여 눈을 부각시키는 것이 좋습니다.";
      case "UPSIDE_EYE_LID":
        return "올라간 눈매는 눈꺼풀이나 눈의 외부 구석이 위쪽으로 향하는 형태를 가지고 있습니다. 이런 눈매는 주로 청순하고 귀여운 느낌을 줍니다. 화장법으로는 아이섀도를 사용하여 눈꺼풀을 강조하거나, 눈썹을 더욱 부각시켜 눈매를 더욱 돋보이게 할 수 있습니다.";
      default:
        return "알 수 없음";
    }
  };

  const eyeSizeSubject = (eyeSize) => {
    switch (eyeSize) {
      case "BIG_EYES":
        return "큰 눈은 얼굴에서 주목받는 특징 중 하나로, 눈이 상대적으로 크고 돋보이는 형태를 가지고 있습니다. 이런 눈은 종종 유치하고 귀여운 인상을 줄 수 있으며, 시선을 끄는 매력을 가지고 있습니다. 화장법으로는 눈을 강조하여 더 크게 보이도록 하는 것이 가능합니다. 밝은 컬러의 아이섀도를 사용하여 눈을 화사하게 만들거나, 눈썹을 깔끔하게 정돈하여 더욱 강조할 수 있습니다.";
      case "PERFECT_EYES":
        return "완벽한 눈은 대체로 비율이 잘 맞고 모양이 아름답게 구성된 형태를 의미합니다. 이런 눈은 얼굴 전체적으로 조화로운 느낌을 줄 수 있으며, 대체로 많은 사람들이 이런 눈을 갖기를 원합니다. 화장법으로는 눈을 강조하여 더욱 아름답게 보이도록 하는 것이 가능합니다. 아이라인이나 마스카라를 사용하여 눈을 더욱 돋보이게 할 수 있습니다.";
      case "SMALL_EYES":
        return "작은 눈은 눈의 크기가 상대적으로 작고, 얼굴에서 눈 부분이 주목받지 않는 형태를 가지고 있습니다. 이런 눈은 종종 어두운 인상을 줄 수 있으며, 눈이 더 크게 보이도록 하는 메이크업이 필요할 수 있습니다. 화장법으로는 눈을 크게 보이도록 하는 것이 중요합니다. 아이섀도를 사용하여 눈을 강조하거나, 눈썹을 깔끔하게 정돈하여 눈을 더 크게 보이도록 하는 것이 좋습니다.";
      default:
        return "알 수 없음";
    }
  };

  const eyeWidthSubject = (eyeWidth) => {
    switch (eyeWidth) {
      case "LONG_EYE_LID":
        return "긴 눈매는 눈이 상대적으로 길게 늘어져 있는 형태를 말합니다. 이런 눈꺼풀은 종종 우아하고 섹시한 느낌을 줄 수 있으며, 메이크업을 통해 눈을 더욱 강조할 수 있습니다.";
      case "PERFECT_EYE_LID":
        return "완벽한 눈꺼풀은 대체로 비율이 잘 맞고 모양이 아름답게 구성된 형태를 의미합니다. 이런 눈꺼풀은 얼굴 전체적으로 조화로운 느낌을 줄 수 있으며, 대체로 많은 사람들이 이런 눈을 갖기를 원합니다.";
      case "SHORT_EYE_LID":
        return "짧은 눈꺼풀은 눈이 상대적으로 짧고 작은 형태를 말합니다. 이런 눈꺼풀은 종종 귀여운 느낌을 줄 수 있으며, 메이크업을 통해 눈을 더욱 크게 보이도록 할 수 있습니다.";
      default:
        return "알 수 없음";
    }
  };

  const noseSizeSubject = (noseSize) => {
    switch (noseSize) {
      case "BIG_NOSE":
        return "큰 코를 가진 사람들은 코가 어느정도 돋보이는 특징을 가지고 있습니다. 이를 보정하기 위해선 코의 측면에 노란색 컨실러를 바르고 블렌딩하여 코를 작게 보이도록 합니다. 하이라이터를 코의 삼각대 부분에 발라 코를 좀 더 높아 보이게 할 수 있습니다.";
      case "MIDDLE_NOSE":
        return "보통 크기의 코는 전반적으로 균형이 잘 잡혀있는 특징을 가지고 있습니다. 따라서 특별한 보정이 필요하지 않을 수 있습니다. 하지만 코의 삼각대를 약간 강조하여 코를 조금 더 높아 보이게 만들 수 있습니다.";
      case "SMALL_NOSE":
        return "작은 코를 가진 사람들은 코가 어느정도 평면적으로 보이는 특징을 가지고 있습니다. 이를 보정하기 위해선 코의 뿌리에 어두운 컨실러를 바르고 블렌딩하여 코의 크기를 부풀려줍니다. 하이라이터를 코의 삼각대와 코 끝에 발라주어 코를 높아 보이게 만들 수 있습니다.";
      default:
        return "알 수 없음";
    }
  };

  const alarSizeSubject = (alarSize) => {
    switch (alarSize) {
      case "BIG_ALAR":
        return "넓은 콧볼을 가진 사람들은 코 측면이 상대적으로 넓은 특징을 가지고 있습니다. 이러한 경우, 코 측면을 가릴 수 있는 방법으로 노란색 컨실러를 사용하여 콧볼 양 옆을 가리고 블렌딩하여 콧볼을 좁게 보이도록 합니다. 콧볼의 중앙 부분에 하이라이터를 사용하여 콧볼을 더 높아 보이도록 할 수 있습니다.";
      case "PERFECT_ALAR":
        return "보통 크기의 콧볼은 얼굴 전체적인 균형을 유지하면서도 무난한 인상을 줍니다. 특별한 보정이 필요하지 않을 수 있으며, 코 삼각대를 약간 강조하여 코를 조금 더 높아 보이게 할 수 있습니다.";
      case "SMALL_ALAR":
        return "좁은 콧볼을 가진 사람들은 코 측면이 상대적으로 좁은 특징을 가지고 있습니다. 이러한 경우, 콧볼 양 옆에 노란색 컨실러를 바르고 블렌딩하여 콧볼을 넓게 보이도록 합니다. 코 삼각대와 코 끝에 하이라이터를 사용하여 콧볼을 높아 보이게 할 수 있습니다.";
      default:
        return "알 수 없음";
    }
  };

  const mouthSizeSubject = (mouthSize) => {
    switch (mouthSize) {
      case "BIG_MOUTH":
        return "큰 입을 가진 사람들은 입술 라인을 강조하는 것이 중요합니다. 입술 펜슬을 사용하여 입술 라인을 정확하게 그리고, 선명한 입술을 만들어 줄 수 있습니다. 밝은 컬러의 립스틱을 사용하여 입술을 더욱 돋보이게 할 수 있습니다.";
      case "MIDDLE_MOUTH":
        return "중간 크기의 입을 가진 사람들은 입술 라인을 부드럽게 그리는 것이 좋습니다. 입술 펜슬을 사용하여 입술의 자연스러운 곡선을 그려주고, 중간 크기의 입술을 부각시키는 것이 좋습니다. 중간 크기의 입술에는 다양한 컬러의 립스틱이 어울리며, 취향에 따라 선택할 수 있습니다.";
      case "SMALL_MOUTH":
        return "작은 입을 가진 사람들은 입술을 부풀리고 화려하게 만들어주는 것이 좋습니다. 입술 펜슬을 사용하여 입술의 윤곽을 강조하고, 밝은 컬러의 립스틱을 사용하여 입술을 돋보이게 할 수 있습니다. 입술 길이를 늘리는 효과를 내기 위해 입술 라인을 약간 넓게 그리는 것도 좋은 방법입니다.";
      default:
        return "알 수 없음";
    }
  };

  const lipRatioSubject = (lipRatio) => {
    switch (lipRatio) {
      case "UPPER_BIG":
        return "윗 입술이 상대적으로 두꺼운 특징을 가집니다. 이 경우, 입술 라인을 정확하게 그리고 입술의 중앙을 강조하여 입술에 광택을 줍니다.";
      case "UPPER_PERFECT":
        return "윗 입술과 아랫 입술의 라인이 균형을 이루는 특징을 가집니다. 이 경우, 입술 라인을 정확하게 그리고 입술의 모양을 조정하여 균형을 맞춥니다.";
      case "UPPER_SMALL":
        return "아랫 입술이 상대적으로 두꺼운 특징을 가집니다. 이 경우, 입술 라인을 정확하게 그리고 입술의 중앙을 강조하여 입술에 광택을 줍니다.";
      default:
        return "알 수 없음";
    }
  };

  return (
    <>
      <PageTitle>FACE</PageTitle>
      <FaceContentLayout>
        <FaceContentWrapper>
          <FaceContentPart>
            <FaceImageBox>
              <Image src={data.analysis_result_photo_url} />
            </FaceImageBox>
            <FaceContent>
              <FaceContentTitle>{getFaceShapeLabel(data.face_shape_data.face_shape)}</FaceContentTitle>
              <FaceContentDetail>{faceShapeSubject(data.face_shape_data.face_shape)}</FaceContentDetail>
            </FaceContent>
          </FaceContentPart>
          <FaceContentPart>
            <FaceImageBox>
              <ImageCutter
                imageUrl="src\assets\261143_20210325180240_500.jpg"
                topLeft={{ x: data.eye_data.x1, y: data.eye_data.y1 }}
                bottomLeft={{ x: data.eye_data.x2, y: data.eye_data.y2 }}
              />
            </FaceImageBox>
            <FaceContent>
              <FaceContentTitle>
                {getEyeDirection(data.eye_data.eyelid_direction)} | {getEyeSize(data.eye_data.eyelid_size)} | {getEyeWidth(data.eye_data.eyelid_width)}
              </FaceContentTitle>
              <FaceContentDetail>{eyeDirectionSubject(data.eye_data.eyelid_direction)}</FaceContentDetail>
            </FaceContent>
          </FaceContentPart>
          <FaceContentPart>
            <FaceImageBox>
              <ImageCutter
                imageUrl="src\assets\261143_20210325180240_500.jpg"
                topLeft={{ x: data.mouth_data.x1, y: data.mouth_data.y1 }}
                bottomLeft={{ x: data.mouth_data.x2, y: data.mouth_data.y2 }}
              />
            </FaceImageBox>
            <FaceContent>
              <FaceContentTitle>
                {getMouthSize(data.mouth_data.mouth_size)} | {getLipRatio(data.mouth_data.lip_ratio)}
              </FaceContentTitle>
              <FaceContentDetail></FaceContentDetail>
            </FaceContent>
          </FaceContentPart>
          <FaceContentPart>
            <FaceImageBox>
              <ImageCutter
                imageUrl="src\assets\261143_20210325180240_500.jpg"
                topLeft={{ x: data.nose_data.x1, y: data.nose_data.y1 }}
                bottomLeft={{ x: data.nose_data.x2, y: data.nose_data.y2 }}
              />
            </FaceImageBox>
            <FaceContent>
              <FaceContentTitle>
                {getNoseSize(data.nose_data.nose_size)} | {getAlarSize(data.nose_data.alar_size)}
              </FaceContentTitle>
              <FaceContentDetail></FaceContentDetail>
            </FaceContent>
          </FaceContentPart>
        </FaceContentWrapper>
      </FaceContentLayout>
      <PageTitle>SKIN</PageTitle>
      <FaceContentLayout>
        <FaceContentWrapper>
          <FaceContentPart>
            <FaceImageBox>
              <Image src={data.analysis_result_photo_url} />
            </FaceImageBox>
            <FaceContent>
              <SkinContentTitle>모공</SkinContentTitle>
              <SkinSubject>{getPore(data.skin_data.analysis_result_pores)}</SkinSubject>
              <SkinContentTitle>주름</SkinContentTitle>
              <SkinSubject>{getWrinkle(data.skin_data.analysis_result_glabella_wrinkle, data.skin_data.analysis_result_forehead_wrinkle)}</SkinSubject>
              <SkinContentTitle>여드름</SkinContentTitle>
              <SkinSubject>{getAcne(data.skin_data.analysis_result_acne)}</SkinSubject>
              <SkinContentTitle>다크서클</SkinContentTitle>
              <SkinSubject>{getDarkCircle(data.skin_data.analysis_result_dark_circles)}</SkinSubject>
            </FaceContent>
          </FaceContentPart>
          <ButtonBox>
            <Button>닫기</Button>
          </ButtonBox>
        </FaceContentWrapper>
      </FaceContentLayout>
    </>
  );
};

export default SecondResultPage;
