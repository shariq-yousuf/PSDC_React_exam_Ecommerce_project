import { useSelector } from "react-redux"
import { RootState } from "../../state/store/store"

const CartSummary = () => {
  const cart = useSelector((state: RootState) => state.cart)
  const subTotal = useSelector((state: RootState) => state.cost.subtotal)
  const shippingCost = 5.0 * cart.length

  return (
    <div className="w-full lg:w-1/4">
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Summary</h2>
        <div className="mb-2 flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold text-gray-800">
            ${subTotal.toFixed(2)}
          </span>
        </div>
        <div className="mb-2 flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-semibold text-gray-800">${shippingCost}</span>
        </div>
        <div className="mt-4 flex justify-between border-t pt-4">
          <span className="font-semibold text-gray-800">Total</span>
          <span className="font-bold text-gray-900">
            ${(subTotal + shippingCost).toFixed(2)}
          </span>
        </div>
        <button className="mt-6 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default CartSummary
