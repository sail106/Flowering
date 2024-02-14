import React from 'react';
import ProductCard from './ProductCard';

const ProductList = (props) => {
	const data = props.data;

	return (
		<>
			{data.map((product, index) => (
				<ProductCard key={index} product={product} />
			))}
		</>
	);
};

export default ProductList;
