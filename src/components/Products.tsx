import { useEffect, useState } from "react";
import API_URL from "../config/api";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { Product } from "../config/types";
import { nanoid } from "nanoid";
import { addCost } from "../slices/costSlice";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const addProductToCart = (product: Product) => {
    const productWithShoppingId = {
      ...product,
      shoppingId: nanoid(),
    };

    dispatch(addCost(product.price));
    dispatch(addToCart(productWithShoppingId));
  };

  const getData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setProductsData(data);
  };

  return (
    <div className="container mx-auto bg-white p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Featured Products
      </h1>
      {/* <!-- Product Grid --> */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* <!-- Product Card --> */}
        {productsData.map((product: Product) => {
          const { id, title, image, price } = product;

          return (
            <div
              key={id}
              className="boder-green-200 overflow-hidden h-96 flex flex-col justify-between rounded-lg border bg-white"
            >
              <img
                className="h-48 w-full object-cover"
                src={image}
                alt={`Product ${id}`}
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {title}
                </h3>
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
          );
        })}
      </div>
    </div>
  );
};

export default Products;
