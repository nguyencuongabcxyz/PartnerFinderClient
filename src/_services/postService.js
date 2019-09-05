import axios from 'axios';
import history from '../history';

const post = axios.create({
    baseURL : `${process.env.REACT_APP_BASE_URL}/posts`
});

const getManyQuestionPosts = async (index, size) => {
    try{
        var response = await post.get(`/questionposts?index=${index}&&size=${size}`);
        return response.data;
    }catch(e){
        history.push('servererror');
    }
}

const getManyFeedbackPosts = async (index, size) => {
    try{
        var response = await post.get(`/feedbackposts?index=${index}&&size=${size}`);
        return response.data;
    }catch(e){
        history.push('servererror');
    }
}

export const postService = {
    getManyQuestionPosts,
    getManyFeedbackPosts
}