import {State} from './state'
import {combineReducers} from 'redux'
import {dataReducer} from "./data/reducer";
import {serviceReducer} from "./services/reducer";

export const rootReducer = combineReducers<State>({
    data: dataReducer,
    service: serviceReducer
})
