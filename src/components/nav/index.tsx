import { type JSX } from "react"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../store"
import { fetchUser } from "../../store/actions/userActions"

const Navbar = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()

  const handleRefetch = () => dispatch(fetchUser())

  return (
    <div className='bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-2 px-3 lg:px-6 w-full text-white transition-all ease-in-out duration-300 hover:shadow-lg sticky top-0 flex justify-between items-center border-t-8 border-amber-400'>
      <h1 className='text-2xl font-bold'>Native Redux</h1>
      <button
        onClick={handleRefetch}
        className='py-2 px-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-500 rounded-lg'
      >
        Refresh
      </button>
    </div>
  )
}

export default Navbar
