import {legacy_createStore as createStore,compose} from "redux"
import { reducer } from "./reducer"
import {logger} from "redux-logger"
import {thunk} from "redux-thunk"
import { applyMiddleware } from "redux"


export const fetchStore = createStore(reducer,applyMiddleware(logger,thunk))
export const store = createStore(reducer,compose)