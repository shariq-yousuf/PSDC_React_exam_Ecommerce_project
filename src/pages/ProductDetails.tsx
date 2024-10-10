import { useEffect, useState } from "react";
import API_URL from "../config/api";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });
  const { title, image, price, description, category } = product;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`${API_URL}/${productId}`);
    const data = await response.json();
    setProduct(data);
  };

  return (
    <div className="container mx-auto max-w-6xl p-6">
      <div className="flex flex-col overflow-hidden rounded-lg border border-green-200 bg-white lg:flex-row">
        {/* <!-- Product Image --> */}
        <div className="lg:w-1/2">
          <img
            className="h-96 w-full object-cover"
            src={image}
            alt="Product Image"
          />
        </div>

        {/* <!-- Product Info --> */}
        <div className="p-6 lg:w-1/2">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">{title}</h2>
          <p className="mb-2 text-sm text-gray-500">Category: {category}</p>

          <p className="mb-6 text-gray-700">{description}</p>

          <p className="mb-6 text-2xl font-semibold text-gray-800">${price}</p>

          {/* <!-- Buy Now Button --> */}
          <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
