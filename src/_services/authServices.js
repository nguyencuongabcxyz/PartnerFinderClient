import axios from 'axios';


const auth = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/auth`
});

const login = async (userName, password) => {
    var data = { userName, password };
    try {
        var response = await auth.post("/login", data);
        return handleAuthentication(response);
    } catch (e) {
        return handleAuthentication(e.response);
    }

};



const register = async ({userName, password, email}) => {
    var data = {userName, password, email};
    try {
        var response = await auth.post("/register", data);
        return handleRegistration(response);
    }catch(e){
        return handleRegistration(e.response);
    }
}

const logout = () => {
    localStorage.removeItem('token');
}

const handleRegistration = response => {
    if(response.status !== 200) {
        return { registrationResult: 'failed' }
    }else{
        if(response.data.succeeded === false){
            return { registrationResult: 'duplicate'}
        }
        return { registrationResult: 'successfull'}
    }

}

const handleAuthentication = response => {

    switch (response.status) {
        case 200:
            localStorage.setItem('token', response.data.token);
            process.env.REACT_APP_TOKEN = response.data.token;
            return { isAuthenticated: true, statusCode: 200, userId: response.data.id };
        case 400:
            return { isAuthenticated: false, statusCode: 400, userId: null };
        case 403:
            return { isAuthenticated: false, statusCode: 403, userId: null };
        case 500:
            return { isAuthenticated: false, statusCode: 500, userId: null };
        default:
            return { isAuthenticated: false, statusCode: 404, userId: null };
    }
};

export const authServices = {
    login,
    logout,
    register
}