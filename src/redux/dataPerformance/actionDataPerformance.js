import axios from "axios";

export const LOAD_DATA_PERFORMANCE = "LOAD_DATA_PERFORMANCE ";
export const SUCCESS_GET_DATA_PERFORMANCE = "SUCCES_GET_DATA_PERFORMANCE ";
export const ERROR_GET_DATA_PERFORMANCE = "ERROR_GET_DATA_PERFORMANCE ";

/**
 * @returns object with an action for reducer (redux)
 */

const loaderPerformance = () => {
  return {
    type: LOAD_DATA_PERFORMANCE,
  };
};

/**
 * @param {object} success
 * @returns response Api
 */

const getDataSuccessPerformance = (success) => {
  return {
    type: SUCCESS_GET_DATA_PERFORMANCE,
    payload: success,
  };
};

/**
 * @param {string} error
 * @returns a error message if api response is rejected
 */

const errorGetDataPerformance = (error) => {
  return {
    type: ERROR_GET_DATA_PERFORMANCE,
    payload: error,
  };
};

export const apiCallPerformance = (id) => {
  return (dispatch) => {
    dispatch(loaderPerformance());

    axios
      .get(`http://localhost:3000/user/${id}/Performance`)
      .then((res) => dispatch(getDataSuccessPerformance(res.data)))
      .catch((err) => dispatch(errorGetDataPerformance(err.message)));
  };
};
