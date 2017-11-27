import {State} from './state'
import {combineReducers} from 'redux'
import {dataReducer} from "./data/reducer";
<<<<<<< HEAD
import {servicesReducer} from "./services/reducer";

export const rootReducer = combineReducers<State>({
    data: dataReducer,
    services: servicesReducer
=======
import {serviceReducer} from "./services/reducer";

export const rootReducer = combineReducers<State>({
    data: dataReducer,
    service: serviceReducer
>>>>>>> 8de36131c2ce8bce365bf05eb64fffe3aa304605
})
