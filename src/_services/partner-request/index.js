import apiClient from '../../interceptor';

const getMany = async (index, size) => {
    const response = await apiClient.get(`/partnerrequests?index=${index}&&size=${size}`);
    return response.data;
}

const addOne = async (content, receiverId) => {
    await apiClient.post("/partnerrequests", {content, receiverId});
}

export const PartnerRequestService = {
    getMany,
    addOne
}
