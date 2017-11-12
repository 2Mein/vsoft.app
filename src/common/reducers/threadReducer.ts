import {reducerWithInitialState} from 'typescript-fsa-reducers'
import {selectColor, toggleColor} from '../actions'
import {ColorConfig, blueish, Thread} from '../state'
import {fetchThreads} from "../actions/ThreadActions";

const initialConfig = [
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 1'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 2'
    } as Thread,
]
// see for more information: https://github.com/dphilipson/typescript-fsa-reducers
export const threadReducer = reducerWithInitialState(initialConfig)
    .case(fetchThreads.done, (threads, empty) => ({...threads}))
