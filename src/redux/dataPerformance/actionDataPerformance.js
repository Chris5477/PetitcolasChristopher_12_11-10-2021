import axios from "axios"

export const LOAD_DATA_PERFORMANCE = "LOAD_DATA_PERFORMANCE "
export const SUCCESS_GET_DATA_PERFORMANCE  = "SUCCES_GET_DATA_PERFORMANCE "
export const ERROR_GET_DATA_PERFORMANCE = "ERROR_GET_DATA_PERFORMANCE "

const loaderPerformance = () => {
    return{
        type : LOAD_DATA_PERFORMANCE
    }
}

const getDataSuccessPerformance = (success) => {
    return{
        type : SUCCESS_GET_DATA_PERFORMANCE,
        payload : success
    }
}

const errorGetDataPerformance = (error) => {
    return{
        type : ERROR_GET_DATA_PERFORMANCE,
        payload : error
    }
}

export const apiCallPerformance = (id) => {
    return dispatch => {
        dispatch(loaderPerformance())

        axios.get(`http://localhost:3000/user/${id}/Performance`)
        .then(res => dispatch(getDataSuccessPerformance(res.data)))
        .catch(err => dispatch(errorGetDataPerformance(err.message)))

    }
}