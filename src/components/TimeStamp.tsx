import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native'

import { State } from '../common/state'
import { connect } from 'react-redux'

interface TimeStampProps {
  titleColor: string,
  useColor: boolean,
  timeStamp: number,
  loading: boolean,
  error: Error,
}

interface OwnProps {
    title: string
}

type allProps = TimeStampProps & OwnProps
class Timestamp extends React.Component<allProps> {
    renderTimeStamp = () => {
        const { timeStamp, useColor, titleColor, loading, error, title } = this.props
        if (loading) {
            return (
                <ActivityIndicator />
            )
        } else if (error) {
            return (
                <Text style={{ color: '#f00' }}>
                Error: {error.message}
                </Text>
            )
        } else if (timeStamp < 1 ) {
            return
        }
        // most cases:
        return (
        <Text style={useColor ? [styles.welcome, { color: titleColor }] : styles.welcome}>
            {title} {timeStamp}
        </Text>
        )
    }

    render() {
        return (
            <View>
                {this.renderTimeStamp()}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  title: ownProps.title,
  titleColor: state.colorConfig.color.title,
  useColor: state.colorConfig.useColor,
  timeStamp: state.time.timestamp,
  loading: state.time.loading,
  error: state.time.error
})

export default connect(mapStateToProps)(Timestamp)
