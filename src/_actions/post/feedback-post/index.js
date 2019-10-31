import { PostService } from '../../../_services/post';

import {
    FETCH_ONE_FEEDBACK_POST,
    CREATE_FEEDBACK_POST
} from './type';

export const createFeedbackPost = (feedbackPost) => async (dispatch) => {
    var result = await PostService.createFeedbackPost(feedbackPost);
    if (result){
        dispatch({
            type: CREATE_FEEDBACK_POST,
            feedbackPost: result,
        });
    }
}

export const fetchOneFeedbackPost = (id) => async (dispatch) => {
    var result = await PostService.getFeedbackPost(id);
    if (result){
        dispatch({
            type: FETCH_ONE_FEEDBACK_POST,
            feedbackPost: result,
        });
    }
}