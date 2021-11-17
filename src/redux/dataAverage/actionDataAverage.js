import axios from "axios";
export const LOAD_DATA_AVERAGE = "LOAD_DATA_AVERAGE";
export const SUCCESS_GET_DATA_AVERAGE = "SUCCESS_GET_DATA_AVERAGE";
export const ERROR_GET_DATA_AVERAGE = "ERROR_GET_DATA_AVERAGE";

/**
 * @returns object with an action for reducer (redux)
 */

const loaderAverage = () => {
  return {
    type: LOAD_DATA_AVERAGE,
  };
};

/**
 * @param {object} success
 * @returns response Api
 */

const getDataSuccessAverage = (succes) => {
  return {
    type: SUCCESS_GET_DATA_AVERAGE,
    payload: succes,
  };
};

/**
 * @param {string} error
 * @returns a error message if api response is rejected
 */

const errorGetDataAverage = (error) => {
  return {
    type: ERROR_GET_DATA_AVERAGE,
    payload: error,
  };
};

export const apiCallAvarage = (id) => {
  return (dispatch) => {
    dispatch(loaderAverage());

    axios
      .get(`http://localhost:3000/user/${id}/average-sessions`)
      .then((res) => dispatch(getDataSuccessAverage(res.data)))
      .catch((err) => dispatch(errorGetDataAverage(err.message + "zz")));
  };
};
