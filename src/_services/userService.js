import apiClient from '../interceptor';

const checkUserInfoAfterLogin = async () => {
    var response = await apiClient.get(`users/check-info`);
    return response.data;
}

const updateLevel = async (data) => {
    var response = await apiClient.patch(`users/update-level`, data);
    return response.data;
}

const getOne = async (userId) => {
    var response = await apiClient.get(`users/${userId}`);
    return response.data;
}

const updateInfo = async (userInfo) => {
    var response = await apiClient.put("users", userInfo);
    return response.data;
}

const updateMediaProfile = async (mediaProfile) => {
    var response = await apiClient.patch("users/update-media", mediaProfile);
    return response.data;
}

export const userService = {
    checkUserInfoAfterLogin,
    updateLevel,
    getOne,
    updateInfo,
    updateMediaProfile
}