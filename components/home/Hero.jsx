import Image from "next/image";
import { League_Spartan, Atkinson_Hyperlegible } from "next/font/google";
import Link from "next/link";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <section className="mx-6 flex flex-col md:mx-8 xl:flex-row-reverse xl:items-center xl:mx-16 gap-8 py-4 xl:py-16">
      <div className="relative aspect-square xl:w-3/4">
        <Image
          src="/hero/heroImg.png"
          alt="areca leaf dinnerware"
          fill
          priority
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4 items-start">
        <h1
          className={`${leagueSpartan.className} text-4xl leading-11 md:text-[44px] md:leading-13 xl:text-[52px] xl:leading-16 font-bold text-arecoidGreen`}
        >
          Sustainable Areca Leaf Dinnerware Manufacturer from India
        </h1>
        <p
          className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown xl:w-3/4`}
        >
          Arecoid, a unit of Parashakthi Industries, specializes in eco-friendly
          areca leaf dinnerware for export and domestic markets.
        </p>
        <Link
          href={"/contact"}
          className={`${atkinsonHyperlegible.className} text-sm leading-5 text-arecoidPrimary bg-arecoidGreen py-3.5 px-6 rounded-lg mt-3`}
        >
          Contact for export enquires
        </Link>
      </div>
    </section>
  );
}
