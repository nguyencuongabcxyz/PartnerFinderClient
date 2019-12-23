import apiClient from '../../interceptor';

const addOne = async (report) => {
    console.log(report);
    const response = await apiClient.post('/reports', report);
    return response.data;
}

const fetchAll = async (index, size) => {
    const response = await apiClient.get('/reports');
    return response.data;
}

const deleteOne = async (id) => {
    const response = await apiClient.delete(`/reports/${id}`);
    return response.data;
}

export const ReportService = {
    addOne,
    fetchAll,
    deleteOne
}