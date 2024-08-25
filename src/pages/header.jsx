const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-300 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home">
          <img
            src="https://via.placeholder.com/120x40?text=Logo" // Replace with your logo URL
            alt="Logo"
            className="h-8" // Adjust height as needed
          />
        </a>

        {/* Navigation Links */}
        <ul className="flex flex-grow space-x-8 mx-4">
          <li>
            <a
              href="#collections"
              className="text-gray-700 hover:text-gray-900"
            >
              Collections
            </a>
          </li>
          <li>
            <a href="#men" className="text-gray-700 hover:text-gray-900">
              Men
            </a>
          </li>
          <li>
            <a href="#women" className="text-gray-700 hover:text-gray-900">
              Women
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>

        {/* User Image and Cart Icon */}
        <div className="flex items-center space-x-4 ml-auto">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <a href="#cart" className="text-gray-700 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2m1.6 0h12l.4-2h2m-2 2v2H5V5m0 0l.4 2h12L19 5M4 17a2 2 0 11-4 0 2 2 0 014 0zM16 17a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
