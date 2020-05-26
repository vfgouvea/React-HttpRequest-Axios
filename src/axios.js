import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'Auth Token From Instance';

instance.interceptors.request.use(request => {
	console.log(request);
	return request;//precisa retornar para nao bloquea-la
},error => {
	console.log(error);
	return Promise.reject(error);
});

export default instance;

// utilizado quando precisa utilizar varios axios diferentes pro app