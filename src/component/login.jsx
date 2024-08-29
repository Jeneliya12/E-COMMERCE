function Login() {
  return (
    <>
      {/* Login Form Section */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg -mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-xl text-gray-800"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-xl text-gray-800"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange text-white font-semibold py-2 px-4 rounded-xl mt-4"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-orange">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
