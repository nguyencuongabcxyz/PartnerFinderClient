const INITIAL_STATE = {
    feedbackPosts : [],
    count : 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'FETCH_MANY_FEEDBACK_POSTS':
            return {...state, feedbackPosts: action.feedbackPosts, count: action.count}
        default : 
        return state;
    }
}