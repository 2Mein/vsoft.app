import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { selectColor, toggleColor } from '../actions'
import { ColorConfig, blueish } from '../state'

const initialConfig = {
    useColor: false,
    color: blueish
} as ColorConfig

// see for more information: https://github.com/dphilipson/typescript-fsa-reducers
export const colorReducer = reducerWithInitialState(initialConfig)
    .case(selectColor, (colorConfig, color) => ({ ...colorConfig, color }))
    .case(toggleColor.done, (colorConfig, useColor) => ({...colorConfig, useColor: !colorConfig.useColor}))
