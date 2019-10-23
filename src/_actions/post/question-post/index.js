import { PostService } from '../../../_services/post';
import {
    CREATE_QUESTION_POST
} from './type';

import history from '../../../history';
export const createQuestionPost = (questionPost) => async (dispatch) => {
    var result = await PostService.createQuestionPost(questionPost);
    if (result){
        dispatch({
            type: CREATE_QUESTION_POST,
            questionPost: result,
        });
        history.push(`/question-detail/${result.id}`)
    }
}

// export const fetchOneQuestionPost = (id) => as
