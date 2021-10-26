import axios from "axios"
export const LOAD_DATA_ACTIVITY = "LOAD_DATA_ACTIVITY "
export const SUCCESS_GET_DATA_ACTIVITY  = "SUCCES_GET_DATA_ACTIVITY "
export const ERROR_GET_DATA_ACTIVITY = "ERROR_GET_DATA_ACTIVITY "

const loaderActivity = () => {
    return{
        type : LOAD_DATA_ACTIVITY
    }
}

const getDataSuccessActivity = (success) => {
    return{
        type : SUCCESS_GET_DATA_ACTIVITY,
        payload : success
    }
}

const errorGetDataActivity = (error) => {
    return{
        type : ERROR_GET_DATA_ACTIVITY,
        payload : error
    }
}

export const apiCallActivity = () => {
    return dispatch => {
        dispatch(loaderActivity())

        axios.get("http://localhost:3000/user/12/activity")
        .then(res => dispatch(getDataSuccessActivity(res.data)))
        .catch(err => dispatch(errorGetDataActivity(err.message)))

    }
}