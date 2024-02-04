import React from 'react';
import styled from 'styled-components';
import ImageCutter from './ImageCutter';

const PageTitle = styled.div`
	font-family: 'Noto Sans KR';
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
`;

const FaceContentPart = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const FaceImageBox = styled.div`
	width: 258px;
	align-items: center;
`;

const FaceContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 527px;
`;

const FaceContentTitle = styled.div`
	font-family: 'Noto Sans KR';
	font-size: 35px;
`;

const FaceContentDetail = styled.div`
	font-family: 'Noto Sans KR';
	font-size: 30px;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const SecondResultPage = () => {
	const data = {
		face_shape_data: {
			face_shape: 'TRIANGLE',
			x1: 194,
			y1: 54,
			x2: 279,
			y2: 265,
		},
		eye_data: {
			eyelid_direction: 'MIDDLE_EYE_LID',
			eyelid_width: 'PERFECT_EYE_LID',
			eyelid_size: 'PERFECT_EYES',
			x1: 146,
			y1: 158,
			x2: 218,
			y2: 146,
		},
		nose_data: {
			nose_size: 'MIDDLE_NOSE',
			alar_size: 'BIG_ALAR',
			x1: 185,
			y1: 118,
			x2: 225,
			y2: 203,
		},
		mouth_data: {
			mouth_size: 'SMALL_MOUTH',
			lip_ratio: 'UPPER_PERFECT',
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
			'https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/resize/416/quality/80/optimize',
	};

	const getFaceShapeLabel = (faceShape) => {
		switch (faceShape) {
			case 'TRIANGLE':
				return '역삼각형 얼굴';
			case 'LONG':
				return '계란형 얼굴';
			case 'RECTANGLE':
				return '각진 얼굴';
			case 'ROUND':
				return '동그란 얼굴';
			default:
				return '알 수 없음';
		}
	};

	const getEyeDirection = (eyeDirection) => {
		switch (eyeDirection) {
			case 'DOWNSIDE_EYE_LID':
				return '쳐진눈매';
			case 'MIDDLE_EYE_LID':
				return '보통눈매';
			case 'UPSIDE_EYE_LID':
				return '올라간 눈매';
			default:
				return '알 수 없음';
		}
	};

	const getEyeSize = (eyeSize) => {
		switch (eyeSize) {
			case 'BIG_EYES':
				return '큰 눈';
			case 'PERFECT_EYES':
				return '중간 눈';
			case 'SMALL_EYES':
				return '작은 눈';
			default:
				return '알 수 없음';
		}
	};

	const getEyeWidth = (eyeWidth) => {
		switch (eyeWidth) {
			case 'LONG_EYE_LID':
				return '긴 눈매';
			case 'PERFECT_EYE_LID':
				return '완벽한 눈매';
			case 'SHORT_EYE_LID':
				return '짧은 눈매';
			default:
				return '알 수 없음';
		}
	};

	const getNoseSize = (noseSize) => {
		switch (noseSize) {
			case 'BIG_NOSE':
				return '큰 코';
			case 'MIDDLE_NOSE':
				return '보통 코';
			case 'SMALL_NOSE':
				return '작은 코';
			default:
				return '알 수 없음';
		}
	};

	const getAlarSize = (alarSize) => {
		switch (alarSize) {
			case 'BIG_ALAR':
				return '넓은 콧볼';
			case 'PERFECT_ALAR':
				return '보통 콧볼';
			case 'SMALL_ALAR':
				return '좁은 콧볼';
			default:
				return '알 수 없음';
		}
	};

	const getMouthSize = (mouthSize) => {
		switch (mouthSize) {
			case 'BIG_MOUTH':
				return '큰 입';
			case 'MIDDLE_MOUTH':
				return '중간 입';
			case 'SMALL_MOUTH':
				return '작은 입';
			default:
				return '알 수 없음';
		}
	};

	const getLipRatio = (lipRatio) => {
		switch (lipRatio) {
			case 'UPPER_BIG':
				return '윗 입술이 두꺼움';
			case 'UPPER_PERFECT':
				return '완벽한 입술 비율';
			case 'UPPER_SMALL':
				return '아랫 입술이 두꺼움';
			default:
				return '알 수 없음';
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
							<FaceContentDetail></FaceContentDetail>
						</FaceContent>
					</FaceContentPart>
					<FaceContentPart>
						<FaceImageBox>
							<ImageCutter // ImageCutter 컴포넌트를 사용합니다.
								imageUrl={data.analysis_result_photo_url}
								x1={data.eye_data.x1}
								y1={data.eye_data.y1}
								x2={data.eye_data.x2}
								y2={data.eye_data.y2}
							/>
							<ImageCutter // ImageCutter 컴포넌트를 사용합니다.
								imageUrl='src\assets\BIBI.png'
								x1={data.eye_data.x1}
								y1={data.eye_data.y1}
								x2={data.eye_data.x2}
								y2={data.eye_data.y2}
							/>
						</FaceImageBox>
						<FaceContent>
							<FaceContentTitle>
								{getEyeDirection(data.eye_data.eyelid_direction)}|{getEyeSize(data.eye_data.eyelid_size)}|
								{getEyeWidth(data.eye_data.eyelid_width)}
							</FaceContentTitle>
							<FaceContentDetail></FaceContentDetail>
						</FaceContent>
					</FaceContentPart>
					<FaceContentPart>
						<FaceImageBox></FaceImageBox>
						<FaceContent>
							<FaceContentTitle>
								{getMouthSize(data.mouth_data.mouth_size)}|{getLipRatio(data.mouth_data.lip_ratio)}
							</FaceContentTitle>
							<FaceContentDetail></FaceContentDetail>
						</FaceContent>
					</FaceContentPart>
					<FaceContentPart>
						<FaceImageBox></FaceImageBox>
						<FaceContent>
							<FaceContentTitle>
								{getNoseSize(data.nose_data.nose_size)}|{getAlarSize(data.nose_data.alar_size)}
							</FaceContentTitle>
							<FaceContentDetail></FaceContentDetail>
						</FaceContent>
					</FaceContentPart>
				</FaceContentWrapper>
			</FaceContentLayout>
		</>
	);
};

export default SecondResultPage;
