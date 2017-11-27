import {actionCreatorFactory} from "typescript-fsa";
import {Thread} from "../../state";
import * as api from "./api";
import {bindThunkAction} from "typescript-fsa-redux-thunk";

const threadActionCreator = actionCreatorFactory('thread')

export const getThreadList = threadActionCreator.async<void, Thread[]>('GET_LIST')

export const getThreadListThunk = bindThunkAction(getThreadList,
    async (params, dispatch, getState, extraArg) => {
        let threads = await api.get();
        return threads
    }
)