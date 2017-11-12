"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const state_1 = require("../common/state");
const _1 = require(".");
const react_redux_1 = require("react-redux");
const actions_1 = require("../common/actions");
const instructions = react_native_1.Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu'
});
class MainScreen extends React.Component {
    constructor() {
        super(...arguments);
        this.handleToggleColor = () => {
            const { dispatch } = this.props;
            dispatch(actions_1.toggleColorThunk());
        };
        this.handleFetchTimestamp = () => {
            const { dispatch } = this.props;
            dispatch(actions_1.fetchTimeStampAsync(state_1.City.Amsterdam));
        };
    }
    render() {
        console.log('Yo again');
        const { backgroundColor, titleColor, useColor } = this.props;
        return (React.createElement(react_native_1.View, { style: useColor ? [styles.container, { backgroundColor: backgroundColor }] : styles.container },
            React.createElement(react_native_1.Text, { style: useColor ? [styles.welcome, { color: titleColor }] : styles.welcome }, "Welcome to React Native!!!"),
            React.createElement(react_native_1.Button, { onPress: this.handleToggleColor, title: 'Toggle Colors' }),
            React.createElement(react_native_1.Button, { onPress: this.handleFetchTimestamp, title: 'Fetch Amsterdam Timestamp' }),
            React.createElement(_1.TimeStamp, { title: 'Timestamp in Amsterdam' }),
            React.createElement(react_native_1.Text, { style: styles.instructions }, instructions)));
    }
}
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#33aa77',
        marginBottom: 5
    }
});
const mapStateToProps = (state) => ({
    backgroundColor: state.colorConfig.color.main,
    titleColor: state.colorConfig.color.title,
    useColor: state.colorConfig.useColor
});
exports.default = react_redux_1.connect(mapStateToProps)(MainScreen);
//# sourceMappingURL=MainScreen.js.map