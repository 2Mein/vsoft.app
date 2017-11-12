/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react'
import {
    View
} from 'react-native'

import {Provider} from 'react-redux'
import {ThreadScreen, ChatScreen} from './components'
import {store} from './common'
import {StackNavigator} from "react-navigation";

const ThreadStack = StackNavigator({
    List: {
        screen: ThreadScreen,
    },
    Chat: {
        screen: ChatScreen,
    },
});


export default class App extends React.Component<object, object> {
    render() {
        return (
            <Provider store={ store }>
                <View style={{flex: 1}}>
                    <ThreadStack />
                </View>
            </Provider>
        )
    }
}
