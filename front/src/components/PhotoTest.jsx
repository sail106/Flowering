import styled from "styled-components";
import { IoIosInformationCircle } from "react-icons/io";
import { Page } from "./common/Page";
import InfoBox from "./FinalResult/InfoBox";
import { ButtonBox } from "./common/Button";
import Webcam from "react-webcam";
import { useState, useRef, useCallback, useEffect } from "react";
import { S3 } from "aws-sdk";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner.jsx";

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
  font-size: 24px;
  text-align: center;
  margin-top: 10%;
  margin-bottom: 2%;
`;

const Mybutton = styled(ButtonBox)`
  width: 15%;
  margin-bottom: 2%;
  margin-top: 2%;
`;

const Overlay = styled.svg`
  position: absolute;
  top: 45%;
  left: 50%;
  width: 15%;
  height: 70%;
  border-radius: 50%;
  border: 3px solid #fff;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const WebcamStyled = styled(Webcam)`
  position: relative;
  width: 30%;
  z-index: 1;
  transform: scaleX(-1);
`;

const WebcamContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  text-align: center;
  padding-bottom: 27%;
`;

const PhotoTest = () => {
  const User = useSelector((state) => state.auth.logonUser);
  const accessToken = useSelector((state) => state.auth.logonUser.access_token);
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  const s3 = new S3({
    region: "ap-northeast-2",
    accessKeyId: import.meta.env.VITE_APP_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_APP_SECRET_KEY,
  });

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const base64Image = imageSrc.split(";base64,").pop();
    const byteCharacters = atob(base64Image);
    const byteArrays = [];

    for (let i = 0; i < byteCharacters.length; i++) {
      byteArrays.push(byteCharacters.charCodeAt(i));
    }

    const byteArray = new Uint8Array(byteArrays);
    const blob = new Blob([byteArray], { type: "image/jpeg" });

    const uploadParams = {
      Bucket: "escapefromfirebase",
      Key: `${User.id}_phototest`,
      Body: blob,
      ACL: "private",
    };

    s3.upload(uploadParams, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const url = data.Location;
        setImageUrl(`${url}?t=${Date.now()}`);
      }
    });
  }, [webcamRef, User]);
  const location = useLocation();
  const consultingId = location.state.value.consultingId;
  const [isLoading, setLoading] = useState(false); // loading state 초기화

  const fetchData = async () => {
    setLoading(true); // fetch 시작 전에 loading state를 true로 설정
    const data = {
      face_img_url: imageUrl,
    };
    const baseurl = import.meta.env.VITE_APP_BASE_URL;
    try {
      const response = await axios.post(
        baseurl + `analysis/save/${consultingId}`,
        data,
        config
      );
    } catch (error) {
      console.error("Error :", error);
    } finally {
      setLoading(false); // fetch가 끝나면 loading state를 false로 설정
      navigate(`/secondsurveyresult`, { state: { value: { consultingId } } });
    }
  };

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
            사진을 찍을 때는 정적인 표정을 유지하세요. <br />
            웃거나 다양한 표정을 내면 AI가 정확한 피부 타입을 분석하기 어려울 수
            있습니다.
          </>
        }
      />
      <Header4>원 안에 얼굴을 잘 맞춰주세요</Header4>

      <WebcamContainer>
        <WebcamStyled ref={webcamRef} screenshotFormat="image/jpeg" />

        <Overlay />
      </WebcamContainer>
      <Mybutton onClick={capture}>촬영하기</Mybutton>

      <div>
        {imageUrl && (
          <img key={imageUrl} src={imageUrl} alt="From Firebase Storage" />
        )}
      </div>
      <Mybutton onClick={fetchData}>
        {isLoading ? <LoadingSpinner /> : "결과 보기"}
      </Mybutton>
    </BackPage>
  );
};

export default PhotoTest;
