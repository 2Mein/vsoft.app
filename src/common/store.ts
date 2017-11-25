import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Reactotron from 'reactotron-react-native'
import {rootReducer} from "./reducer";

export const store = Reactotron.createStore(rootReducer, applyMiddleware(thunk));