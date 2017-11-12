import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native'

import {Thread} from '../common/state'

interface ThreadScreenProps {
    thread: Thread,
}

export default class ThreadListItem extends React.Component<ThreadScreenProps> {
    render() {
        const {thread} = this.props
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: 'http://placehold.it/100x100'}}/>
                <View>
                    <Text>{thread.subject}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf4ff'
    },
    image: {
        height: 75,
        borderRadius: 35,
        width: 75
    },
})