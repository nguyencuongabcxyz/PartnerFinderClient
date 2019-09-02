import { postService } from '../_services/postService';

export const fetchManyQuestionPosts = (index, size) => async (dispatch) => {
    var result = await postService.getMany(index, size);
    if(result){
        dispatch({
            type : 'FETCH_MANY_QUESTION_POST',
            questionPosts : result.questionPosts,
            count : result.count
        });
    }
}

