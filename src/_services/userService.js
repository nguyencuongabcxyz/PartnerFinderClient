import axios from 'axios';
import history from '../history';

const users = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/users`
});

const checkUserInfoAfterLogin = async (userId) => {
    try {
        var response = await users.get(`${userId}/checkinfo`);
        return response.data;
    } catch (e) {
        if(e.response.status === 500){
            history.push('/servererror')
        }
        return history.push('/notfound')
    }
}

export const userService = {
    checkUserInfoAfterLogin
}