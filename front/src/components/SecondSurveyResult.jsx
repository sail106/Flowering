import styled from 'styled-components';
import SecondResultPage from './SecondServeyResult/SecondResultPage';

const DefaultPage = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

const PageLayout = styled.div`
	margin-top: 100px;
	width: 75%;
`;

const PageTitle = styled.div`
	font-family: 'Noto Sans KR';
	font-size: 38px;
	margin-bottom: 15px;
`;

const SecondServeyResult = () => {
	return (
		<>
			<DefaultPage>
				<PageLayout>
					<PageTitle>2차 카메라 테스트</PageTitle>
					<hr></hr>
					<SecondResultPage />
				</PageLayout>
			</DefaultPage>
		</>
	);
};

export default SecondServeyResult;
