import {BrowserRouter as Router , Routes, Route}  from "react-router-dom";

import IndexHeader from "@/components/header/IndexHeader";
import IndexProducts from "@/components/product/IndexProducts";

import CartDetailsProvider from "@/context/useCartDetails"
import Home from "@/components/home/Home";

const App = () => {

  return (
    <>
    <CartDetailsProvider>
        
      <Router>
      <Routes>
      
       <Route path="/" element={[<IndexHeader />,<Home />]} />
        <Route path="/products" element={[<IndexHeader />,<IndexProducts />]} />
      </Routes>
      </Router>
    </CartDetailsProvider>
    </>
  );
};

export default App;
