import {State} from '../state'
import {combineReducers} from 'redux'
import {sessionReducer} from "./session/reducer";

export const servicesReducer = combineReducers<State>({
    session: sessionReducer,
})