import { Link } from "react-router-dom"
import { ProductType } from "../../utils/types/types"

const Product = ({
  addProductToCart,
  product,
}: {
  product: ProductType
  addProductToCart: (product: ProductType) => void
}) => {
  const { id, title, price, image } = product

  return (
    <div className="boder-green-200 overflow-hidden min-h-96 flex flex-col justify-between rounded-lg border bg-white">
      <img
        className="h-48 w-full object-cover"
        src={image}
        alt={`Product ${id}`}
      />
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mb-4 text-gray-600">${price}</p>
        <div className="flex justify-between">
          <button
            className="w-28 rounded bg-red-500 px-4 py-2 text-center text-white hover:bg-red-600"
            onClick={() => addProductToCart(product)}
          >
            Buy Now
          </button>
          <Link
            to={id.toString()}
            className="w-28 rounded text-center bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product
