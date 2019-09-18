import apiClient from '../interceptor';

const checkUserInfoAfterLogin = async (userId) => {
    var response = await apiClient.get(`users/${userId}/checkinfo`);
    return response.data;
}

const updateLevel = async (userId, data) => {
    var response = await apiClient.patch(`users/${userId}/updatelevel`, data);
    return response.data;
}

const getOne = async (userId) => {
    var response = await apiClient.get(`users/${userId}`);
    return response.data;
}

const updateInfo = async (userId, userInfo) => {
    var response = await apiClient.put(`users/${userId}`, userInfo);
    return response.data;
}

export const userService = {
    checkUserInfoAfterLogin,
    updateLevel,
    getOne,
    updateInfo
}