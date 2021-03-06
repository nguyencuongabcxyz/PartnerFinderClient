import {
    CREATE_FEEDBACK_POST,
    FETCH_ONE_FEEDBACK_POST,
    UPDATE_FEEDBACK_POST_UPVOTE,
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
        case UPDATE_FEEDBACK_POST_UPVOTE:
            return {
                ...state,
                feedbackPosts: { [action.feedbackPost.id]: action.feedbackPost }
            }
        default:
            return state;
    }
}