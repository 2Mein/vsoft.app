"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
class Timestamp extends React.Component {
    constructor() {
        super(...arguments);
        this.renderTimeStamp = () => {
            const { timeStamp, useColor, titleColor, loading, error, title } = this.props;
            if (loading) {
                return (React.createElement(react_native_1.ActivityIndicator, null));
            }
            else if (error) {
                return (React.createElement(react_native_1.Text, { style: { color: '#f00' } },
                    "Error: ",
                    error.message));
            }
            else if (timeStamp < 1) {
                return;
            }
            // most cases:
            return (React.createElement(react_native_1.Text, { style: useColor ? [styles.welcome, { color: titleColor }] : styles.welcome },
                title,
                " ",
                timeStamp));
        };
    }
    render() {
        return (React.createElement(react_native_1.View, null, this.renderTimeStamp()));
    }
}
const styles = react_native_1.StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
const mapStateToProps = (state, ownProps) => ({
    title: ownProps.title,
    titleColor: state.colorConfig.color.title,
    useColor: state.colorConfig.useColor,
    timeStamp: state.time.timestamp,
    loading: state.time.loading,
    error: state.time.error
});
exports.default = react_redux_1.connect(mapStateToProps)(Timestamp);
//# sourceMappingURL=TimeStamp.js.map