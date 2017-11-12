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
const react_navigation_1 = require("react-navigation");
const ThreadStack = react_navigation_1.StackNavigator({
    List: {
        screen: components_1.ThreadScreen,
    },
    Chat: {
        screen: components_1.ChatScreen,
    },
});
class App extends React.Component {
    render() {
        return (React.createElement(react_redux_1.Provider, { store: common_1.store },
            React.createElement(react_native_1.View, { style: { flex: 1 } },
                React.createElement(ThreadStack, null))));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map