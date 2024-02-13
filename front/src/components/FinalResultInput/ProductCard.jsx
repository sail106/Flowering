import styled from 'styled-components';

const P = styled.p`
	white-space: pre-line;
	font-family: 'Noto Sans KR';
	font-size: 17px;
`;

const H2 = styled.h2`
	font-family: 'Noto Sans KR';
	font-size: 22px;
	font-weight: 500;
`;

const IMG = styled.img`
	width: 148px;
	height: 148px;
	/* background-color: rgba(169, 169, 169, 0.1); */
	background-image: src= '../../assets/backskin.png';
`;

const Card = styled.div`
	display: flex;
`;
const Content = styled.div`
	margin-left: 30px;
	margin-top: -15px;
`;
const Margin = styled.div`
	margin-top: 40px;
`;
const ProductCard = (props) => {
	const product = props.product;
	return (
		<>
			<Margin />
			<Card>
				<IMG src={product.imgurl} alt='skin1' />
				<Content>
					<H2>{product.title}</H2>
					<P>{product.content}</P>
				</Content>
				<Margin />
			</Card>
		</>
	);
};

export default ProductCard;
