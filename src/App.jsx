import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/header";
import HeroSection from "./pages/herosection";
import Login from "./pages/login";
import Register from "./pages/register";
import { UserProvider } from "./context/usercontext";
import { CartProvider } from "./context/cartcontext";
function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </CartProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
