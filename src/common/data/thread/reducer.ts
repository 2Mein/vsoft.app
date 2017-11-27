import {reducerWithInitialState} from "typescript-fsa-reducers";
import {getThreadList} from "./actions";

export const threadReducer = reducerWithInitialState({})
<<<<<<< HEAD
    .case(getThreadList.done, (state, threads) => {
        return [...state.data.threads,...threads.data]
=======
    .case(updateThreads, (state, threads) => {
        return ([...threads.data])
>>>>>>> 8de36131c2ce8bce365bf05eb64fffe3aa304605
    })
