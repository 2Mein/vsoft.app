/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react'

import {connect, Dispatch, Provider} from 'react-redux'

import {StackNavigator} from "react-navigation";
import {Auth, State} from "../common/state";

import ThreadScreen from './ThreadScreen'
import ChatScreen from "./ChatScreen";
import LoginScreen from "./LoginScreen";
import {Session} from "../common/services/session/index";

const ThreadStack = StackNavigator({
    List: {
        screen: ThreadScreen,
    },
    Chat: {
        screen: ChatScreen,
    },
});


interface NavigatorProps {
    session: Session,
    dispatch: Dispatch<State>
}

class Navigator extends React.Component<NavigatorProps> {
    render() {
        const {session} = this.props
        console.log('render navigator');
        console.log(session);
        if (session.tokens.access.value) {
            return (<ThreadStack />);
        } else {
            return (<LoginScreen />);
        }
    }
}

const mapStateToProps = (state: State) => ({
    session: state.session,
})

export default connect(mapStateToProps)(Navigator)