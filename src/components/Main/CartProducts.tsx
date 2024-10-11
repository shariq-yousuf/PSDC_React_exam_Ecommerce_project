import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../../state/slices/cartSlice"
import { removeCost } from "../../state/slices/costSlice"
import { RootState } from "../../state/store/store"

const CartProducts = () => {
  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const removeProductFromCart = (id: string, price: number) => {
    dispatch(removeFromCart(id))
    dispatch(removeCost(price))
  }
  return (
    <div className="w-full lg:w-3/4">
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        {/* <!-- Single Cart Item --> */}
        {cart.map(({ image, price, title, shoppingId }) => (
          <div
            key={shoppingId}
            className="mb-4 flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <img
                className="h-20 w-20 object-cover"
                src={image}
                alt="Product Image"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-500">Price: ${price}</p>
              </div>
            </div>
            <button
              className="text-red-500 hover:text-red-600"
              onClick={() => removeProductFromCart(shoppingId, price)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CartProducts
