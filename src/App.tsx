import { type JSX } from "react"
import { useEffect } from "react"
import Navbar from "./components/nav"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "./store"
import type { IUser } from "./types/interface/user.interface"
import { fetchUser } from "./store/actions/userActions"

const App = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>()
  const { users, loading, error } = useSelector(
    (state: RootState) => state.userList,
  )

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <div className='container mx-auto p-3'>
        {loading && (
          <div className='px-4 py-2 w-full border-4 border-amber-400 border-l-4 border-l-red-500 bg-amber-400 rounded mb-4'>
            <h1>Loading...</h1>
          </div>
        )}
        {error && (
          <div className='px-4 py-2 w-full border-4 border-red-400 border-l-4 border-l-amber-500 bg-red-400 rounded mb-4 text-white'>
            <h1>{error}</h1>
          </div>
        )}
        <div className='grid grid-cols-1 lg:grid-cols-5 w-full'>
          {users.map((user: IUser, index: number) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-lg shadow p-4 mb-4 lg:m-4'
            >
              <h2 className='text-lg font-semibold'>{user.name}</h2>
              <p className='text-gray-600'>{user.email}</p>
              <p className='text-gray-500 text-xs'>{user.address.city}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
