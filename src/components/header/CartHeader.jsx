import { useCartDetails } from "@/context/useCartDetails";
import CartIcon from "@/components/icons/CartIcon";
import CardDetailsHeader from "@/components/header/CartDetailsHeader";
import { useContext, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";

const CartHeader = () => {
  const { cartQuantity } = useContext(useCartDetails);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const divRef = useClickOutside(() => setIsOpenCart(false));

  const handleOpenCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  return (
    <div ref={divRef}>
      <button onClick={handleOpenCart} className="relative">
        <CartIcon />
        <span className=" absolute top-1 right-0 rounded-lg bg-green-primary px-1 text-[0.6rem] font-bold text-white">
          {cartQuantity}
        </span>
      </button>
      {isOpenCart && <CardDetailsHeader />}
    </div>
  );
};
export default CartHeader;
