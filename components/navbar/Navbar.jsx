import Image from "next/image";
import Link from "next/link";
import { Atkinson_Hyperlegible } from "next/font/google";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  return (
    <nav className="flex mx-6 md:mx-8 xl:mx-16 justify-between items-center">
      <span className="flex py-3">
        <Image
          src="/nav/arecoid_logo.png"
          alt="Arecoid Logo"
          width={105.12}
          height={100}
        />
      </span>
      <div
        className={`${atkinsonHyperlegible.className} hidden xl:flex text-arecoidBrown text-[16px] gap-1`}
      >
        <Link href={"/"} className="px-2.5 py-3">
          Home
        </Link>
        <Link href={"/"} className="px-2.5 py-3">
          About Us
        </Link>
        <Link href={"/"} className="px-2.5 py-3">
          Products
        </Link>
        <Link href={"/"} className="px-2.5 py-3">
          Manufacturing
        </Link>
        <Link href={"/"} className="px-2.5 py-3">
          Contact Us
        </Link>
      </div>
      <button className="px-3 py-3 xl:hidden">
        <Image
          src="/nav/arecoid_ham_menu.png"
          alt="Arecoid Logo"
          width={24}
          height={24}
        />
      </button>
      <button
        className={`${atkinsonHyperlegible.className} hidden text-sm leading-5 text-arecoidPrimary bg-arecoidGreen py-3.5 px-6 rounded-lg xl:block`}
      >
        Export enquires
      </button>
    </nav>
  );
}
