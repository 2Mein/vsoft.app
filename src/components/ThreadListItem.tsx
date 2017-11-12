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
            <TouchableHighlight onPress={()=>onPress(thread)}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri: 'http://placehold.it/100x100'}}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.subject}>thread name : {thread.subject}</Text>
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
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        backgroundColor: '#faf4ff'
    },
    image: {
        height: 75,
        borderRadius: 40,
        width: 75,
        margin: 12
    },
    textContainer: {
        flex: 1,
        backgroundColor: '#ff97f4'
    },
    subject: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 5,
        marginBottom: 10
    }
})