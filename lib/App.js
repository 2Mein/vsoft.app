"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
const components_1 = require("./components");
const common_1 = require("./common");
class App extends React.Component {
    render() {
        console.log('Yo again');
        return (React.createElement(react_redux_1.Provider, { store: common_1.store },
            React.createElement(react_native_1.View, { style: { flex: 1 } },
                React.createElement(components_1.ThreadScreen, null))));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map