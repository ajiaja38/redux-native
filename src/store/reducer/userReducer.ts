import type { IUser } from "../../types/interface/user.interface"
import { UserConstantRedux } from "../constant/userConstant"

interface FetchUserRequestAction {
  type: typeof UserConstantRedux.FETCH_USER_REQUEST
}

interface FetchUserSuccessAction {
  type: typeof UserConstantRedux.FETCH_USER_SUCCESS
  payload: IUser[]
}

interface FetchUserFailAction {
  type: typeof UserConstantRedux.FETCH_USER_FAIL
  payload: string
}

export type UserActions =
  | FetchUserRequestAction
  | FetchUserSuccessAction
  | FetchUserFailAction

interface IInitialState {
  loading: boolean
  users: IUser[]
  error: string | null
}

const initialState: IInitialState = {
  loading: false,
  users: [],
  error: null,
}

export const userReducer = (
  state: IInitialState = initialState,
  action: UserActions,
) => {
  switch (action.type) {
    case UserConstantRedux.FETCH_USER_REQUEST:
      return { ...state, loading: true }
    case UserConstantRedux.FETCH_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload }
    case UserConstantRedux.FETCH_USER_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
