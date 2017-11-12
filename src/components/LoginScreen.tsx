import * as React from 'react'
import {
    View,
    StyleSheet, Animated, TextInput, TouchableHighlight,
} from 'react-native'

import {Auth, State} from '../common/state'
import {Dispatch} from 'redux'
import {GiftedChat} from 'react-native-gifted-chat'
import Text = Animated.Text;
import {connect} from "react-redux";
import {authenticate, Session} from "../common/services/session/";
import * as api from "../common/services/api";

interface LoginScreenProps {
    session: Session,
    dispatch: Dispatch<State>
}

interface LoginScreenState {
    isLoading: boolean,
    error: string | null,
    email: string,
    password: string,
}

class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
    private passwordField: any;

    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: false,
            error: null,
            email: '',
            password: '',
        }
    }

    focusPasswordField = () => {
        if (this.passwordField)
            this.passwordField.focus();
    }

    handleLoading = () => {
        const {isLoading} = this.state;
        if (isLoading) {
            return (
                <Text>
                    Loading
                </Text>
            )
        } else {
            return undefined
        }
    }

    handleLogin = () => {
        this.setState({
            isLoading: true,
            error: '',
        });

        const {email, password} = this.state

        authenticate(email, password)
            .then(() => {
            })
            .catch((exception: any) => {
                // Displays only the first error message
                const error = api.exceptionExtractError(exception);
                this.setState({
                    isLoading: false,
                    ...(error ? {error} : {}),
                });
                if (!error) {
                    throw exception;
                }
            });
    }

    renderLogin = () => {
        const {email, password} = this.state
        return (
            <View style={styles.fields}>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={text => (this.setState({email: text}))}
                    placeholder='E-mailadres'
                    keyboardType='email-address'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    returnKeyType={"next"}
                    onSubmitEditing={this.focusPasswordField}
                />
                <TextInput
                    ref={(input) => {
                        this.passwordField = input
                    }}
                    style={styles.input}
                    value={password}
                    onChangeText={text => (this.setState({password: text}))}
                    secureTextEntry={true}
                    placeholder='Wachtwoord'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onSubmitEditing={this.handleLogin}
                />
                <TouchableHighlight style={styles.submit} onPress={this.handleLogin}>
                    <Text style={{color: '#fff', fontWeight: 'bold', paddingTop: 15}}>
                        Inloggen
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }

    render() {

        return (
            <View style={styles.container}>
                {/*<Image style={styles.backgroundImage} source={require('../../assets/img/bg.jpg')}/>*/}
                {/*<Image style={styles.logo} source={require('../../assets/img/logo-msn.png')}/>*/}
                {this.renderLogin()}
                {this.handleLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fields: {
        width: '90%'
    },
    input: {
        height: 50,
        borderRadius: 50,
        backgroundColor: "#FFFFFF",
        marginBottom: 10,
        paddingLeft: 20,
        opacity: .9
    },
    submit: {
        height: 50,
        borderRadius: 50,
        backgroundColor: "#ff9741",
        marginBottom: 10,
        alignItems: 'center',
    },
    backgroundImage: {
        backgroundColor: '#ccc',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        width: '60%',
        resizeMode: 'contain',
        top: 0
    }
})

const mapStateToProps = (state: State) => ({
    session: state.session,
})

export default connect(mapStateToProps)(LoginScreen)