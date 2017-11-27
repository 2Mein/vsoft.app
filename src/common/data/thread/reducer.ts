import {reducerWithInitialState} from "typescript-fsa-reducers";
import {getThreadList} from "./actions";

export const threadReducer = reducerWithInitialState({})
    .case(getThreadList.done, (state, threads) => {
        return [...state.data.threads,...threads.data]
    })
