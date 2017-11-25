import {combineReducers} from 'redux'
import {State} from "../state";
import {threadReducer} from "./thread/reducer";

export const dataReducer = combineReducers<State>({
    threads: threadReducer,
})
