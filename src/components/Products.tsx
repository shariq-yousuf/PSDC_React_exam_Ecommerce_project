import { useEffect, useState } from "react";
import API_URL from "../config/api";
import { Link } from "react-router-dom";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const addToCart = () => {
    console.log("Added to cart");
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
        {productsData.map(({ id, image, price, title }) => (
          <Link key={id} to={`${id}`}>
            <div className="boder-green-200 cursor-pointer overflow-hidden h-96 flex flex-col justify-between rounded-lg border bg-white">
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
                <button
                  className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                  onClick={addToCart}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
