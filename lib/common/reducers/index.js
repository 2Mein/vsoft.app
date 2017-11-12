"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducer_1 = require("../services/session/reducer");
const reducer_2 = require("../data/thread/reducer");
exports.rootReducer = redux_1.combineReducers({
    threads: reducer_2.threadReducer,
    session: reducer_1.sessionReducer
});
//# sourceMappingURL=index.js.map