import { CREATE_QUESTION_POST
} from '../../../_actions/post/question-post/type';

const INITIAL_STATE = {
   questionPosts : {},
   count : 0
}

export default (state = INITIAL_STATE, action) => {
   switch(action.type){
       case CREATE_QUESTION_POST:
           return {...state, questionPosts: {[action.questionPost.id]: action.questionPost}}
       default : 
       return state;
   }
}