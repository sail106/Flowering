import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonBox } from './common/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/joy/Avatar';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpertById } from '../store/ExpertsListSlice';

export const Title = styled.span`
	width: 177px;
	height: 63px;
	flex-grow: 0;
	font-size: 50px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #000;
	margin-bottom: 50px;
`;
export const Filed = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 100px;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0;
`;

export const BtnList = styled.div`
	width: 564px;
	height: 60px;
	flex-grow: 0;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 30px;
	padding: 0;
	margin-top: 30px; // BtnList 상단에 마진 추가
`;

export const OrderTable = styled.div`
	height: 151px;
	align-self: stretch;
	flex-grow: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
	gap: 20px;
	padding: 0;
`;
export const OrderSubTitleAndBar = styled.div`
	height: 39px;
	align-self: stretch;
	flex-grow: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	padding: 0;
	border-bottom: 1px solid #bcbcbc;
`;
export const OrderSubTitleBar = styled.div`
	height: 29px;
	align-self: stretch;
	flex-grow: 0;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 10px;
	padding: 8px;
`;
export const OrderObject = styled.span`
	height: 28px;
	align-self: stretch;
	flex-grow: 0;
	font-size: 18px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.4;
	letter-spacing: normal;
	text-align: left;
	color: #000;
`;
export const OrderUser = styled.div`
	height: 60px;
	align-self: stretch;
	flex-grow: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
	gap: 4px;
	padding: 8px;
`;
export const OrderUserInfo = styled.span`
	height: 28px;
	align-self: stretch;
	flex-grow: 0;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.4;
	letter-spacing: normal;
	text-align: left;
	color: #000;
`;
export const StyledTable = styled.table`
	width: 100%; // 필요에 따라 조정
	border-collapse: collapse; // 테이블 셀 간의 간격 없애기

	th,
	td {
		padding: 8px; // 셀 내부 여백
		text-align: left; // 텍스트 정렬
	}
	th {
		font-size: 18px;
	}

	// tbody의 첫 번째 행 위에 구분선 추가
	thead th {
		border-bottom: 1px solid #bcbcbc;
	}
`;

const Order = () => {
	const [selectedPaymentId, setSelectedPaymentId] = useState(null);
	const handlePaymentSelectionChange = (selectedId) => {
		setSelectedPaymentId(selectedId);
	};
	const navigate = useNavigate();
	const { selectedid } = useSelector((state) => state.auth);
	const [consultingId, setConsultingId] = useState(null);
	const { selectedTime, selectedDate } = useSelector((state) => state.selected);
	const { name, role, id, nickname, imageUrl, access_token, email } = useSelector((state) => state.auth.logonUser);
	const baseurl = import.meta.env.VITE_APP_BASE_URL;
	console.log(selectedDate + 'T' + selectedTime)
	const [expertData, setExpertData] = useState(null); // 응답 데이터를 저장할 상태
	const dispatch = useDispatch();

	useEffect(() => {
		if (selectedid) {
			// 컴포넌트가 마운트될 때와 selectedid가 변경될 때마다 fetchExpertById 액션을 호출
			dispatch(fetchExpertById(selectedid))
				.then((response) => {
					setExpertData(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [selectedid]); // selectedid 추가

	useEffect(() => {
		if (consultingId !== null) {
			// 여기서 다음 페이지로 이동
			navigate('/orderResult', { state: { value: { consultingId } } });
		}
	}, [consultingId]);

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

	useEffect(() => {
		const iamport = document.createElement('script');
		iamport.src = 'https://cdn.iamport.kr/v1/iamport.js';

		document.head.appendChild(iamport);
		return () => {
			document.head.removeChild(iamport);
		};
	}, []);

	const requestPay = () => {
		const formattedDateTime = `${selectedDate}T${selectedTime}`;
		console.log('Formatted DateTime:', formattedDateTime);
		const IMP = window?.IMP;
		IMP.init('imp03878765');

		IMP.request_pay(
			{
				// pg: ,
				pg: selectedPaymentId,
				pay_method: 'card',
				merchant_uid: new Date().getTime(),
				name: `${expertData.payload.user_response.nickname} 뷰티 솔루션 컨설팅`,
				amount: 89000,
				buyer_email: `${email}`,
				buyer_name: `${name}`
			},
			async (rsp) => {
				try {
					// console.log(rsp);
					// console.log(`${baseurl}verifyIamport/` + rsp.imp_uid);
					const { data } = await axios.post('https://i10c106.p.ssafy.io/api/verifyIamport/' + rsp.imp_uid );
					if (rsp.paid_amount === data.response.amount) {
						console.log('in if');
						try {
							const token = access_token; // 여기에 액세스 토큰을 설정합니다.
							const config = {
								headers: {
									Authorization: `Bearer ${token}`,
									'Content-Type': 'application/json',
									// 다른 필요한 헤더도 추가할 수 있습니다.
								},
							};

							const response = await axios.post(
								`${baseurl}consultings/create/${selectedid}`,
								{
									time: formattedDateTime, // 수정된 날짜 및 시간 사용
									title: `${name}님의 상담`,
								  },
								config
							);
							
								console.log(name)
							// 요청 성공 시 수행할 작업
							// console.log('Response:', response.data.data_body);
							setConsultingId(response.data.data_body.consultingid);
						} catch (error) {
							// console.error('Error :', error);
							alert(error.response.data.data_header.result_message);
							navigate('/')
						}
					} else {
						alert('결제 실패');
					}
				} catch (error) {
					console.log('Error while verifying payment:', error);
					alert('결제 실패');
				}
			}
		);
	};

	return (
		<Filed>
			<Content>
				<Title>ORDER</Title>
				<DataTable headers={headers} items={items} />
				<OrderUserTable userInfo={userInfo} />
				<OrderOptionTable onPaymentSelectionChange={handlePaymentSelectionChange} />
				<BtnList>
					<ButtonBox
						border={'#F28482'}
						background-color={'#ffffff'}
						color={'#F28482'}
						onClick={() => console.log('취소하기')}
					>
						취소하기
					</ButtonBox>
					<ButtonBox onClick={requestPay}>결제하기</ButtonBox>
				</BtnList>
			</Content>
		</Filed>
	);
};

export default Order;

export function DataTable({ headers, items = [] }) {
	if (!headers || !headers.length) {
		throw new Error('<DataTable /> headers is required.');
	}
	const headerKey = headers.map((header) => header.value);

	return (
		<StyledTable>
			<thead>
				<tr>
					{headers.map((header) => (
						<th key={header.text}>
							{header.text} {/* 컬럼명 바인딩 */}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{items.map((item, index) => (
					<tr key={index}>
						{headerKey.map((key) => (
							<td key={key + index}>
								{/* key 값에 따라 조건부 렌더링을 수행, item_price일 경우 원화 기호 추가 */}
								{key === 'item_price' ? (
									`₩ ${item[key]}` // item_price 값 앞에 원화 기호(₩) 추가
								) : key === 'consultant_img' ? (
									<img src={item[key]} alt='Consultant' style={{ width: '100px', height: 'auto' }} />
								) : (
									item[key]
								)}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</StyledTable>
	);
}

export function OrderUserTable({ userInfo }) {
	return (
		<OrderTable>
			<OrderSubTitleAndBar>
				<OrderSubTitleBar>
					<OrderObject>BUYER</OrderObject>
				</OrderSubTitleBar>
				<OrderUser>
					<OrderUserInfo>{userInfo.username}</OrderUserInfo>
					<OrderUserInfo>{userInfo.email}</OrderUserInfo>
				</OrderUser>
			</OrderSubTitleAndBar>
		</OrderTable>
	);
}

function OrderOptionTable({ onPaymentSelectionChange }) {
	const [selectedValue, setSelectedValue] = useState(null);

	const handleChange = (value) => {
		setSelectedValue(value);
		// 선택된 value를 기반으로 id 찾기 및 상위 컴포넌트로 ID 전달
		const selectedOption = [kakaopay, inicis].find((option) => option.value === value);
		const selectedId = selectedOption ? selectedOption.id : '';
		onPaymentSelectionChange(selectedId);
	};

	return (
		<OrderTable>
			<OrderSubTitleAndBar>
				<OrderSubTitleBar>
					<OrderObject>PAYMENT</OrderObject>
				</OrderSubTitleBar>

				<IconsRadio selectedValue={selectedValue} onChange={handleChange} />
			</OrderSubTitleAndBar>
		</OrderTable>
	);
}
const kakaopay = {
	type: 'radio',
	id: 'kakaopay.TC0ONETIME',
	value: '카카오페이',
	img: '../assets/kakaoFavicon.png',
};
const inicis = {
	type: 'radio',
	id: 'html5_inicis.INIBillTst',
	value: 'KG이니시스',
	img: 'https://www.inicis.com/wp-content/themes/inicis2020/assets/images/sub07-010301.png',
};

function IconsRadio({ selectedValue, onChange }) {
	// onChange 핸들러 수정
	const handleChange = (event) => {
		onChange(event.target.value); // 상위 컴포넌트의 handleChange 호출
	};

	return (
		<RadioGroup
			aria-label='platform'
			value={selectedValue}
			onChange={handleChange}
			overlay
			name='platform'
			sx={{
				flexDirection: 'row',
				gap: 2,
				[`& .${radioClasses.checked}`]: {
					[`& .${radioClasses.action}`]: {
						inset: -1,
						border: '3px solid',
						borderColor: 'primary.500',
					},
				},
				[`& .${radioClasses.radio}`]: {
					display: 'contents',
					'& > svg': {
						zIndex: 2,
						position: 'absolute',
						top: '-8px',
						right: '-8px',
						bgcolor: 'background.surface',
						borderRadius: '50%',
					},
				},
			}}
		>
			{[kakaopay, inicis].map((option) => (
				<Sheet
					key={option.id} // key 값을 option의 id로 변경
					variant='outlined'
					sx={{
						borderRadius: 'md',
						boxShadow: 'sm',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: 1.5,
						p: 2,
						minWidth: 120,
					}}
				>
					<Radio id={option.id} value={option.value} checkedIcon={<CheckCircleRoundedIcon />} />
					<Avatar variant='soft' size='sm' src={option.img} /> {/* src 속성을 option 객체에서 가져옴 */}
					<FormLabel htmlFor={option.id}>{option.value}</FormLabel>{' '}
					{/* htmlFor와 내부 텍스트를 option 객체의 속성으로 변경 */}
				</Sheet>
			))}
		</RadioGroup>
	);
}
