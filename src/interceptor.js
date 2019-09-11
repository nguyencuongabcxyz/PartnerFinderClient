import axios from 'axios'

const apiClient = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});

//apiClient.interceptors.response.use({response})