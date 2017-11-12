import {actionCreatorFactory} from 'typescript-fsa'
import {Thread} from "../../state";
import * as api from "./api";
import {bindThunkAction} from "typescript-fsa-redux-thunk";

const threadActionCreator = actionCreatorFactory('thread')

export const updateThreads = threadActionCreator<any>('UPDATE');

export const getThreads = threadActionCreator.async<void, void, Thread[], Error>('GET');

export const getThreadsThunk = bindThunkAction(getThreads,
    async (params, dispatch, getState, extraArg) => {
        let threads = await api.get();
        console.log(threads);
        dispatch(updateThreads(threads));
        return threads
    }
)