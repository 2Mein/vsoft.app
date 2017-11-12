/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react'
import {
  View
} from 'react-native'

import { Provider } from 'react-redux'
import { MainScreen } from './components'
import { store } from './common'

export default class App extends React.Component<object, object> {
  render() {
    console.log('Yo again')
    return (
      <Provider store={ store }>
        <View style={{flex: 1}}>
          <MainScreen />
       </View>
      </Provider>
    )
  }
}
