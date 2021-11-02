import {
  LOAD_DATA_ACTIVITY,
  SUCCESS_GET_DATA_ACTIVITY,
  ERROR_GET_DATA_ACTIVITY,
} from "../dataActivity/actionDataActivity";

const dataStateActivity = {
  isLoading: false,
  activity: [],
  error: "",
};

/**
 * @param {object} state
 * @param {object} action
 * @returns a reducer to change state in store of redux in terms of type of action
 */

export const dataActivityReducer = (state = dataStateActivity, action) => {
  switch (action.type) {
    case LOAD_DATA_ACTIVITY:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_GET_DATA_ACTIVITY:
      return {
        ...state,
        isLoading: false,
        activity: action.payload,
        error: "",
      };
    case ERROR_GET_DATA_ACTIVITY:
      return {
        ...state,
        isLoading: false,
        activity: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
