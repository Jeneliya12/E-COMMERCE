const HeroSection = () => {
  return (
    <section className="relative py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-start space-x-4">
        {/* Full-Width Image */}
        <div className="w-full md:w-1/2 h-1/2 relative mb-4 md:mb-0">
          <img
            src="assets/images/image-product-1.jpg"
            alt="Full Width"
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

      {/* Currently Popular Items Section */}
      <section className="container mx-auto mt-10 pb-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Currently Popular Items
        </h2>

        {/* Categories */}
        <div className="flex space-x-8 mb-8 justify-center">
          <button className="text-lg font-semibold text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
            New
          </button>
          <button className="text-lg font-semibold text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
            Featured
          </button>
          <button className="text-lg font-semibold text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
            Best Seller
          </button>
        </div>

        {/* Product Images */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8">
          {/* Product 1 */}
          <div className="relative">
            <img
              src="assets/images/image-product-1.jpg"
              alt="New Product"
              className="w-80 h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product 2 */}
          <div className="relative">
            <img
              src="assets/images/image-product-2.jpg"
              alt="Featured Product"
              className="w-80 h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product 3 */}
          <div className="relative">
            <img
              src="assets/images/image-product-3.jpg"
              alt="Best Seller Product"
              className="w-80 h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product 4 */}
          <div className="relative">
            <img
              src="assets/images/image-product-3.jpg"
              alt="Best Seller Product"
              className="w-80 h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="relative">
            <img
              src="assets/images/image-product-1.jpg"
              alt="New Product"
              className="w-80 h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product 2 */}
          <div className="relative">
            <img
              src="assets/images/image-product-2.jpg"
              alt="Featured Product"
              className="w-80 h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product 3 */}
          <div className="relative">
            <img
              src="assets/images/image-product-3.jpg"
              alt="Best Seller Product"
              className="w-80 h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product 4 */}
          <div className="relative">
            <img
              src="assets/images/image-product-3.jpg"
              alt="Best Seller Product"
              className="w-80 h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/*Signup banner */}
      <div
        className="relative py-16 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1200x400')`,
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sign up for email & get 25% off
          </h2>
          <p className="text-lg text-white mb-6">
            Subscribe to get information about products and coupons
          </p>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2  border-none text-gray-800"
            />
            <button className="bg-orange  text-gray-800 font-semibold py-2 px-4">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* New Blog Posts Section */}
      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">New Blog Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <div className="overflow-hidden">
            <img
              src="assets/images/image-product-1.jpg"
              alt="The Art of Minimalism"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                The Art of Minimalism
              </h3>
              <p className="text-gray-600 mb-4">
                Discover how to live more with less in our latest exploration of
                minimalist design and lifestyle choices.
              </p>
              <a href="#" className="text-gray-700">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="overflow-hidden">
            <img
              src="assets/images/image-product-2.jpg"
              alt="The Art of Minimalism"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                The Art of Minimalism
              </h3>
              <p className="text-gray-600 mb-4">
                Discover how to live more with less in our latest exploration of
                minimalist design and lifestyle choices.
              </p>
              <a href="#" className="text-gray-700">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="overflow-hidden">
            <img
              src="assets/images/image-product-3.jpg"
              alt="The Art of Minimalism"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                The Art of Minimalism
              </h3>
              <p className="text-gray-600 mb-4">
                Discover how to live more with less in our latest exploration of
                minimalist design and lifestyle choices.
              </p>
              <a href="#" className="text-gray-700">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* View More Articles Button */}
        <div className="text-center mt-6">
          <button className="bg-orange text-white font-semibold py-3 px-6">
            View More Articles
          </button>
        </div>
      </div>

      {/* Follow Us on Instagram Section */}
      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold text-center py-6">
          Follow Us on Instagram
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-6 pb-6">
          {/* Instagram Image 1 */}
          <div className="w-full h-48 bg-white overflow-hidden">
            <img
              src="https://via.placeholder.com/600x600"
              alt="Instagram 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Instagram Image 2 */}
          <div className="w-full h-48 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/600x600"
              alt="Instagram 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Instagram Image 3 */}
          <div className="w-full h-48 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/600x600"
              alt="Instagram 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Instagram Image 4 */}
          <div className="w-full h-48 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/600x600"
              alt="Instagram 4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Instagram Image 5 */}
          <div className="w-full h-48 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/600x600"
              alt="Instagram 5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
