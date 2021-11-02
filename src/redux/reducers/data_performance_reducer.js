import {
  LOAD_DATA_PERFORMANCE,
  SUCCESS_GET_DATA_PERFORMANCE,
  ERROR_GET_DATA_PERFORMANCE,
} from "../dataPerformance/actionDataPerformance";

const dataStatePerformance = {
  isLoading: false,
  performance: [],
  error: "",
};

/**
 * @param {object} state
 * @param {object} action
 * @returns a reducer to change state in store of redux in terms of type of action
 */

export const dataPerformanceReducer = (state = dataStatePerformance, action) => {
  switch (action.type) {
    case LOAD_DATA_PERFORMANCE:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_GET_DATA_PERFORMANCE:
      return {
        ...state,
        isLoading: false,
        performance: action.payload,
        error: "",
      };
    case ERROR_GET_DATA_PERFORMANCE:
      return {
        ...state,
        isLoading: false,
        performance: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
