"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducers_1 = require("./reducers");
const redux_thunk_1 = require("redux-thunk");
const reactotron_react_native_1 = require("reactotron-react-native");
exports.store = reactotron_react_native_1.default.createStore(reducers_1.rootReducer, redux_1.applyMiddleware(redux_thunk_1.default));
//# sourceMappingURL=store.js.map