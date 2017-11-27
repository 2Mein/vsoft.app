<<<<<<< HEAD
import {State} from '../state'
import {combineReducers} from 'redux'
import {sessionReducer} from "./session/reducer";

export const servicesReducer = combineReducers<State>({
    session: sessionReducer,
})
=======
import {combineReducers} from 'redux'
import {State} from "../state";
import {sessionReducer} from "./session/reducer";

export const serviceReducer = combineReducers<State>({
    session: sessionReducer,
})
>>>>>>> 8de36131c2ce8bce365bf05eb64fffe3aa304605
