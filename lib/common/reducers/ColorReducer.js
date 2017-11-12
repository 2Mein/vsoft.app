"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_fsa_reducers_1 = require("typescript-fsa-reducers");
const actions_1 = require("../actions");
const state_1 = require("../state");
const initialConfig = {
    useColor: false,
    color: state_1.blueish
};
// see for more information: https://github.com/dphilipson/typescript-fsa-reducers
exports.colorReducer = typescript_fsa_reducers_1.reducerWithInitialState(initialConfig)
    .case(actions_1.selectColor, (colorConfig, color) => (Object.assign({}, colorConfig, { color })))
    .case(actions_1.toggleColor.done, (colorConfig, useColor) => (Object.assign({}, colorConfig, { useColor: !colorConfig.useColor })));
//# sourceMappingURL=ColorReducer.js.map