import Image from "next/image";
import Link from "next/link";
import { Atkinson_Hyperlegible } from "next/font/google";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <footer className="px-6 md:px-8 xl:px-16 py-10 xl:py-16 bg-arecoidCream">
      <div className="flex flex-col xl:flex-row xl:justify-between gap-10">
        <div className="flex flex-col">
          <span className="flex py-3">
            <Image
              src="/nav/arecoid_logo.png"
              alt="Arecoid Logo"
              width={105.12}
              height={100}
              priority
            />
          </span>
          <p
            className={`${atkinsonHyperlegible.className} text-sm w-3/4 xl:w-1/2 text-arecoidBrown`}
          >
            Manufacturer of eco-friendly areca leaf dinnerware from India,
            supplying bulk and export-ready products.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-16">
          <div className="flex flex-col gap-2">
            <h2
              className={`${atkinsonHyperlegible.className} text-[18px] font-bold leading-6 text-arecoidBrown`}
            >
              Links
            </h2>
            <ul
              className={`${atkinsonHyperlegible.className} text-[14px] text-arecoidBrown space-y-2`}
            >
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/manufacturing">Manufacturing</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2
              className={`${atkinsonHyperlegible.className} text-[18px] font-bold leading-6 text-arecoidBrown`}
            >
              Contact Us
            </h2>
            <ul
              className={`${atkinsonHyperlegible.className} text-[14px] text-arecoidBrown space-y-2`}
            >
              <li>📧 sales@arecoid.in</li>
              <li>📞 +91-8618168526</li>
              <li>📍 India</li>
            </ul>
          </div>
        </div>
      </div>
      <p
        className={`${atkinsonHyperlegible.className} text-xs text-center text-arecoidBrown pt-16`}
      >
        © 2026 Arecoid – Parashakthi Industries. All rights reserved.
      </p>
    </footer>
  );
}
