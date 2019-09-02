import axios from 'axios';
import history from '../history';

const post = axios.create({
    baseURL : `${process.env.REACT_APP_BASE_URL}/posts`
});

const getMany = async (index, size) => {
    try{
    var response = await axios.get(`/questionposts/${index}/${size}`);
    return response.data;
    }catch(e){
        history.push('servererror');
    }
}

export const postService = {
    getMany
}