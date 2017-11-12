import { actionCreatorFactory } from 'typescript-fsa'
import {State} from "../../state";
import {Session} from "./index";

const sessionActionCreator = actionCreatorFactory('session')

export const updateSession = sessionActionCreator<any>('UPDATE')