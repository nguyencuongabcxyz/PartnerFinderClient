import { FETCH_MANY_QUESTION_POSTS,
 } from '../../_actions/question-post/type';

const INITIAL_STATE = {
    questionPosts : [],
    count : 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_MANY_QUESTION_POSTS:
            return {...state, questionPosts: action.questionPosts, count: action.count}
        default : 
        return state;
    }
}