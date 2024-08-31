import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartcontext";
import { FaCreditCard, FaPaypal, FaGooglePay } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Confirmation icon

function Checkout() {
  const { cart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setSuccessMessage(""); // Clear message when payment method is changed
  };

  const calculateTotal = () => {
    return cart
      .reduce(
        (acc, product) => acc + product.price * (product.quantity || 1),
        0
      )
      .toFixed(2);
  };

  const handleConfirmOrder = () => {
    if (paymentMethod) {
      setSuccessMessage("Order placed successfully!");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage(""); // Optionally clear message or handle post-order actions
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <ul className="space-y-4">
              {cart.map((product, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 border-b py-2"
                >
                  <img
                    src={`https://res.cloudinary.com/dfxlmzrj7/image/upload/v1724896335/${product.images}`}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <span className="block font-semibold">{product.title}</span>
                    <span className="text-gray-600">
                      ${product.price} x {product.quantity || 1}
                    </span>
                  </div>
                  <span className="font-bold">
                    ${(product.price * (product.quantity || 1)).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between font-bold">
              <span>Total</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
          <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
          <div className="space-y-4">
            <button
              onClick={() => handlePaymentMethodChange("Credit Card")}
              className={`flex items-center p-3 border rounded-lg ${
                paymentMethod === "Credit Card"
                  ? "border-blue-500 bg-blue-600"
                  : "border-gray-300 hover:bg-red-500"
              }`}
            >
              <FaCreditCard size={24} className="mr-3" />
              Credit Card
            </button>
            <button
              onClick={() => handlePaymentMethodChange("PayPal")}
              className={`flex items-center p-3 border rounded-lg ${
                paymentMethod === "PayPal"
                  ? "border-blue-500 bg-green-600"
                  : "border-gray-300 hover:bg--500"
              }`}
            >
              <FaPaypal size={24} className="mr-3" />
              PayPal
            </button>
            <button
              onClick={() => handlePaymentMethodChange("Google Pay")}
              className={`flex items-center p-3 border rounded-lg ${
                paymentMethod === "Google Pay"
                  ? "border-blue-500 bg-blue-600"
                  : "border-gray-300 hover:bg-pink-500"
              }`}
            >
              <FaGooglePay size={24} className="mr-3" />
              Google Pay
            </button>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="mt-1 text-center">
          <button
            onClick={handleConfirmOrder}
            className="bg-orange w-52 text-white py-4 px-4 rounded hover:bg-green-600"
            disabled={!paymentMethod}
          >
            Confirm Order
          </button>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mt-6 text-center text-green-600 font-semibold">
            {successMessage}
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
              {" "}
              {/* Adjusted size */}
              <div className="flex items-center justify-center mb-4">
                <AiOutlineCheckCircle size={64} className="text-green-500" />{" "}
                {/* Increased icon size */}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">
                {successMessage}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Thank you for your order! We are processing it and will send you
                a confirmation email shortly.
              </p>
              <div className="text-center">
                <button
                  onClick={closeModal}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
