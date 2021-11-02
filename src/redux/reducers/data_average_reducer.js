import { ERROR_GET_DATA_AVERAGE, LOAD_DATA_AVERAGE, SUCCESS_GET_DATA_AVERAGE } from "../dataAverage/actionDataAverage";

const dataStateAverage = {
  isLoading: false,
  average: [],
  error: "",
};

/**
 * @param {object} state
 * @param {object} action
 * @returns a reducer to change state in store of redux in terms of type of action
 */

export const dataAverageReducer = (state = dataStateAverage, action) => {
  switch (action.type) {
    case LOAD_DATA_AVERAGE:
      return {
        ...state,
        isLoading: true,
      };

    case SUCCESS_GET_DATA_AVERAGE:
      return {
        ...state,
        isLoading: false,
        average: action.payload,
        error: "",
      };
    case ERROR_GET_DATA_AVERAGE:
      return {
        ...state,
        isLoading: false,
        average: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
