import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import {State, Thread} from '../common/state'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'

interface ThreadScreenProps {
    threads: Thread[],
    dispatch: Dispatch<State>
}

class ThreadScreen extends React.Component<ThreadScreenProps> {
    HandleThreadClick = (thread: Thread) => {

    }

    render() {
        console.log('Yo again')
        return (
            <View style={styles.container}>
                <Text>
                    Welcome to React Native!!!
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff7e2'
    },
})

const mapStateToProps = (state: State) => ({
    threads: state.threads,
})

export default connect(mapStateToProps)(ThreadScreen)
