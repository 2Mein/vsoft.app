import { actionCreatorFactory } from 'typescript-fsa'
import { bindThunkAction } from 'typescript-fsa-redux-thunk'
import { getTimeStamp } from '../api'
import { City, Time } from '../state'

// see for more info: https://github.com/aikoven/typescript-fsa
const apiActionCreator = actionCreatorFactory('api')
export const fetchTimeStamp = apiActionCreator.async<City, Time, Error>('FETCH_TIMESTAMP')

// see for more options: https://github.com/xdave/typescript-fsa-redux-thunk
export const fetchTimeStampAsync = bindThunkAction(fetchTimeStamp,
    async (city) => {
      return await getTimeStamp(city)
    }
)
