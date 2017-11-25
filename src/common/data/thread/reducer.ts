import {reducerWithInitialState} from 'typescript-fsa-reducers'
import {updateThreads} from "./actions";

export const threadReducer = reducerWithInitialState({})
    .case(updateThreads, (state, threads) => {
        return ([...threads.data])
    })
