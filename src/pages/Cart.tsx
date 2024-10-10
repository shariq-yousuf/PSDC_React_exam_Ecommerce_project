import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeFromCart } from "../slices/cartSlice";
import { removeCost } from "../slices/costSlice";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const subTotal = useSelector((state: RootState) => state.cost.subtotal);
  const dispatch = useDispatch();

  const shippingCost = 5.0 * cart.length;

  const removeProductFromCart = (id: string, price: number) => {
    dispatch(removeFromCart(id));
    dispatch(removeCost(price));
  };

  if (!cart.length) {
    return (
      <div className="container h-[40dvh] mx-auto mb-10 max-w-6xl bg-white p-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Shopping Cart</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mb-10 max-w-6xl bg-white p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Shopping Cart</h1>

      {/* <!-- Cart Items Section --> */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* <!-- Cart Items List --> */}
        <div className="w-full lg:w-3/4">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            {/* <!-- Single Cart Item --> */}
            {cart.map(({ id, image, price, title, shoppingId }) => (
              <div
                key={id}
                className="mb-4 flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    className="h-20 w-20 object-cover"
                    src={image}
                    alt="Product Image"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {title}
                    </h2>
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

        {/* <!-- Cart Summary Section --> */}
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
              <span className="font-semibold text-gray-800">
                ${shippingCost}
              </span>
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
      </div>
    </div>
  );
};

export default Cart;
