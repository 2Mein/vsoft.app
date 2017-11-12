import {store} from '../../store';
import * as api from './api';
import * as selectors from './selectors';
import * as actionCreators from './actions';
import {initialState} from './reducer';
import {updateSession} from "./actions";

export interface Session {
    tokens: {
        access: {
            type: string | null,
            value: string | null,
            expiresIn: number | null,
        },
        refresh: {
            type: string | null,
            value: string | null,
        },
    }
}

const SESSION_TIMEOUT_THRESHOLD = 300; // Will refresh the access token 5 minutes before it expires

let sessionTimeout: number = 0;

const setSessionTimeout = (duration: number) => {
    clearTimeout(sessionTimeout);
    sessionTimeout = setTimeout(
        refreshToken, // eslint-disable-line no-use-before-define
        (duration - SESSION_TIMEOUT_THRESHOLD) * 1000
    );
};

const clearSession = () => {
    clearTimeout(sessionTimeout);
    store.dispatch(updateSession(initialState));
};

const onRequestSuccess = (response: any) => {
    const tokens = response;
    store.dispatch(updateSession(tokens));
    setSessionTimeout(tokens.expires_in);
};

const onRequestFailed = (exception: any) => {
    clearSession();
    console.log('fail');
    console.log(exception);
    throw exception;
};

export const refreshToken = () => {
    const session = selectors.get();

    if (!session.tokens.refresh.value) {
        return Promise.reject({});
    } else {
        return api.refresh(session.tokens.refresh.value)
            .then(onRequestSuccess)
            .catch(onRequestFailed);
    }
};

export const authenticate = (email: string, password: string) =>
    api.authenticate(email, password)
        .then(onRequestSuccess)
        .catch(onRequestFailed);

export const revoke = () => {

};