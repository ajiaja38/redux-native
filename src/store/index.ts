import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux"
import { thunk } from "redux-thunk"
import type { ThunkDispatch } from "redux-thunk"
import type { AnyAction } from "redux"

import { userReducer } from "./reducer/userReducer"

const rootReducer = combineReducers({
  userList: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>

const store = createStore(rootReducer, undefined, applyMiddleware(thunk))

export default store
