import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../../state/store/store"
import { FaCartShopping } from "react-icons/fa6"
import BurgerMenu from "./BurgerMenu"
import useLogout from "../../hooks/useLogout"
import { toggle } from "../../state/slices/burgerMenuSlice"

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart)
  const bugerMenu = useSelector((state: RootState) => state.burgerMenu)
  const logout = useLogout()
  const dispatch = useDispatch()

  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-600 px-6 py-3">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <img
          className="mx-auto h-10 w-auto"
          src="/react.svg"
          alt="Your Company"
        />
      </div>

      {/* <!-- Mobile menu button --> */}
      <div className="block lg:hidden">
        <button
          onClick={() => dispatch(toggle())}
          className="flex items-center rounded border border-gray-500 px-3 py-2 text-gray-400 hover:border-white hover:text-white"
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {bugerMenu && (
        <div className="fixed top-0 right-0 pt-4">
          <BurgerMenu />
        </div>
      )}

      <div className="w-full hidden flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow">
          <Link
            to={"/"}
            className="mr-4 mt-4 block text-white hover:text-gray-300 text-lg lg:mt-0 lg:inline-block"
          >
            Shop
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            to={"/cart"}
            className="me-4 flex items-center rounded border border-gray-400 px-4 text-sm leading-none text-gray-300 hover:bg-gray-300 hover:text-gray-800"
          >
            <FaCartShopping className="my-2" />
            {cart.length > 0 && (
              <span className="text-white bg-red-400 rounded-lg  ms-2 p-1">
                {cart.length}
              </span>
            )}
          </Link>
          <button
            className="mt-4 inline-block rounded border border-gray-400 px-4 py-2 text-sm leading-none text-gray-300 hover:bg-gray-300 hover:text-gray-800 lg:mt-0"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
