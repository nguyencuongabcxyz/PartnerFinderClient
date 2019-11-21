import apiClient from '../../interceptor';

const getMany = async (index, size) => {
    const response = await apiClient.get(`/partnerrequests?index=${index}&&size=${size}`);
    return response.data;
}

export const PartnerRequestService = {
    getMany
}
