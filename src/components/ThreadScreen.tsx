import * as React from 'react'
import {
    View,
    Text,
    StyleSheet, FlatList,
} from 'react-native'

import {State, Thread} from '../common/state'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {ThreadListItem} from './'
import {getThreadList} from "../common/data/thread";

interface ThreadScreenProps {
    threads: Thread[],
    navigation: any,
    dispatch: Dispatch<{}>
}

class ThreadScreen extends React.Component<ThreadScreenProps> {
    static navigationOptions = {
        title: 'Threads',
        header: null
    };

    componentWillMount() {
        const {dispatch} = this.props
        dispatch(getThreadList())
    }

    _keyExtractor = (item: any, index: any) => item._id;

    _onPressItem = (thread: any) => {
        const {navigation} = this.props
        const {navigate} = navigation
        navigate('Chat', {
            thread: thread
        });
    };

    _renderItem = (item: any) => (
        <ThreadListItem
            onPress={this._onPressItem}
            thread={item.item}
        />
    );

    render() {
        console.log('Render ThreadScreen')
        const {threads} = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    data={threads}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
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

const mapStateToProps = (state: State) => ({
    threads: state.threads,
})

export default connect(mapStateToProps)(ThreadScreen)