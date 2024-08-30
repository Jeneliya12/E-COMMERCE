import React, { useState } from "react";
import axios from "axios";
import { base_url } from "../utils/base-url"; // Import the base URL
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/usercontext"; // Custom context for user data

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Initialize the error state
  const { setUser } = useUserContext(); // Access user context
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const response = await axios.post(`${base_url}user/login`, {
        email,
        password,
      });
      const userData = response.data;
      setUser(userData); // Set user data in context
      navigate("/"); // Redirect to home page
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message); // Display error message from server
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg -mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-xl text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl text-gray-800"
            />
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-orange text-white font-semibold py-2 px-4 rounded-xl mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
