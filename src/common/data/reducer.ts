<<<<<<< HEAD
import {State} from "../state";
import {combineReducers} from "redux";
import {sessionReducer} from "../services/session/reducer";
import {threadReducer} from "./thread/reducer";

export const dataReducer = combineReducers<State>({
    threads: threadReducer
})
=======
import {combineReducers} from 'redux'
import {State} from "../state";
import {threadReducer} from "./thread/reducer";

export const dataReducer = combineReducers<State>({
    threads: threadReducer,
})
>>>>>>> 8de36131c2ce8bce365bf05eb64fffe3aa304605
