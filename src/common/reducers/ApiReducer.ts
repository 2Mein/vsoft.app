import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { fetchTimeStamp } from '../actions'
import { Time, City } from '../state'

const initialTime = {
    timestamp: 0,
    seconds: 0,
    location: City.Amsterdam,
    loading: false,
    error: undefined
} as Time

// see for more information: https://github.com/dphilipson/typescript-fsa-reducers
export const apiReducer = reducerWithInitialState(initialTime)
    .case(fetchTimeStamp.started, (time, empty) => ({ ...time, loading: true }))
    .case(fetchTimeStamp.done, (time, payload) => ({...time, ...payload.result, loading: false}))
    .case(fetchTimeStamp.failed, (time, payload) => ({ ...time, error: payload.error, loading: false }))
