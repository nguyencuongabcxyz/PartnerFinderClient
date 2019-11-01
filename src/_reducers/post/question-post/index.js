import {
  CREATE_QUESTION_POST,
  FETCH_ONE_QUESTION_POST,
  UPDATE_QUESTION_POST_UPVOTE
} from "../../../_actions/post/question-post/type";

const INITIAL_STATE = {
  questionPosts: {},
  count: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_QUESTION_POST:
      return {
        ...state,
        questionPosts: { [action.questionPost.id]: action.questionPost }
      };
    case FETCH_ONE_QUESTION_POST:
      return {
        ...state,
        questionPosts: { [action.questionPost.id]: action.questionPost }
      };
    case UPDATE_QUESTION_POST_UPVOTE:
      return {
        ...state,
        questionPosts: { [action.questionPost.id]: action.questionPost }
      };
    default:
      return state;
  }
};
