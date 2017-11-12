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
const State = require("../state");
// see for more info: https://github.com/aikoven/typescript-fsa
const colorActionCreator = typescript_fsa_1.actionCreatorFactory('color');
exports.selectColor = colorActionCreator('SELECT_COLOR');
exports.toggleColor = colorActionCreator.async('TOGGLE_COLOR');
// see for more options: https://github.com/xdave/typescript-fsa-redux-thunk
exports.toggleColorThunk = typescript_fsa_redux_thunk_1.bindThunkAction(exports.toggleColor, (params, dispatch, getState, extraArg) => __awaiter(this, void 0, void 0, function* () {
    const { colorConfig } = getState();
    const { useColor, color } = colorConfig;
    // check if color is currentl used. If so, do not change the color
    console.log(color, useColor);
    if (useColor) {
        return;
    }
    let newColor;
    switch (color) {
        case State.reddish: {
            newColor = State.greenish;
            break;
        }
        case State.blueish: {
            newColor = State.reddish;
            break;
        }
        default: {
            newColor = State.blueish;
        }
    }
    console.log(newColor);
    dispatch(exports.selectColor(newColor));
}));
//# sourceMappingURL=ColorActions.js.map