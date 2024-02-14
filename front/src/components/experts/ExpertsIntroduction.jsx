import Title from '../modify/Title';
import styled from 'styled-components';
import Experts from '../common/Experts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setExpertList } from '../../store/ExpertsListSlice';

const ExpertCard = styled.div`
	justify-content: center;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Margin = styled.div`
	margin-bottom: 130px;
`;
// 컴포넌트 정의
const ExpertsIntroduction = () => {
	const { access_token } = useSelector((state) => state.auth.logonUser);
	const [expertsData, setExpertsData] = useState([]);
	const [extraData, setextraData] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('ssss');
		const fetchData = async () => {
			try {
				const token = access_token; // 여기에 액세스 토큰을 설정합니다.
				const config = {
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				};

				const baseurl = import.meta.env.VITE_APP_BASE_URL;
				const response = await axios.get(baseurl + 'consultant/list', config);

				// 요청 성공 시 수행할 작업
				console.log('data_body  :', response.data.data_body);

				setExpertsData(response.data.data_body); // response.data를 expertsData에 저장
				dispatch(setExpertList(response.data.data_body));
			} catch (error) {
				console.error('Error :', error);
				// alert('결제 실패');
			}
		};

		fetchData(); // fetchData 함수 호출
	}, [access_token]);

	if (expertsData.length > 0) {
		console.log('succcc' + JSON.stringify(expertsData[1]));

		if (expertsData[1]?.hash_tag_responses.length ?? '' > 0) {
			console.log('succcc', expertsData[1].hash_tag_responses[0].workplace);
		}
	}

	return (
		<>
			<Title text={'Beauty consulting experts'} />

			<ExpertCard>
				{expertsData.map((expert) => (
					<Experts
						key={expert.consultant_id} // 각 전문가의 ID를 키로 사용
						id={expert.consultant_id} // 고유한 키 추가
						nickname={expert.user_response.nickname}
						text={expert.simple_introduce}
						rate={expert.star}
						ratenum={expert.reviewnum}
						tag1={expert.hash_tag_responses.length > 0 ? expert?.hash_tag_responses[0]?.workplace ?? '' : ''}
						tag2={expert.hash_tag_responses.length > 0 ? expert?.hash_tag_responses[1]?.workplace ?? '' : ''}
						imgsrc={expert.user_response.profile_img_url}
						width={'280px'}
						height={'405px'}
						path={'/expertsProfilecommon/' + expert.consultant_id}
					/>
				))}
			</ExpertCard>
			<Margin />
		</>
	);
};

export default ExpertsIntroduction;
