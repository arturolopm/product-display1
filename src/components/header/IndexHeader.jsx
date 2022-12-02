import {useState, useContext} from 'react'
import {useCartDetails} from '@/context/useCartDetails'
import logoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";


import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";

import CardDetailsHeader from '@/components/header/CartDetailsHeader';

const IndexHeader = () => {
  const{cartQuantity} = useContext(useCartDetails)

  const [isOpenMenu, setIsOpenMenu ] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)

 

  const handleOpenMenu = () => {
    setIsOpenMenu(true)
  }
  const handleCloseMenu = () => {
    setIsOpenMenu(false)
  }
   const handleOpenCart = () => {
    setIsOpenCart(!isOpenCart)
   }
  
  
  
  return (
    <>

    <header className="relative container mx-auto flex items-center gap-8 p-4 md:p-0">
      <button className="md:hidden" onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      <img className="mr-auto mb-1 h-5 md:mr-0" 
            src={logoSneakers} 
            alt="Logo Sneakers" />
      <nav 
        className={` font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4  md:p-0  ${
          isOpenMenu 
            ?  'absolute top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8 ' : 'hidden'
            }`}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collections" />
          <NavLinkHeader text="Men" />
          <NavLinkHeader text="Woman" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
          
      </nav>
      <div className="flex gap-4">
        <button 
          onClick={handleOpenCart}
          className="relative">
          <CartIcon />
          <span className=' absolute bg-orange-primary px-1 top-1 right-0 text-[0.6rem] rounded-lg text-white font-bold'>
            {cartQuantity}
          </span>
        </button>
        <img src={AvatarImage} className="w-10" alt=""></img>
        {
          isOpenCart && <CardDetailsHeader />
        }
      </div>
    </header>
    <span className="container mb-2 mx-auto h-[1px] w-full bg-gray-500 md:block"></span>
    </>
  );
};

export default IndexHeader;
