import {State} from './state'
import {combineReducers} from 'redux'
import {dataReducer} from "./data/reducer";
import {servicesReducer} from "./services/reducer";

export const rootReducer = combineReducers<State>({
    data: dataReducer,
    services: servicesReducer
})
