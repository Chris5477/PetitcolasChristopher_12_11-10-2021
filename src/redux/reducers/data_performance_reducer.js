import { LOAD_DATA_PERFORMANCE, SUCCESS_GET_DATA_PERFORMANCE, ERROR_GET_DATA_PERFORMANCE } from "../dataPerformance/actionDataPerformance"

const dataStatePerformance = {
    isLoading : false,
    dataPerformance : {},
    error :"" 

}


export const dataPerformanceReducer = (state = dataStatePerformance, action) => {

    switch (action.type){
        case LOAD_DATA_PERFORMANCE:
            return{
                ...state,
                isLoading : true
            }
        case SUCCESS_GET_DATA_PERFORMANCE:
            return{
                ...state,
                isLoading : false,
                dataPerformance : action.payload,
                error : ""
            }
        case ERROR_GET_DATA_PERFORMANCE:
            return{
                ...state,
                isLoading: false,
                dataPerformance : {},
                error: action.payload

            }
        default : return state
    }
}