import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import HeroSection from "./component/herosection";
import Login from "./component/login";
import Register from "./component/register";
import { UserProvider } from "./component/context/usercontext";
import { CartProvider } from "./component/context/cartcontext";
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
