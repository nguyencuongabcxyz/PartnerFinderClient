import axios from 'axios';


const auth = axios.create({
    baseURL: 'https://localhost:44348/api/auth'
});

const login = async (userName, password) => {
    var data = { userName, password };
    try {
        var response = await auth.post('/login', data);
    } catch (e) {
    }
    localStorage.setItem('token', response.data.token);
    return response.data.id;
}

const logout = () => {
    localStorage.removeItem('token');
}

const handleAuthentication = (response) => {
    if(response.status !== 200){
        
    }
}

export const authServices = {
    login,
    logout,
}