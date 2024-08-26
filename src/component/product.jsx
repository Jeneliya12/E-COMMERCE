import { useState } from "react";
import Thumbnail from "./thumbnail";

const Product = () => {
  const [activeImage, setActiveImage] = useState("");

  const handleThumbnailClick = (src) => {
    setActiveImage(src);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-28 px-4 mx-auto max-w-6xl">
      {/* Product Image */}
      <div className="flex flex-col items-center justify-center">
        {/* Product Image */}
        <img
          src={activeImage || "assets/images/image-product-1.jpg"}
          alt="Product 1"
          className="w-full h-auto object-cover rounded-lg shadow-lg mb-6"
        />
        {/* Thumbnails */}
        <div className="flex justify-between mt-4 w-full">
          <Thumbnail
            src="assets/images/image-product-1-thumbnail.jpg"
            alt="Thumbnail 1"
            isActive={activeImage === "assets/images/image-product-1.jpg"}
            onClick={() =>
              handleThumbnailClick("assets/images/image-product-1.jpg")
            }
          />
          <Thumbnail
            src="assets/images/image-product-2-thumbnail.jpg"
            alt="Thumbnail 2"
            isActive={activeImage === "assets/images/image-product-2.jpg"}
            onClick={() =>
              handleThumbnailClick("assets/images/image-product-2.jpg")
            }
          />
          <Thumbnail
            src="assets/images/image-product-3-thumbnail.jpg"
            alt="Thumbnail 3"
            isActive={activeImage === "assets/images/image-product-3.jpg"}
            onClick={() =>
              handleThumbnailClick("assets/images/image-product-3.jpg")
            }
          />
          <Thumbnail
            src="assets/images/image-product-4-thumbnail.jpg"
            alt="Thumbnail 4"
            isActive={activeImage === "assets/images/image-product-4.jpg"}
            onClick={() =>
              handleThumbnailClick("assets/images/image-product-4.jpg")
            }
          />
        </div>
      </div>

      {/* Product Description */}
      <div className="flex flex-col justify-center p-6 space-y-4 -mt-16">
        <p className="font-semibold text-gray-600 py-2">SNEAKER COMPANY</p>
        <h1 className="font-bold text-4xl py-2">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-gray-600 py-2">
          This is a brief description of the product. It provides key details
          about the product to inform potential buyers.
        </p>
        {/* Price Section */}
        <div className="py-2">
          <p className="text-2xl font-bold text-gray-800">$125.00</p>
          <p className="text-xl font-bold text-gray-400 line-through my-2">
            $250.00
          </p>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center space-x-4">
          {/* Quantity Controls */}
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button className="flex items-center justify-center px-4 py-2 border-r border-gray-300 hover:bg-gray-200">
              <img
                src="assets/images/icon-minus.svg"
                alt="Decrease"
                className="w-4 h-4"
              />
            </button>
            <span className="px-4 py-2 text-gray-800">1</span>
            <button className="flex items-center justify-center px-4 py-2 border-l border-gray-300 hover:bg-gray-200">
              <img
                src="assets/images/icon-plus.svg"
                alt="Increase"
                className="w-4 h-4"
              />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="flex items-center bg-orange text-black py-4 px-16 rounded-lg">
            <img src="assets/images/icon-cart.svg" className="pr-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
