import { actionCreatorFactory } from 'typescript-fsa'
import { bindThunkAction } from 'typescript-fsa-redux-thunk'
import * as State from '../state'
import {Thread} from "../state";
import {getThreads} from "../api/index";

const threadActionCreator = actionCreatorFactory('api')
export const fetchThreads = threadActionCreator.async<null,Thread[], Error>('FETCH_THREADS')

export const fetchThreadsAsync = bindThunkAction(fetchThreads,
    async () => {
        return await getThreads()
    }
)
