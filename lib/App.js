"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const common_1 = require("./common");
const components_1 = require("./components");
class App extends React.Component {
    render() {
        return (React.createElement(react_redux_1.Provider, { store: common_1.store },
            React.createElement(components_1.Navigator, null)));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map