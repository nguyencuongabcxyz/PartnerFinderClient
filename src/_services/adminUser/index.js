import apiClient from '../../interceptor';

const getAllUsers = async (index, size) => {
    var response = await apiClient.get(`/users/admin?index=${index}&&size=${size}`);
    return response.data;
}

const search = async (pattern) => {
    var response = await apiClient.get(`/users/admin/search?pattern=${pattern}`);
    return response.data;
}

const activeUser = async (userId) => {
    var response = await apiClient.put(`/users/active?userId=${userId}`);
    return response.data;
}

const blockUser = async (userId) => {
    var response = await apiClient.put(`/users/block?userId=${userId}`);
    return response.data;
}


export const AdminUserService = {
    getAllUsers,
    search,
    activeUser,
    blockUser
}

