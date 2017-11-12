import {reducerWithInitialState} from 'typescript-fsa-reducers'
import {updateSession} from "./actions";
import {Session} from "./index";

export const initialState: Session = {
    tokens: {
        access: {
            type: null,
            value: null,
            expiresIn: null,
        },
        refresh: {
            type: null,
            value: null,
        },
    }
};

export const sessionReducer = reducerWithInitialState(initialState)
    .case(updateSession, (state, session) => ({
        tokens: {
            access: {
                type: session.token_type,
                value: session.access_token,
                expiresIn: session.expires_in,
            },
            refresh: {
                type: session.token_type,
                value: session.refresh_token
            }
        }
    }))
