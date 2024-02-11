import baseAxios from 'axios';
import { useSelector } from 'react-redux';
// import { getToken } from './JWToken';

// export const baseURL = 'http://localhost:8080/v1/';
export const baseURL = 'http://i10c106.p.ssafy.io:8080/v1/';

// const { name, role, id, nickname, imageUrl, access_token } = useSelector(state => state.auth.logonUser)

// const token = access_token; // 여기에 액세스 토큰을 설정합니다.

const getToken = () => {
	const accessToken = useSelector(selectAccessToken);
	console.log('getoken' + accessToken);
	return accessToken;
};

const Axios = baseAxios.create({
	baseURL: baseURL,
	headers: {
		'Content-Type': 'application/json',
		// 'Authorization': `Bearer ${token}`,
	},
});

export const imgAxios = baseAxios.create({
	baseURL: baseURL,
	headers: {
		'Content-Type': 'multipart/form-data',
	},
});

Axios.interceptors.request.use((config) => {
	console.log('toooo' + getToken());
	if (getToken()) {
		config.headers.Authorization = `Bearer ${getToken()}`;
	}
	return config;
});

export default Axios;
