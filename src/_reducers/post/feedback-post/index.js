import {
    CREATE_FEEDBACK_POST,
    FETCH_ONE_FEEDBACK_POST,
} from '../../../_actions/post/feedback-post/type';

const INITIAL_STATE = {
    feedbackPosts: {},
    count: 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CREATE_FEEDBACK_POST:
            return {
                ...state,
                feedbackPosts: { [action.feedbackPost.id]: action.feedbackPost }
            };
        case FETCH_ONE_FEEDBACK_POST:
            return {
                ...state,
                feedbackPosts: { [action.feedbackPost.id]: action.feedbackPost }
            }
        default:
            return state;
    }
}