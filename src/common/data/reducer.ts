import {State} from "../state";
import {combineReducers} from "redux";
import {sessionReducer} from "../services/session/reducer";
import {threadReducer} from "./thread/reducer";

export const dataReducer = combineReducers<State>({
    threads: threadReducer
})
