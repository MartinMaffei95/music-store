import React from "react";
import { GiGuitarBassHead } from "react-icons/gi";
const Header = () => {
  return (
    <header className="flex justify-between w-full h-20 bg-neutral-700 text-neutral-50 px-4 py-2">
      <div className="bg-red-500 h-full w-16 rounded-full flex justify-center items-center ">
        <GiGuitarBassHead className="text-5xl" />
      </div>
      <nav className="self-end">
        <ul className="flex item-self-end gap-4">
          <li>Home</li>
          <li>Sobre nosotros</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
