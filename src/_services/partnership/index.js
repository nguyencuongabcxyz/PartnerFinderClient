import apiClient from '../../interceptor';

const addOne = async (partnerId) => {
    const response = await apiClient.post(`/partnerships?partnerId=${partnerId}`);
    return response.data;
}

export const PartnershipService = {
    addOne,
}