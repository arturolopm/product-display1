import {BrowserRouter as Router , Routes, Route}  from "react-router-dom";

import IndexHeader from "@/components/header/IndexHeader";
import IndexProducts from "@/components/product/IndexProducts";

import CartDetailsProvider from "@/context/useCartDetails"
import Home from "@/components/home/Home";

const App = () => {

  return (
    <>
    <CartDetailsProvider>
        <IndexHeader />
      <Router>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/product" element={<IndexProducts />} />
      </Routes>
      </Router>
    </CartDetailsProvider>
    </>
  );
};

export default App;
