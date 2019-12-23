import {
    FETCH_ALL_REPORTS,
    DELETE_ONE_REPORT
  } from "../../_actions/report/type";
  
  const INITIAL_STATE = {
    reports: [],
    count: 0
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_ALL_REPORTS:
        return {
          ...state,
          reports: action.reports,
          count: action.count
        };
      case DELETE_ONE_REPORT:
        return {
          ...state,
          reports: reports.filter(e => e.id !== action.id)
        };
      default:
        return state;
    }
  };
  