import axios from "axios";
import history from '../history';

const partnerFinder = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/findingpartnerusers`
});

const getMany = async (index, size) => {
    try {
        const response = await partnerFinder.get(`?index=${index}&&size=${size}`);
        return response.data;
    } catch (e) {
        history.push('/servererror')
    }
}

const getManyWithFilter = async ({level, location}, index, size) => {
    try{
        const response = await partnerFinder.get(`/filter?location=${location}&&level=${level}&&index=${index}&&size=${size}`)
        return response.data;
    } catch(e) {
        history.push('/servererror')
    }
}

export const partnerFinderService = {
    getMany,
    getManyWithFilter
}
