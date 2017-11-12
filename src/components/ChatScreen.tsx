import * as React from 'react'
import {
    View,
    StyleSheet, Animated,
} from 'react-native'

import {State, Thread} from '../common/state'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {GiftedChat} from 'react-native-gifted-chat'
import Text = Animated.Text;

interface ChatScreenProps {
    navigation: any,
    dispatch: Dispatch<State>
}

export default class ChatScreen extends React.Component<ChatScreenProps> {
    static navigationOptions = ({navigation}: any) => ({
        title: navigation.state.params.thread.subject
    });

    onSend = (messages: any) => {
        console.log(messages);
    }

    render() {
        const {navigation} = this.props
        const thread = navigation.state.params.thread
        return (
            <View style={styles.container}>
                <GiftedChat
                    messages={thread.messages}
                    onSend={(messages: any) => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
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