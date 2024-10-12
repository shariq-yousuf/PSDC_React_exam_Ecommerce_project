import { RootState } from "../state/store/store"
import CartProducts from "../components/Main/CartProducts"
import CartSummary from "../components/Main/CartSummary"
import { useSelector } from "react-redux"

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart)

  return (
    <div className="container min-h-[40dvh] mx-auto mb-10 max-w-6xl bg-white p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Shopping Cart</h1>

      {!cart.length ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6 lg:flex-row">
          <CartProducts />
          <CartSummary />
        </div>
      )}
    </div>
  )
}

export default Cart
