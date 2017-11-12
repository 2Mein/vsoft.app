import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image, TouchableHighlight,
} from 'react-native'

import {Thread} from '../common/state'

interface ThreadScreenProps {
    thread: Thread,
    onPress: Function
}

export default class ThreadListItem extends React.Component<ThreadScreenProps> {
    render() {
        const {thread, onPress} = this.props

        return (
            <TouchableHighlight
                underlayColor="transparent"
                onPress={() => onPress(thread)}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri: thread.avatar}}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.subject}>{thread.subject}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        flexDirection: 'row',
    },
    image: {
        height: 75,
        borderRadius: 40,
        width: 75,
        margin: 12
    },
    textContainer: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
    },
    subject: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 10,
        marginBottom: 10
    }
})