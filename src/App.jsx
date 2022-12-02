import IndexHeader from "@/components/header/IndexHeader";
import IndexProducts from "@/components/product/IndexProducts";

import CartDetailsProvider from "@/context/useCartDetails"

const App = () => {

  return (
    <CartDetailsProvider>
      <IndexHeader />
      <IndexProducts />
    </CartDetailsProvider>
  );
};

export default App;
