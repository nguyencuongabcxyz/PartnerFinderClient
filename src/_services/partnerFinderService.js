import axios from "axios";
import history from '../history';

const partnerFinder = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/partnerFinders`
});

const getAll = async () => {
    try {
        const response = await partnerFinder.get('');
        return response.data;
    } catch (e) {
        history.push('/servererror')
    }
}

const getWithFilter = async ({age, location, level}) => {
    try{
        const response = await partnerFinder.get('/filter')
        return response.data;
    } catch(e) {
        history.push('/servererror')
    }
}
