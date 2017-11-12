"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reactotron_react_native_1 = require("reactotron-react-native");
const reactotron_redux_1 = require("reactotron-redux");
reactotron_react_native_1.default
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotron_redux_1.reactotronRedux())
    .connect(); // let's connect!
// swap console.log for reactotron log
// https://github.com/infinitered/reactotron/issues/298
// swizzle the old one
const yeOldeConsoleLog = console.log;
// make a new one
console.log = (...args) => {
    // always call the old one, because React Native does magic swizzling too
    yeOldeConsoleLog(...args);
    // send this off to Reactotron.
    reactotron_react_native_1.default.display({
        name: 'CONSOLE.LOG',
        value: args,
        preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : undefined
    });
};
//# sourceMappingURL=ReactotronConfig.js.map