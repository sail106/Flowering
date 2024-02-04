import React, { useRef, useEffect } from 'react';

const ImageCutter = ({ imageUrl, x1, y1, x2, y2 }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');

		const image = new Image();
		image.src = imageUrl;
		image.crossOrigin = 'Anonymous'; // CORS 정책 준수

		image.onload = () => {
			ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

			// 주어진 좌표로부터 직사각형 자르기
			const width = Math.abs(x2 - x1); // 음수 방지를 위해 절대값 사용
			const height = Math.abs(y2 - y1);
			const startX = Math.min(x1, x2);
			const startY = Math.min(y1, y2);

			// 이미지 데이터 가져오기
			const imageData = ctx.getImageData(startX, startY, width, height);

			// 자른 이미지를 다시 Canvas에 그리기
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			canvas.width = width;
			canvas.height = height;
			ctx.putImageData(imageData, 0, 0);
		};
	}, [imageUrl, x1, y1, x2, y2]);

	return <canvas ref={canvasRef} />;
};

export default ImageCutter;
