import { Link } from "react-router-dom";
import { useCart } from "./context/cartcontext";

const Header = () => {
  const { isCartEmpty, isCartMessageVisible, handleCartClick } = useCart();

  return (
    <nav className="bg-white border-b border-gray-300 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="assets/images/logo1.png" // Replace with your logo URL
            alt="Logo"
            className="h-14 mr-6" // Adjust height as needed
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-grow space-x-8 mx-4">
          <li>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <a href="#shop" className="text-gray-600 hover:text-gray-900">
              Shop
            </a>
          </li>
          <li>
            <a href="#product" className="text-gray-600 hover:text-gray-900">
              Product
            </a>
          </li>
          <li>
            <a href="#pages" className="text-gray-600 hover:text-gray-900">
              Pages
            </a>
          </li>
          <li>
            <a href="#blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </a>
          </li>
          <li>
            <a href="#element" className="text-gray-600 hover:text-gray-900">
              Elements
            </a>
          </li>
        </ul>

        {/* User Image and Cart Icon */}
        <div className="flex items-center space-x-4 ml-auto">
          <Link to="/login" className="text-gray-600 hover:text-gray-900">
            Login
          </Link>
          <Link to="/register" className="text-gray-600 hover:text-gray-900">
            Register
          </Link>
          <a
            href="#cart"
            onClick={(e) => {
              e.preventDefault();
              handleCartClick();
            }}
          >
            <img
              src="assets/images/icon-cart.svg" // Replace with your cart icon URL
              alt="Cart"
              className="w-6 h-6 mr-6" // Adjust width and height as needed
            />
          </a>
          {/* Empty Cart Message */}
          {isCartMessageVisible && isCartEmpty && (
            <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <p className="text-center text-gray-600">Your cart is empty</p>
            </div>
          )}
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
