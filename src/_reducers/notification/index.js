import {
    FETCH_ALL_NOTIFICATIONS,
    REMOVE_ONE_NOTIFICATION,
    MARK_VIEW_NOTIFICATION
  } from "../../_actions/notification/type";
  
  const INITIAL_STATE = {
    notifications: [],
  };
  
  export default (state = INITIAL_STATE, action) => {
    const currentNotifications = state.notifications;  
    switch (action.type) {
      case FETCH_ALL_NOTIFICATIONS:
        return {
          ...state,
          notifications: action.notifications,
        };
      case REMOVE_ONE_NOTIFICATION:
        return {
          ...state,
          notifications: currentNotifications.filter(e => e.id !== action.id)
        };
      case MARK_VIEW_NOTIFICATION:
        currentNotifications[action.notification.id] = action.notification;
        return {
          ...state,
          notifications: currentNotifications,
        };
      default:
        return state;
    }
  };
  