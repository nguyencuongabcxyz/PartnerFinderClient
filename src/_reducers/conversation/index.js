import { FETCH_ALL_CONVERSATIONS } from "../../_actions/conversation/type";

const INITIAL_STATE = {
  conversations: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_CONVERSATIONS:
      return {
        ...state,
        conversations: action.conversations
      };
    default:
      return state;
  }
};
