import { PostService } from '../../../_services/post';
import {
    CREATE_QUESTION_POST,
    FETCH_ONE_QUESTION_POST,
    UPDATE_QUESTION_POST_UPVOTE
} from './type';

import history from '../../../history';
export const createQuestionPost = (questionPost) => async (dispatch) => {
    var result = await PostService.createQuestionPost(questionPost);
    if (result){
        dispatch({
            type: CREATE_QUESTION_POST,
            questionPost: result,
        });
        history.push(`/post-detail/${result.id}`)
    }
}

export const fetchOneQuestionPost = (id) => async (dispatch) => {
    var result = await PostService.getQuestionPost(id);
    if (result) {
        dispatch({
            type: FETCH_ONE_QUESTION_POST,
            questionPost: result,
        });
    }
}

export const updateQuestionPostUpVote = (id) => async (dispatch) => {
    var result = await PostService.updateQuestionPostUpVote(id);
    if (result) {
        dispatch({
            type: UPDATE_QUESTION_POST_UPVOTE,
            questionPost: result,
        });
    }
}
