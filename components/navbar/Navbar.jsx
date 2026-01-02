"use client";

import Image from "next/image";
import Link from "next/link";
import { Atkinson_Hyperlegible } from "next/font/google";
import { useState } from "react";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setisMenuOpen((prev) => !prev);
  };

  return (
    <nav className="grid grid-cols-2 px-6 md:px-8 xl:px-16 justify-between items-center bg-arecoidPrimary sticky top-0 z-10">
      <span className="flex py-3">
        <Image
          src="/nav/arecoid_logo.png"
          alt="Arecoid Logo"
          width={105.12}
          height={100}
          priority
        />
      </span>
      <div
        className={`${atkinsonHyperlegible.className} ${
          isMenuOpen
            ? "flex justify-center absolute bg-arecoidPrimary w-full py-4 top-16"
            : "hidden xl:flex"
        } flex-col col-span-2 place-self-center place-items-center xl:col-span-1 xl:flex-row text-arecoidBrown text-lg gap-1 xl:place-self-end`}
      >
        <Link onClick={handleMenuToggle} href={"/"} className="px-2.5 py-3">
          Home
        </Link>
        <Link
          onClick={handleMenuToggle}
          href={"/about"}
          className="px-2.5 py-3"
        >
          About Us
        </Link>
        <Link
          onClick={handleMenuToggle}
          href={"/products"}
          className="px-2.5 py-3"
        >
          Products
        </Link>
        <Link
          onClick={handleMenuToggle}
          href={"/manufacturing"}
          className="px-2.5 py-3"
        >
          Manufacturing
        </Link>
        <Link
          onClick={handleMenuToggle}
          href={"/contact"}
          className="px-2.5 py-3"
        >
          Contact Us
        </Link>
      </div>
      <button
        onClick={handleMenuToggle}
        className="px-3 py-3 flex justify-end items-center col-start-2 row-start-1 xl:hidden"
      >
        <Image
          src="/nav/arecoid_ham_menu.png"
          alt="Arecoid Logo"
          width={24}
          height={24}
          priority
        />
      </button>
    </nav>
  );
}
