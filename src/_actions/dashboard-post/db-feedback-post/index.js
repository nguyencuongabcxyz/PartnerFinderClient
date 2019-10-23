import { PostService } from '../../../_services/post';
import {
    FETCH_MANY_DB_FEEDBACK_POSTS
} from './type';

export const fetchManyFeedbackPosts = (index, size) => async (dispatch) => {
    var result = await PostService.getManyFeedbackPosts(index, size);
    if(result){
        dispatch({
            type : FETCH_MANY_DB_FEEDBACK_POSTS,
            feedbackPosts : result.feedbackPosts,
            count : result.count
        });
    }
}

