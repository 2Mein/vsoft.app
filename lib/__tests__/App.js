"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("react-native");
const react_1 = require("react");
const App_1 = require("../App");
// Note: test renderer must be required after react-native.
const react_test_renderer_1 = require("react-test-renderer");
it('renders correctly', () => {
    const tree = react_test_renderer_1.default.create(react_1.default.createElement(App_1.default, null));
});
//# sourceMappingURL=App.js.map