import FirstSurveyResultPage from './FirstSurveyResult/FirstSurveyResultPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonBox } from './common/Button';
import { useLocation } from 'react-router-dom';

const Margin = styled.div`
	margin: 80px;
`;

const MyButton = styled(ButtonBox)`
	border-radius: 300px;
	margin: 120px;
	width: 230.145px;
	height: 59.143px;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const FirstSurveyResult = () => {
	const baseurl = import.meta.env.VITE_APP_BASE_URL;
	const { name, role, id, nickname, imageUrl, access_token, email } = useSelector((state) => state.auth.logonUser);
	const [data, setData] = useState(null);
	const location = useLocation();
	const consultingId = location.state.value.consultingId;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${baseurl}survey/find/${consultingId}`, {
					headers: {
						Authorization: `Bearer ${access_token}`,
					},
				});
				setData(response.data.data_body);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData(); // Initial fetch
	}, [access_token]); // Re-fetch when Token.access_token changes

	return (
		<>
			{data && <FirstSurveyResultPage data={data} />} {/* Render FirstSurveyResultPage only when data is available */}
			<Margin />
			<ButtonContainer>
				<Link to={{ pathname: `/firstsurveyend`, state: { value: { consultingId } } }} reloadDocument>
					<MyButton>닫 기</MyButton>
				</Link>
			</ButtonContainer>
			<Margin />
		</>
	);
};

export default FirstSurveyResult;
