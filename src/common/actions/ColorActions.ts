import { actionCreatorFactory } from 'typescript-fsa'
import { bindThunkAction } from 'typescript-fsa-redux-thunk'
import * as State from '../state'

// see for more info: https://github.com/aikoven/typescript-fsa
const colorActionCreator = actionCreatorFactory('color')
export const selectColor = colorActionCreator<State.Color>('SELECT_COLOR')
export const toggleColor = colorActionCreator.async<State.State, void, void, Error>('TOGGLE_COLOR')

// see for more options: https://github.com/xdave/typescript-fsa-redux-thunk
export const toggleColorThunk = bindThunkAction(toggleColor,
    async (params, dispatch, getState, extraArg ) => {
        const { colorConfig } =  getState()
        const { useColor, color } =  colorConfig
        // check if color is currentl used. If so, do not change the color
        console.log(color, useColor)
        if (useColor) {
            return
        }

        let newColor: State.Color
        switch (color) {
            case State.reddish: {
                newColor = State.greenish
                break
            }
            case State.blueish: {
                newColor = State.reddish
                break
            }
            default: {
                newColor = State.blueish
            }
        }
        console.log(newColor)
        dispatch(selectColor(newColor))
    }
)