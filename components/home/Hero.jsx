import Image from "next/image";
import { League_Spartan, Atkinson_Hyperlegible } from "next/font/google";

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
    <section className="mx-6 flex flex-col gap-8 py-4">
      <div className="relative aspect-square">
        <Image
          src="/hero/heroImg.png"
          alt="Hero Image"
          fill
          priority
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4 items-start">
        <h1
          className={`${leagueSpartan.className} text-4xl leading-11 font-bold text-arecoidGreen`}
        >
          Sustainable Areca Leaf Dinnerware Manufacturer from India
        </h1>
        <p
          className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown`}
        >
          Arecoid, a unit of Parashakthi Industries, specializes in eco-friendly
          areca leaf dinnerware for export and domestic markets.
        </p>
        <button
          className={`${atkinsonHyperlegible.className} text-sm leading-5 text-arecoidPrimary bg-arecoidGreen py-3.5 px-6 rounded-lg mt-3`}
        >
          Contact for export enquires
        </button>
      </div>
    </section>
  );
}
