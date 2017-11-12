"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_fsa_reducers_1 = require("typescript-fsa-reducers");
const actions_1 = require("../actions");
const state_1 = require("../state");
const initialTime = {
    timestamp: 0,
    seconds: 0,
    location: state_1.City.Amsterdam,
    loading: false,
    error: undefined
};
// see for more information: https://github.com/dphilipson/typescript-fsa-reducers
exports.apiReducer = typescript_fsa_reducers_1.reducerWithInitialState(initialTime)
    .case(actions_1.fetchTimeStamp.started, (time, empty) => (Object.assign({}, time, { loading: true })))
    .case(actions_1.fetchTimeStamp.done, (time, payload) => (Object.assign({}, time, payload.result, { loading: false })))
    .case(actions_1.fetchTimeStamp.failed, (time, payload) => (Object.assign({}, time, { error: payload.error, loading: false })));
//# sourceMappingURL=ApiReducer.js.map