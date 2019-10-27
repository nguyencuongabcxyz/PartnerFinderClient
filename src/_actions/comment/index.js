import {
    FETCH_MANY_COMMENTS
} from './type';

import {
    CommentService
 } from '../../_services/comment'

export const fetchManyComments = (postId) => async (dispatch) => {
    const data = await CommentService.getManyByPostId(postId);
    if (data){
        dispatch({
            type: FETCH_MANY_COMMENTS,
            comments: data,
        })
    }
}