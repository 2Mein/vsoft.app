import { apiReducer } from './ApiReducer'
import { colorReducer } from './ColorReducer'
import { State } from '../state'
import { combineReducers } from 'redux'
import {threadReducer} from "./threadReducer";

export const rootReducer = combineReducers<State>( {
  time: apiReducer,
  colorConfig: colorReducer,
  threads: threadReducer
})
