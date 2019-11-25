import apiClient from '../../interceptor';

const getMany = async (index, size) => {
    const response = await apiClient.get(`/partnerrequests?index=${index}&&size=${size}`);
    return response.data;
}

const addOne = async (content, receiverId) => {
    const response = await apiClient.post("/partnerrequests", {content, receiverId});
    return response.data;
}

const removeOne = async (id) => {
    const response = await apiClient.delete(`/partnerrequests/${id}`);
    return response.data;
}

const acceptOne = async (id) => {
    const response = await apiClient.delete(`/partnerrequests/${id}/accept`);
    return response.data;
}

export const PartnerRequestService = {
    getMany,
    addOne,
    removeOne,
    acceptOne,
}
