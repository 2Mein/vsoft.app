import {applyMiddleware} from "redux";
import {rootReducer} from "./reducer";
import thunk from "redux-thunk";
import Reactotron from "reactotron-react-native";

export const store = Reactotron.createStore(rootReducer, applyMiddleware(thunk));