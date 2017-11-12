"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiReducer_1 = require("./ApiReducer");
const ColorReducer_1 = require("./ColorReducer");
const redux_1 = require("redux");
exports.rootReducer = redux_1.combineReducers({
    time: ApiReducer_1.apiReducer,
    colorConfig: ColorReducer_1.colorReducer
});
//# sourceMappingURL=index.js.map