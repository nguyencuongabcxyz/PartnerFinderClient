import { postService } from '../_services/postService';

export const fetchManyQuestionPosts = (index, size) => async (dispatch) => {
    var result = await postService.getManyQuestionPosts(index, size);
    if(result){
        dispatch({
            type : 'FETCH_MANY_QUESTION_POSTS',
            questionPosts : result.questionPosts,
            count : result.count
        });
    }
}

