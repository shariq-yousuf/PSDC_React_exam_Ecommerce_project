import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { RootState } from "../store/store"
import { FaCartShopping } from "react-icons/fa6"

const Navbar = () => {
  const navigate = useNavigate()
  const cart = useSelector((state: RootState) => state.cart.cart)

  const logOut = () => {
    localStorage.clear()
    navigate("/login")
  }

  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-600 px-6 py-3">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <img
          className="mx-auto h-10 w-auto"
          src="/react.svg"
          alt="Your Company"
        />
      </div>
      <div className="block md:hidden">
        <button className="flex items-center rounded border border-gray-500 px-3 py-2 text-gray-400 hover:border-white hover:text-white">
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
      <div className="w-full hidden flex-grow md:flex md:w-auto md:items-center">
        <div className="text-sm md:flex-grow">
          <Link
            to={"/"}
            className="mr-4 mt-4 block text-white hover:text-gray-300 text-lg md:mt-0 md:inline-block"
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
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
