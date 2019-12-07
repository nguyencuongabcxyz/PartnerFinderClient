import { FETCH_ALL_CONVERSATIONS } from "./type";

import { ConversationService } from "../../_services/conversation";

export const fetchManyConversations = () => async dispatch => {
  const data = await ConversationService.getAll();
  if (data) {
    dispatch({
      type: FETCH_ALL_CONVERSATIONS,
      conversations: data
    });
  }
};
