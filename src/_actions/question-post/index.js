import { PostService } from '../../_services/post';
import {
    FETCH_MANY_QUESTION_POSTS,
    FETCH_ONE_QUESTION_POST
} from './type';

export const fetchManyQuestionPosts = (index, size) => async (dispatch) => {
    var result = await PostService.getManyQuestionPosts(index, size);
    if(result){
        dispatch({
            type : FETCH_MANY_QUESTION_POSTS,
            questionPosts : result.questionPosts,
            count : result.count
        });
    }
}

