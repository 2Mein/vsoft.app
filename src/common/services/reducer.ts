import {combineReducers} from 'redux'
import {State} from "../state";
import {sessionReducer} from "./session/reducer";

export const serviceReducer = combineReducers<State>({
    session: sessionReducer,
})
