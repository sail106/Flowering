import styled from 'styled-components';
import { IoIosInformationCircle } from 'react-icons/io';
import { Page } from './common/Page';
import InfoBox from './consultingresult/InfoBox';
import { ButtonBox } from './common/Button';
import Webcam from 'react-webcam';
import { useState, useRef, useCallback, useEffect } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { Link } from 'react-router-dom';
// import FirebaseConfig from "./common/FirebaseConfig";

const BackPage = styled(Page)`
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.span`
	display: flex;
	font-family: 'Noto Sans KR';
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
`;

const nextContainer = styled(Link)`
	width: 15%;
	margin-bottom: 2%;
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

const FirebaseConfig = {
	apiKey: import.meta.env.VITE_APP_API_KEY,
	authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_APP_PROJECT_ID,
	storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_APP_ID,
};

if (!getApps().length) {
	initializeApp(FirebaseConfig);
} else {
	getApp();
}
const storage = getStorage();

// const storage = getStorage();
const PhotoTest = () => {
	const [imageUrl, setImageUrl] = useState(null);

	useEffect(() => {
		const loadImage = async () => {
			try {
				const url = await getDownloadURL(ref(storage, 'image'));
				setImageUrl(url);
				console.log(url);
			} catch (error) {
				console.error(error);
			}
		};

		loadImage();
	}, []);
	const webcamRef = useRef(null);
	// const [isOverlayVisible, setIsOverlayVisible] = useState(true);
	const capture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		const base64Image = imageSrc.split(';base64,').pop();

		// 이미지를 Firebase Storage에 업로드
		let imageRef = ref(storage, 'images/imageNam');
		uploadString(imageRef, base64Image, 'base64', { contentType: 'image/jpg' })
			.then((snapshot) => {
				// 진행 상태를 보여주는 코드를 여기에 작성할 수 있습니다.
				getDownloadURL(snapshot.ref).then((downloadURL) => {
					// console.log('File available at', downloadURL);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, [webcamRef, storage]);
	return (
		<BackPage>
			<Header>2차 사진 촬영 테스트</Header>
			<Header2>2차 사진 촬영 AI 테스트</Header2>
			<Icon />
			<Header3>촬영 전 안내사항</Header3>
			<InfoBox
				title='자연광 활용하기'
				num={'01'}
				content={'가능하면 창문이나 실외에서 찍어서 자연광을 활용하세요. 얼굴의 세부 사항을 뚜렷하게 보여줍니다.'}
			/>
			<InfoBox
				title='얼굴 정면 맞추기'
				num={'02'}
				content={'카메라에 얼굴을 정면으로 맞추어 주세요. 얼굴의 여러 부분이 명확하게 나타날 수 있습니다.'}
			/>
			<InfoBox
				title='원 안에 얼굴 맞추기 '
				num={'03'}
				content={'화면에 표시된 원 안에 얼굴을 정확하게 맞추어 주세요. 원 밖으로 나가면 얼굴이 왜곡될 수 있습니다.'}
			/>
			<InfoBox
				title='헤어나 액세서리 제거하기'
				num={'04'}
				content={'얼굴 주변의 헤어나 액세서리를 제거하여 얼굴의 특징을 명확하게 나타내세요.'}
			/>
			<InfoBox title='고해상도 카메라 사용하기' num={'05'} content={'가능한 고해상도 카메라를 사용하여 주세요.'} />
			<InfoBox
				title='화장 최소화 또는 제거하기  '
				num={'06'}
				content={'화장을 최소화하거나 제거하여 얼굴의 본질을 뚜렷하게 나타내세요.'}
			/>
			<InfoBox title='고해상도 카메라 사용하기' num={'07'} content={'가능한 고해상도 카메라를 사용하여 주세요.'} />
			<InfoBox
				title='정적 표정 유지하기 '
				num={'08'}
				content={
					<>
						사진을 찍을 때는 정적인 표정을 유지하세요. <br />
						웃거나 다양한 표정을 내면 AI가 정확한 피부 타입을 분석하기 어려울 수 있습니다.
					</>
				}
			/>
			<Header4>원 안에 얼굴을 잘 맞춰주세요</Header4>

			<WebcamContainer>
				<WebcamStyled ref={webcamRef} screenshotFormat='image/jpeg' />

				<Overlay />
			</WebcamContainer>
			<Mybutton onClick={capture}>촬영하기</Mybutton>

			<Mybutton>결과 보기</Mybutton>

			<div>{imageUrl && <img src={imageUrl} alt='From Firebase Storage' />}</div>
		</BackPage>
	);
};

export default PhotoTest;
