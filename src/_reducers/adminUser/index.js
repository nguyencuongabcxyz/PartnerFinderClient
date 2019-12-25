import {
  FETCH_ADMIN_USERS,
  SEARCH_ADMIN_USERS,
  BLOCK_USER,
  ACTIVE_USER
} from "../../_actions/adminUser/type";

const INITIAL_STATE = {
  users: [],
  count: 0
};

export default (state = INITIAL_STATE, action) => {
  const currentUsers = state.users;
  switch (action.type) {
    case FETCH_ADMIN_USERS:
      return {
        ...state,
        users: action.users,
        count: action.count
      };
    case SEARCH_ADMIN_USERS:
      return {
        ...state,
        users: action.users
      };
    case BLOCK_USER:
      const newUsers1 = currentUsers.map(el =>
        el.userId === action.user.userId ? action.user : el
      );
      return {
        ...state,
        users: newUsers1
      };
    case ACTIVE_USER:
      const newUsers2 = currentUsers.map(el =>
        el.userId === action.user.userId ? action.user : el
      );
      return {
        ...state,
        users: newUsers2
      };
    default:
      return state;
  }
};
