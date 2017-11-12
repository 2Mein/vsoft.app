import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'

// import { createStore } from 'reactotron-redux'
// import Reactotron from 'reactotron-react-native'
// import { applyMiddleware } from 'redux'
export const store = createStore(rootReducer, applyMiddleware(thunk))