import apiClient from '../../interceptor';

const addOne = async (partnerId) => {
    const response = await apiClient.post(`/partnerships?partnerId=${partnerId}`);
    return response.data;
}

const fetchAll = async () => {
    const response = await apiClient.get('/partnerships');
    return response.data;
}

const deleteOne = async (partnerId) => {
    const response = await apiClient.delete(`/partnerships?partnerId=${partnerId}`);
    return response.data;
}

export const PartnershipService = {
    addOne,
    fetchAll,
    deleteOne,
}