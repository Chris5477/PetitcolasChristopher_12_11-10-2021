import axios from "axios"

export const LOAD_DATA_USER = "LOAD_DATA_USER "
export const SUCCESS_GET_DATA_USER  = "SUCCES_GET_DATA_USER "
export const ERROR_GET_DATA_USER = "ERROR_GET_DATA_USER "

const loaderUser = () => {
    return{
        type : LOAD_DATA_USER
    }
}

const getDataSuccessUser = (success) => {
    return{
        type : SUCCESS_GET_DATA_USER,
        payload : success
    }
}

const errorGetDataUser = (error) => {
    return{
        type : ERROR_GET_DATA_USER,
        payload : error
    }
}

export const apiCallUser = (id) => {
    return dispatch => {
        dispatch(loaderUser())

        axios.get(`http://localhost:3000/user/${id}`)
        .then(res => dispatch(getDataSuccessUser(res.data)))
        .catch(err => dispatch(errorGetDataUser(err.message)))

    }
}