const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-300 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home">
          <img
            src="assets/images/logo.svg" // Replace with your logo URL
            alt="Logo"
            className="h-4 mr-6" // Adjust height as needed
          />
        </a>

        {/* Navigation Links */}
        <ul className="flex flex-grow space-x-8 mx-4">
          <li>
            <a
              href="#collections"
              className="text-gray-600 hover:text-gray-900"
            >
              Collections
            </a>
          </li>
          <li>
            <a href="#men" className="text-gray-600 hover:text-gray-900">
              Men
            </a>
          </li>
          <li>
            <a href="#women" className="text-gray-600 hover:text-gray-900">
              Women
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>

        {/* User Image and Cart Icon */}
        <div className="flex items-center space-x-4 ml-auto">
          <a href="#cart">
            <img
              src="assets/images/icon-cart.svg" // Replace with your cart icon URL
              alt="Cart"
              className="w-6 h-6 mr-6" // Adjust width and height as needed
            />
          </a>
          <img
            src="assets/images/image-avatar.png" // Replace with your user image URL
            alt="User"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
