import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Button,
    ActivityIndicator
} from 'react-native'

import { State, City } from '../common/state'
import { TimeStamp } from '.'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { toggleColorThunk, fetchTimeStampAsync } from '../common/actions'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

interface MainScreenProps {
  backgroundColor: string,
  titleColor: string,
  useColor: boolean,
  dispatch: Dispatch<State>
}

class MainScreen extends React.Component<MainScreenProps> {
    handleToggleColor = () => {
        const {dispatch} = this.props
        dispatch(toggleColorThunk())
    }

    handleFetchTimestamp = () => {
        const {dispatch} = this.props
        dispatch(fetchTimeStampAsync(City.Amsterdam))
    }

    render() {
        console.log('Yo again')
        const {backgroundColor, titleColor, useColor} = this.props
        return (
            <View style={useColor ? [styles.container, {backgroundColor: backgroundColor}] : styles.container}>
                <Text style={useColor ? [styles.welcome, {color: titleColor}] : styles.welcome}>
                    Welcome to React Native!!!
                </Text>
                <Button onPress={this.handleToggleColor} title='Toggle Colors'/>
                <Button onPress={this.handleFetchTimestamp} title='Fetch Amsterdam Timestamp'/>
                <TimeStamp title='Timestamp in Amsterdam'/>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
})

const mapStateToProps = (state: State) => ({
  backgroundColor: state.colorConfig.color.main,
  titleColor: state.colorConfig.color.title,
  useColor: state.colorConfig.useColor
})

export default connect(mapStateToProps)(MainScreen)
