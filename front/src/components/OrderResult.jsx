import styled from 'styled-components';
import { useEffect } from 'react';
import { OrderUserTable, DataTable, Content, Filed, BtnList } from './OrderPage';
import { ButtonBox } from './common/Button';
import { useNavigate } from 'react-router-dom';
import success_animation from '../assets/success_animation.gif';
import processbar from '../assets/processbar.svg';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpertById } from '../store/ExpertsListSlice';
import React, { useState } from 'react';
const OrderResult = () => {
	const { name, role, id, nickname, imageUrl, access_token, email } = useSelector((state) => state.auth.logonUser);
	const location = useLocation();
	const consultingId = location.state.value.consultingId;
	const [expertData, setExpertData] = useState(null); // 응답 데이터를 저장할 상태
	const dispatch = useDispatch();
	const { selectedid } = useSelector((state) => state.auth);

	useEffect(() => {
		if (selectedid) {
			// 컴포넌트가 마운트될 때와 selectedid가 변경될 때마다 fetchExpertById 액션을 호출

			dispatch(fetchExpertById(selectedid))
				.then((response) => {
					setExpertData(response);
				})
				.catch((error) => {

				});
		}
	}, [selectedid]); // selectedid 추가

	const headers = [
		{
			text: 'EXPERT',
			value: 'consultant_img',
		},
		{
			text: 'PRODUCT',
			value: 'item_name',
		},
		{
			text: 'PRICE',
			value: 'item_price',
		},
	];
	const items =
		expertData && expertData.payload
			? [
					{
						consultant_img: `${expertData.payload.user_response.profile_img_url}`,
						item_name: `${expertData.payload.user_response.nickname} 뷰티 솔루션 컨설팅`,
						item_price: '89,000',
					},
			  ]
			: [];

	const userInfo = {
		username: `${name}`,
		email: `${email}`,
	};

	const navigate = useNavigate();

	const handleTestButtonClick = () => {
		// 이동하고자 하는 경로로 navigate 함수를 호출
		navigate('/firstsurvey', { state: { value: { consultingId } } });
	};
	const handleLaterButtonClick = () => {
		// 이동하고자 하는 경로로 navigate 함수를 호출
		navigate(`/mypage/${id}`);
	};
	return (
		<Filed>
			<Content>
				<CheckImg src={success_animation} alt='1차 설문 완료' />
				<H3>결제가 정상적으로 완료되었습니다.</H3>

				<P>
					진단 테스트로 이동하여 1차 설문 테스트와 2차 사진 테스트 진단을 완료하여 주세요.
					<br />
					2차 사진 테스트 진단을 완료하여 주세요. <br />
					<Collaps>* 테스트는 약 20분 소요됩니다.</Collaps>
				</P>
				<StepImg src={processbar} alt='1차 설문 완료, 2차 사진 테스트 진행 예정' />
				<Margin2 />
				<DataTable headers={headers} items={items} />
				<OrderUserTable userInfo={userInfo} />
				<BtnList>
					<ButtonBox border={'#F28482'} background-color={'#ffffff'} color={'#F28482'} onClick={handleLaterButtonClick}>
						나중에 하기
					</ButtonBox>
					<ButtonBox onClick={handleTestButtonClick}>진단 테스트 시작</ButtonBox>
				</BtnList>
			</Content>
		</Filed>
	);
};

export default OrderResult;

const Collaps = styled.span`
	color: #f28482;
	font-weight: bold;
	font-size: 14px;
`;

const Margin2 = styled.div`
	margin-top: 20px;
	margin-bottom: 100px;
`;

const H3 = styled.h3`
	font-family: 'Noto Sans KR';
	font-size: 25px;
	text-align: center;
`;

const P = styled.p`
	font-family: 'Noto Sans KR';
	font-size: 20px;
	color: gray;
	text-align: center;
`;

const CheckImg = styled.img`
	width: 165px;
	height: 165px;
`;

const StepImg = styled.img`
	margin-top: 30px;
	width: 675px;
	height: 79px;
`;
