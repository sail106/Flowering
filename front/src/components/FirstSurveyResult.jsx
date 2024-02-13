import FirstSurveyResultPage from './FirstSurveyResult/FirstSurveyResultPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const FirstSurveyResult = () => {
	const Token = useSelector((state) => state.auth.logonUser);
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://i10c106.p.ssafy.io/api/v1/survey/find/7', {
					headers: {
						Authorization: `Bearer ${Token.access_token}`,
					},
				});
				setData(response.data.data_body);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData(); // Initial fetch
	}, [Token.access_token]); // Re-fetch when Token.access_token changes

	return (
		<>
			{data && <FirstSurveyResultPage data={data} />} {/* Render FirstSurveyResultPage only when data is available */}
		</>
	);
};

export default FirstSurveyResult;
