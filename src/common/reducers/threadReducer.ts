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
        id: 'rbkdvcfvhdcyshschv',
        subject: 'Thread 2'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 3'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 4'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 5'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 6'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 7'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 8'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 9'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 10'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 11'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 12'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 13'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 14'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 15'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 16'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 17'
    } as Thread,
    {
        id: 'rbkdvcfvhdcyhschv',
        subject: 'Thread 18'
    } as Thread,
]
// see for more information: https://github.com/dphilipson/typescript-fsa-reducers
export const threadReducer = reducerWithInitialState(initialConfig)
    .case(fetchThreads.done, (threads, empty) => ({...threads}))
