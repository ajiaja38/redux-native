/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Dispatch } from "redux"
import type { UserActions } from "../reducer/userReducer"
import { UserConstantRedux } from "../constant/userConstant"
import type { IUser } from "../../types/interface/user.interface"

export const fetchUser = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    dispatch({ type: UserConstantRedux.FETCH_USER_REQUEST })

    try {
      const response: Response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      )

      const responseJson: IUser[] = await response.json()
      dispatch({
        type: UserConstantRedux.FETCH_USER_SUCCESS,
        payload: responseJson,
      })
    } catch (error: any) {
      dispatch({
        type: UserConstantRedux.FETCH_USER_FAIL,
        payload: error.message,
      })
    }
  }
}
