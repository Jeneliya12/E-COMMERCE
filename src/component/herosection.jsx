import React from "react";

const HeroSection = () => {
  return (
    <section className="relative py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-start space-x-4">
        {/* Full-Width Image */}
        <div className="w-full md:w-1/2 h-1/2 relative mb-4 md:mb-0">
          <img
            src="assets/images/image-product-1.jpg"
            alt="Full Width"
            s
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Image Column with Large and Small Images */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4 py-10">
          <div className="relative w-full h-80">
            <img
              src="assets/images/image-product-2.jpg"
              alt="Large"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2 h-80 relative">
              <img
                src="assets/images/image-product-3.jpg"
                alt="Small 1"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="w-1/2 h-80 relative">
              <img
                src="assets/images/image-product-4.jpg"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* New Section with Icons and Details */}
      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Free Shipping */}
        <div className="flex items-center p-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Free Shipping Icon"
            className="mr-3"
          />
          <div>
            <h3 className="text-lg font-semibold">Free Shipping</h3>
            <p className="text-gray-600">Orders $50 or more</p>
          </div>
        </div>

        {/* Free Returns */}
        <div className="flex items-center p-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Free Returns Icon"
            className="mr-3"
          />
          <div>
            <h3 className="text-lg font-semibold">Free Returns</h3>
            <p className="text-gray-600">Within 30 days</p>
          </div>
        </div>

        {/* Get 20% Off */}
        <div className="flex items-center p-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Get 20% Off Icon"
            className="mr-3"
          />
          <div>
            <h3 className="text-lg font-semibold">Get 20% Off 1 Item</h3>
            <p className="text-gray-600">When you sign up</p>
          </div>
        </div>

        {/* We Support */}
        <div className="flex items-center p-4">
          <img
            src="https://via.placeholder.com/40"
            alt="We Support Icon"
            className="mr-3"
          />
          <div>
            <h3 className="text-lg font-semibold">We Support</h3>
            <p className="text-gray-600">24/7 amazing services</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
