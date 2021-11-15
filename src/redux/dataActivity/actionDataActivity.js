import axios from "axios";
export const LOAD_DATA_ACTIVITY = "LOAD_DATA_ACTIVITY ";
export const SUCCESS_GET_DATA_ACTIVITY = "SUCCES_GET_DATA_ACTIVITY ";
export const ERROR_GET_DATA_ACTIVITY = "ERROR_GET_DATA_ACTIVITY ";

/**
 * @returns object with an action for reducer (redux)
 */

export let setErrorMsg = null

const loaderActivity = () => {
  return {
    type: LOAD_DATA_ACTIVITY,
  };
};

/**
 * @param {object} success
 * @returns response Api
 */

const getDataSuccessActivity = (success) => {
  return {
    type: SUCCESS_GET_DATA_ACTIVITY,
    payload: success,
  };
};

/**
 * @param {string} error
 * @returns a error message if api response is rejected
 */

const errorGetDataActivity = (error) => {
  return {
    type: ERROR_GET_DATA_ACTIVITY,
    payload: error,
  };
};

/**
 * Method which process all cases of response call API ( loader , succes eand error)
 * @param {number} id
 * @returns an object in terms of id user
 */

export const apiCallActivity = (id) => {
  return (dispatch) => {
    dispatch(loaderActivity());

    axios
      .get(`http://localhost:3000/user/${id}/activity`)
      .then((res) => dispatch(getDataSuccessActivity(res.data)))
      .catch((err) => {
        dispatch(errorGetDataActivity(err.message))
        setErrorMsg = err.message;
      })
  };
};
