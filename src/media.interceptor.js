import axios from 'axios';
import history from './history'

const mediaApi = axios.create({
    baseURL: `${process.env.REACT_APP_MEDIA_SERVER_URL}`,
});

mediaApi.interceptors.request.use((config) => {
    //TODO: put token for authorization 
    return config;
}, (error) => {
    Promise.reject(error);
});

mediaApi.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (!error.response) {
        history.push('/servererror');
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

export default mediaApi;