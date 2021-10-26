import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { dataActivityReducer } from "./reducers/data_activity_reducer"
import { dataPerformanceReducer } from "./reducers/data_performance_reducer"
import { dataUserReducer } from "./reducers/data_user_reducer"
import { dataAverageReducer } from "./reducers/data_average_reducer"

const rootReducer = combineReducers({
    activity : dataActivityReducer,
    performance : dataPerformanceReducer,
    user : dataUserReducer,
    average : dataAverageReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


