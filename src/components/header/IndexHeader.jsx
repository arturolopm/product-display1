import React, { useState } from "react";

import { Link } from "react-router-dom";
import logoJade from "@/assets/images/logo.svg";

import MenuIcon from "@/components/icons/MenuIcon";

import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";

import CartHeader from "@/components/header/CartHeader";
import ProfileMenu from "./ProfileMenu";

const IndexHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <div>
      <header className="  container relative z-10 mx-auto flex items-center gap-8 p-4 md:p-0">
        <button className=" md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <Link to="/">
          <img
            className=" mx-4 mr-auto mb-1 h-10 md:mr-5"
            src={logoJade}
            alt="Logo Jade"
          />
        </Link>
        <nav
          className={` mx-auto flex flex-col bg-white font-bold text-green-primary md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4  md:p-0  ${
            isOpenMenu
              ? "z-9 fixed top-0 left-0 flex h-full w-2/5 flex-col gap-y-[1px]  p-5  md:p-8"
              : "hidden"
          }`}
        >
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Products" />

          <NavLinkHeader text="Colections" />
          <NavLinkHeader text="Contact" />
        </nav>
        <div className=" ml-auto flex gap-4">
          <CartHeader />
          <ProfileMenu />
        </div>
      </header>
      <span className="container mx-auto mb-2 h-[1px] w-full bg-gray-500 md:block"></span>
    </div>
  );
};

export default IndexHeader;
