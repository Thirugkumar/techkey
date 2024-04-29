import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import Footer from "./component/Footer";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Home from "./pages/home";
import Checkout from "./pages/cart/checkout";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}
export default App;
