import axios from "axios";

export const LOAD_DATA_USER = "LOAD_DATA_USER ";
export const SUCCESS_GET_DATA_USER = "SUCCES_GET_DATA_USER ";
export const ERROR_GET_DATA_USER = "ERROR_GET_DATA_USER ";

/**
 * @returns object with an action for reducer (redux)
 */

const loaderUser = () => {
  return {
    type: LOAD_DATA_USER,
  };
};

/**
 * @param {object} success
 * @returns response Api
 */

const getDataSuccessUser = (success) => {
  return {
    type: SUCCESS_GET_DATA_USER,
    payload: success,
  };
};

/**
 * @param {string} error
 * @returns a error message if api response is rejected
 */

const errorGetDataUser = (error) => {
  return {
    type: ERROR_GET_DATA_USER,
    payload: error,
  };
};

/**
 * Method which process all cases of response call API ( loader , succes eand error)
 * @param {number} id
 * @returns an object in terms of id user
 */

export const apiCallUser = (id) => {
  return (dispatch) => {
    dispatch(loaderUser());

    axios
      .get(`http://localhost:3000/user/${id}`)
      .then((res) => dispatch(getDataSuccessUser(res.data)))
      .catch((err) => dispatch(errorGetDataUser(err.message)));
  };
};
