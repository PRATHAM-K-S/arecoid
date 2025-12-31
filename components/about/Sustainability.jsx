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

export default function Sustainability() {
  return (
    <section className="flex flex-col mx-6 gap-6">
      <h2
        className={`${leagueSpartan.className} text-[32px] leading-10 font-semibold text-arecoidGreen`}
      >
        Sustainability at the Core
      </h2>
      <div className="relative aspect-video">
        <Image
          src={"/about/sustainability.png"}
          alt={"areca leaf plates"}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <p
          className={`${atkinsonHyperlegible.className} leading-6 text-arecoidBrown`}
        >
          All Arecoid products are made from naturally fallen areca palm leaves
          — no trees are cut, no chemicals are used, and no additives are added.
          <br />
          <br />
        </p>
        <p
          className={`${atkinsonHyperlegible.className} leading-6 text-arecoidBrown`}
        >
          Our dinnerwaree is:
        </p>
        <ul
          className={`${atkinsonHyperlegible.className} list-disc list-inside leading-6 text-arecoidBrown mt-2`}
        >
          <li>100% biodegradable</li>
          <li>Compostable</li>
          <li>Plastic-free</li>
          <li>Safe for hot and cold food</li>
        </ul>
        <br />
        <p
          className={`${atkinsonHyperlegible.className} leading-6 text-arecoidBrown`}
        >
          By choosing Arecoid, buyers support a cleaner supply chain and a
          sustainable alternative to plastic and paper-based tableware.
        </p>
      </div>
    </section>
  );
}
