import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import HeroSection from "./component/herosection";
import Login from "./component/login";
import Register from "./component/register";
import { CartProvider } from "./component/context/cartcontext";
function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  );
}

export default App;
