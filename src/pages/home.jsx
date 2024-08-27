import Header from "../component/header";
import HeroSection from "../component/herosection";
// import Product from "../component/product";
import { CartProvider } from "../component/context/cartcontext";
function Home() {
  return (
    <>
      <CartProvider>
        <Header />
        <HeroSection />
        {/* <Product /> */}
      </CartProvider>
    </>
  );
}

export default Home;
