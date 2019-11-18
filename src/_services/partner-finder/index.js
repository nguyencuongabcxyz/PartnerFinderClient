import apiClient from '../../interceptor';

const getMany = async (index, size, location, level) => {
    const response = await apiClient.get(`/partnerFinders?location=${location}&&level=${level}&&index=${index}&&size=${size}`);
    return response.data;
}

export const PartnerFinderService = {
    getMany
}
