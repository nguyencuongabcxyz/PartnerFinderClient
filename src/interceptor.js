import axios from 'axios';
import history from './history'

const apiClient = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

apiClient.interceptors.request.use((config) => {
    config.headers["Authorization"] = "Bearer " + localStorage.getItem('token');
    return config;
}, (error) => {
    Promise.reject(error);
});

apiClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (!error.response) {
        history.push('/notfound');
    }else{
    switch (error.response.status) {
        case 401:
            localStorage.removeItem('token');
            history.push('/');
            break;
        case 403:
            localStorage.removeItem('token');
            history.push('/forbidden');
            break;
        case 500:
            history.push('/servererror');
            break;
        case 400:
            history.push('/notfound');
            console.log('abc');
            break;
        default:
            history.push('/notfound');
    }
}
    return error;
});

export default apiClient;