import styled from 'styled-components';
import { ButtonBox } from '../components/common/Button';

const Consulting1stepresultpage = styled.div`
	margin-top: -180px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MyButton1 = styled(ButtonBox)`
	background-color: #f28482;
	border-color: #f28482;
	border-radius: 300px;
	margin: 80px;
	width: 230.145px;
	height: 59.143px;
`;
const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Margin = styled.div`
	margin: 110px;
`;
const Margin2 = styled.div`
	margin-top: -10px;
`;

const H3 = styled.h3`
	font-family: 'Noto Sans KR';
	font-size: 25px;
	text-align: center;
`;

const P = styled.p`
	font-family: 'Noto Sans KR';
	font-size: 18px;
	color: gray;
	text-align: center;
`;

const CheckImg = styled.img`
	width: 65px;
	height: 65px;
`;

const StepImg = styled.img`
	margin-top: 30px;
	width: 675px;
	height: 79px;
`;

const Finish2step = () => {
	return (
		<Consulting1stepresultpage>
			<Margin />

			<CheckImg src='src/assets/checkcircle.png' alt='1차 설문 완료' />
			<H3>컨설팅을 위한 모든 테스트가 완료되었습니다.</H3>
			<P>
				키티공주님,
				<br />
				2024.01.18(목) 14:00에 <br />
				BIBI님과 만나요!
			</P>
			<P>
				마이페이지 - 마이컨설팅 - 바로가기를 클릭하시면 <br />
				화상 컨설팅에 접속됩니다.
			</P>
			<StepImg src='src/assets/2step_test.png' alt='1차 설문 완료, 2차 사진 테스트 진행 예정' />
			<Margin2 />

			<ButtonContainer>
				<MyButton1>홈으로 돌아가기</MyButton1>
			</ButtonContainer>
			<Margin2 />
		</Consulting1stepresultpage>
	);
};

export default Finish2step;
