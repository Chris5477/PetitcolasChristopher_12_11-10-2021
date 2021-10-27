import axios from "axios"
export const LOAD_DATA_AVERAGE = "LOAD_DATA_AVERAGE"    
export const SUCCESS_GET_DATA_AVERAGE = "SUCCESS_GET_DATA_AVERAGE"    
export const ERROR_GET_DATA_AVERAGE = "ERROR_GET_DATA_AVERAGE"      

const loaderAverage = () => {
    return{
        type : LOAD_DATA_AVERAGE
    }
}

const getDataSuccessAverage = (succes) => {
    return{
        type : SUCCESS_GET_DATA_AVERAGE,
        payload : succes
    }
}

const errorGetDataAverage = (error) => {
    return{
        type : ERROR_GET_DATA_AVERAGE,
        payload : error
    }
}

export const apiCallAvarage = (id) => {
    return dispatch => {

        dispatch(loaderAverage())

        axios.get(`http://localhost:3000/user/${id}/average-sessions`)
        .then(res => dispatch(getDataSuccessAverage(res.data)))
        .catch(err => dispatch(errorGetDataAverage(err.message)))
    }
}
