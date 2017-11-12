/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react'

import {Provider} from 'react-redux'
import {store} from './common'
import {Navigator} from './components'

export default class App extends React.Component<object, object> {

    render() {
        return (
            <Provider store={ store }>
               <Navigator />
            </Provider>
        )
    }
}
