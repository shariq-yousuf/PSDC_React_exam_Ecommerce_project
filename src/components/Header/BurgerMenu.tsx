import { Link } from "react-router-dom"
import useLogout from "../../hooks/useLogout"
import { useDispatch } from "react-redux"
import { toggle } from "../../state/slices/burgerMenuSlice"

const BurgerMenu = () => {
  const logout = useLogout()
  const dispatch = useDispatch()

  const toggleBurerMenu = () => {
    dispatch(toggle())
  }

  return (
    <nav>
      <div className="burger-container h-dvh min-w-56 text-white text-xl bg-gray-600 bg-opacity-90">
        <div className="text-right ">
          <button className="m-4 px-4" onClick={toggleBurerMenu}>
            X
          </button>
        </div>
        <ul className="burger-menu" onClick={toggleBurerMenu}>
          <Link to={"/"}>
            <li className="burger-item py-4 ps-12 cursor-pointer hover:bg-slate-400">
              Shop
            </li>
          </Link>
          <Link to={"/cart"}>
            <li className="burger-item py-4 ps-12 cursor-pointer hover:bg-slate-400">
              Cart
            </li>
          </Link>
          <li
            onClick={() => logout()}
            className="burger-item py-4 ps-12 cursor-pointer hover:bg-slate-400"
          >
            Logout
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default BurgerMenu
