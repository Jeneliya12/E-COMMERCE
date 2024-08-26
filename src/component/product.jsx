import { useState } from "react";
import Thumbnail from "./thumbnail";
import AddToCart from "./addtocart";

const Product = () => {
  const [activeImage, setActiveImage] = useState("");

  const thumbnails = [
    {
      thumbnailSrc: "assets/images/image-product-1-thumbnail.jpg",
      fullSizeSrc: "assets/images/image-product-1.jpg",
      alt: "Thumbnail 1",
    },
    {
      thumbnailSrc: "assets/images/image-product-2-thumbnail.jpg",
      fullSizeSrc: "assets/images/image-product-2.jpg",
      alt: "Thumbnail 2",
    },
    {
      thumbnailSrc: "assets/images/image-product-3-thumbnail.jpg",
      fullSizeSrc: "assets/images/image-product-3.jpg",
      alt: "Thumbnail 3",
    },
    {
      thumbnailSrc: "assets/images/image-product-4-thumbnail.jpg",
      fullSizeSrc: "assets/images/image-product-4.jpg",
      alt: "Thumbnail 4",
    },
  ];

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
          {thumbnails.map((thumbnail, index) => (
            <Thumbnail
              key={index}
              src={thumbnail.thumbnailSrc}
              alt={thumbnail.alt}
              isActive={activeImage === thumbnail.fullSizeSrc}
              onClick={() => handleThumbnailClick(thumbnail.fullSizeSrc)}
            />
          ))}
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
        <AddToCart />
      </div>
    </div>
  );
};

export default Product;
