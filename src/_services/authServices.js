import axios from 'axios';


const auth = axios.create({
    baseURL: 'https://localhost:44348/api/auth'
});

const login = async (userName, password) => {
  var data = { userName, password };
  try {
    var response = await auth.post("/login", data);
    console.log(response);
    return handleAuthentication(response);
  } catch (e) 
  {
      console.log(e);
  }             //TODO: add some logic after error occurs

};

const logout = () => {
    localStorage.removeItem('token');
}

const handleAuthentication = response => {
  if (response.status !== 200) {
    if (response.status === 400) {
      return {isSignedIn: false, statusCode: 400, userId: null};
    }
    if (response.status === 403) {
      return {isSignedIn: false, statusCode: 403, userId: null};
    }
  }
  localStorage.setItem('token', response.data.token);
  return {isSignedIn: true, statusCode: 200, userId: response.data.id};
};

export const authServices = {
    login,
    logout,
}