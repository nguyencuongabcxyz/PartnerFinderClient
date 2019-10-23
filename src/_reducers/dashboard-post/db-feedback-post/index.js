import {FETCH_MANY_DB_FEEDBACK_POSTS} from '../../../_actions/dashboard-post/db-feedback-post/type';

const INITIAL_STATE = {
    feedbackPosts : [],
    count : 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_MANY_DB_FEEDBACK_POSTS:
            return {...state, feedbackPosts: action.feedbackPosts, count: action.count}
        default : 
        return state;
    }
}