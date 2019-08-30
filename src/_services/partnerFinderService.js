import axios from "axios";
import history from '../history';

const partnerFinder = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/findingpartnerusers`
});

const getMany = async (index, size) => {
    try {
        const response = await partnerFinder.get(`/${index}/${size}`);
        return response.data;
    } catch (e) {
        history.push('/servererror')
    }
}

const getManyWithFilter = async ({location, level}) => {
    try{
        const response = await partnerFinder.get('/filter')
        return response.data;
    } catch(e) {
        history.push('/servererror')
    }
}

export const partnerFinderService = {
    getMany,
    getManyWithFilter
}
