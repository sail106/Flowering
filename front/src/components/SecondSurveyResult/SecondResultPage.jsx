import React from "react";
import styled from "styled-components";
import ImageCutter from "./ImageCutter";

const PageTitle = styled.div`
  font-family: "Noto Sans KR";
  font-size: 38px;
  margin-bottom: 15px;
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
  font-size: 30px;
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

const SecondResultPage = (props) => {
  const data = props.data;

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
        return "쳐진 눈매";
      case "MIDDLE_EYE_LID":
        return "이상적 눈매";
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
        return "이상적 크기";
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
        return "이상적 길이";
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
        return "이상적 크기";
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
        return "이상적";
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
        return "이상적 크기";
      case "SMALL_MOUTH":
        return "작은 입";
      default:
        return "알 수 없음";
    }
  };

  const getLipRatio = (lipRatio) => {
    switch (lipRatio) {
      case "UPPER_BIG":
        return "두꺼운 윗 입술";
      case "UPPER_PERFECT":
        return "이상적 비율";
      case "UPPER_SMALL":
        return "두꺼운 아랫 입술";
      default:
        return "알 수 없음";
    }
  };

  const getPore = (pore) => {
    if (pore === 0) return "모공 상태가 좋습니다.";
    else return "모공이 많이 늘어져있습니다.";
  };

  const getWrinkle = (glabella, forehead) => {
    if (glabella === 0 && forehead == 0) return "주름이 없는 편입니다.";
    else if (glabella == 1 && forehead == 0) return "미간의 주름이 많은 편입니다.";
    else if (glabella == 0 && forehead == 1) return "이마의 주름이 많은 편입니다.";
    else return "이마와 미간에서 주름이 많은 편입니다.";
  };

  const getAcne = (acne) => {
    if (acne === 0) return "여드름이 있는 편입니다.";
    else return "여드름이 없는 편입니다.";
  };

  const getDarkCircle = (darkCircle) => {
    if (darkCircle == 0) return "다크서클이 발견되었습니다.";
    else return "다크서클이 발견되지 않았습니다.";
  };

  return (
    <>
      <PageTitle>2차 카메라 테스트</PageTitle>
      <hr></hr>
      <PageTitle>FACE</PageTitle>
      <FaceContentLayout>
        <FaceContentWrapper>
          <FaceContentPart>
            <FaceImageBox>
              <Image src={data.analysis_result_photo_url} />
            </FaceImageBox>
            <FaceContent>
              <FaceContentTitle>#{getFaceShapeLabel(data.face_shape_data.face_shape)}</FaceContentTitle>
              <FaceContentDetail>{data.face_shape_data.face_content}</FaceContentDetail>
            </FaceContent>
          </FaceContentPart>
          <FaceContentPart>
            <FaceImageBox>
              <ImageCutter
                imageUrl={data.analysis_result_photo_url}
                topLeft={{ x: data.eye_data.x1, y: data.eye_data.y1 }}
                bottomLeft={{ x: data.eye_data.x2, y: data.eye_data.y2 }}
              />
            </FaceImageBox>
            <FaceContent>
              <FaceContentTitle>
                #{getEyeDirection(data.eye_data.eyelid_direction)} #{getEyeSize(data.eye_data.eyelid_size)} #{getEyeWidth(data.eye_data.eyelid_width)}{" "}
              </FaceContentTitle>
              <FaceContentDetail>{data.eye_data.eye_content}</FaceContentDetail>
            </FaceContent>
          </FaceContentPart>
          <FaceContentPart>
            <FaceImageBox>
              <ImageCutter
                imageUrl={data.analysis_result_photo_url}
                topLeft={{ x: data.mouth_data.x1, y: data.mouth_data.y1 }}
                bottomLeft={{ x: data.mouth_data.x2, y: data.mouth_data.y2 }}
              />
            </FaceImageBox>
            <FaceContent>
              <FaceContentTitle>
                #{getMouthSize(data.mouth_data.mouth_size)} #{getLipRatio(data.mouth_data.lip_ratio)}
              </FaceContentTitle>
              <FaceContentDetail>{data.mouth_data.mouth_content}</FaceContentDetail>
            </FaceContent>
          </FaceContentPart>
          <FaceContentPart>
            <FaceImageBox>
              <ImageCutter
                imageUrl={data.analysis_result_photo_url}
                topLeft={{ x: data.nose_data.x1, y: data.nose_data.y1 }}
                bottomLeft={{ x: data.nose_data.x2, y: data.nose_data.y2 }}
              />
            </FaceImageBox>
            <FaceContent>
              <FaceContentTitle>
                #{getNoseSize(data.nose_data.nose_size)} #{getAlarSize(data.nose_data.alar_size)}
              </FaceContentTitle>
              <FaceContentDetail>{data.nose_data.nose_content}</FaceContentDetail>
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
        </FaceContentWrapper>
      </FaceContentLayout>
    </>
  );
};

export default SecondResultPage;
