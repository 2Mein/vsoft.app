"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducers_1 = require("./reducers");
const redux_thunk_1 = require("redux-thunk");
// import { createStore } from 'reactotron-redux'
// import Reactotron from 'reactotron-react-native'
// import { applyMiddleware } from 'redux'
exports.store = redux_1.createStore(reducers_1.rootReducer, redux_1.applyMiddleware(redux_thunk_1.default));
//# sourceMappingURL=store.js.map