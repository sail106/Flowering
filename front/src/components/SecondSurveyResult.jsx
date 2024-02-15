import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SecondResultPage from './SecondSurveyResult/SecondResultPage';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Button from './common/Button';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const DefaultPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-top: 100px;
	margin-bottom: 100px;
`;

const PageLayout = styled.div`
	width: 75%;
`;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 15%;
	margin-top: 50px;
	margin-bottom: 30px;
`;

const SecondServeyResult = () => {
	const baseurl = import.meta.env.VITE_APP_BASE_URL;
	const { name, role, id, nickname, imageUrl, access_token, email } = useSelector((state) => state.auth.logonUser);
	const [data, setData] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const consultingId = location.state.value.consultingId;

	const goEnd = () => {
		navigate('/secondsurveyend', { state: { value: { consultingId } } });
	};
	useEffect(() => {
		axios({
			method: 'GET',
			url: `${baseurl}analysis/find/${consultingId}`,
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		})
			.then((res) => {
				setData(res.data.data_body);
				console.log(res.data.data_body);
			})
			.catch((error) => {
				console.log(error);
				throw new Error(error);
			});
	}, [access_token]);

	return (
		<DefaultPage>
			<PageLayout>{data && <SecondResultPage data={data} />}</PageLayout>
			<ButtonBox>
				<Button onClick={goEnd}>닫기</Button>
			</ButtonBox>
		</DefaultPage>
	);
};

export default SecondServeyResult;
