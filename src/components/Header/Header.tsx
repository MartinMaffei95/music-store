"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiGuitarBassHead } from "react-icons/gi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { StyledHeader } from "@/styled-components";
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <StyledHeader>
      <div className="header_content flex justify-between w-full max-w-screen h-20 bg-neutral-700 text-neutral-50 px-4 py-2 ">
        <div className="bg-red-500 h-full w-16 rounded-full flex justify-center items-center ">
          <GiGuitarBassHead className="text-5xl" />
        </div>
        <div
          onClick={handleOpen}
          className="flex justify-center items-center gap-2 text-xl uppercase"
        >
          <p>Menu</p>
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
      <nav
        className={`header_nav bg-neutral-600 bg-opacity-70  ${
          open ? "open" : ""
        }`}
      >
        <ul className="flex item-self-end gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Sobre nosotros</Link>
          </li>
          <li>
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
