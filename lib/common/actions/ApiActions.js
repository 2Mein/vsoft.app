"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_fsa_1 = require("typescript-fsa");
const typescript_fsa_redux_thunk_1 = require("typescript-fsa-redux-thunk");
const api_1 = require("../api");
// see for more info: https://github.com/aikoven/typescript-fsa
const apiActionCreator = typescript_fsa_1.actionCreatorFactory('api');
exports.fetchTimeStamp = apiActionCreator.async('FETCH_TIMESTAMP');
// see for more options: https://github.com/xdave/typescript-fsa-redux-thunk
exports.fetchTimeStampAsync = typescript_fsa_redux_thunk_1.bindThunkAction(exports.fetchTimeStamp, (city) => __awaiter(this, void 0, void 0, function* () {
    return yield api_1.getTimeStamp(city);
}));
//# sourceMappingURL=ApiActions.js.map