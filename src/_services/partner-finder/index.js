import apiClient from '../../interceptor';

const getMany = async (index, size) => {
    const response = await apiClient.get(`/findingpartnerusers/?index=${index}&&size=${size}`);
    return response.data;
}

const searchByLocation = async (location) => {
    const response = await apiClient.get(`/findingpartnerusers/search?location=${location}`);
    return response.data;
} 

export const PartnerFinderService = {
    getMany,
    searchByLocation,
}
