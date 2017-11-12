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

interface ThreadScreenProps {
    threads: Thread[],
    dispatch: Dispatch<State>
}

class ThreadScreen extends React.Component<ThreadScreenProps> {
    _keyExtractor = (item: any, index: any) => item.id;

    _onPressItem = (id: any) => {
        console.log(id)
    };

    _renderItem = (item: any) => (
        <ThreadListItem
            thread={item}
        />
    );

    render() {
        console.log('Yo again')
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