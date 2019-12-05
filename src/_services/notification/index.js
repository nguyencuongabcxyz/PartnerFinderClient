import apiClient from '../../interceptor';

const getMany = async (index, size) => {
    const response = await apiClient.get(`/notifications?index=${index}&&size=${size}`);
    return response.data;
}

const getCount = async () => {
    const response = await apiClient.get("/notifications/count");
    return response.data;
}

const remove = async (id) => {
    const response = await apiClient.delete(`/notifications/${id}`);
    return response.data;
}

const markView = async(id) => {
    const response = await apiClient.post(`/notifications/${id}/mark-view`);
    return response.data;
}

export const NotificationService = {
    getMany,
    getCount,
    remove,
    markView,
}
