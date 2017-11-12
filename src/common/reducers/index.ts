import {State} from '../state'
import {combineReducers} from 'redux'
import {sessionReducer} from "../services/session/reducer";
import {threadReducer} from "../data/thread/reducer";

export const rootReducer = combineReducers<State>({
    threads: threadReducer,
    session: sessionReducer
})
