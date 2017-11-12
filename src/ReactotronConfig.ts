import Reactotron from 'reactotron-react-native'
import {reactotronRedux} from 'reactotron-redux'

Reactotron
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect() // let's connect!

// swap console.log for reactotron log
// https://github.com/infinitered/reactotron/issues/298

// swizzle the old one
const yeOldeConsoleLog = console.log;

// make a new one
console.log = (...args: any[]) => {
    // always call the old one, because React Native does magic swizzling too
    yeOldeConsoleLog(...args);

    // send this off to Reactotron.
    Reactotron.display({
        name: 'CONSOLE.LOG',
        value: args,
        preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : undefined
    })
};