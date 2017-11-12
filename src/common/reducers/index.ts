import { apiReducer } from './ApiReducer'
import { colorReducer } from './ColorReducer'
import { State } from '../state'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers<State>( {
  time: apiReducer,
  colorConfig: colorReducer
})
