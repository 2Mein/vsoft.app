import {applyMiddleware} from 'redux'
import {rootReducer} from './reducers'
import thunk from 'redux-thunk'
import Reactotron from 'reactotron-react-native'

export const store = Reactotron.createStore(rootReducer, applyMiddleware(thunk));