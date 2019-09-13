import apiClient from '../interceptor';

const getMany = async (index, size) => {
    const response = await apiClient.get(`/findingpartnerusers/?index=${index}&&size=${size}`);
    return response.data;
}

const getManyWithFilter = async ({level, location}, index, size) => {
    const response = await apiClient.get(`/findingpartnerusers/filter?location=${location}&&level=${level}&&index=${index}&&size=${size}`)
    return response.data;
}

export const partnerFinderService = {
    getMany,
    getManyWithFilter
}
