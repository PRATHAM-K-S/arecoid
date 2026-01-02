import { League_Spartan, Atkinson_Hyperlegible } from "next/font/google";
import Image from "next/image";

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
    <section className="grid gap-4 xl:grid-cols-2 items-center">
      <div>
        <h2
          className={`${leagueSpartan.className} text-arecoidGreen font-semibold text-[32px] leading-10 sm:text-4xl sm:leading-11 xl:text-[40px] xl:leading-13`}
        >
          Sustainability at the Core
        </h2>
      </div>
      <div className="relative aspect-video xl:aspect-square xl:w-3/4 xl:place-self-end rounded-lg overflow-clip xl:row-end-3 xl:row-start-1 xl:col-start-2">
        <Image
          src={"/about/sustainability.png"}
          alt={"Employees working inside an areca leaf dinnerware industry"}
          fill
          className="object-cover"
        />
      </div>
      <div className="xl:row-start-2">
        <p
          className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown`}
        >
          All Arecoid products are made from naturally fallen areca palm leaves
          — no trees are cut, no chemicals are used, and no additives are added.
          <br />
          <br />
          Our dinnerware is:
          <br />
        </p>
        <ul
          className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown list-disc list-inside space-y-2 mt-3`}
        >
          <li>100% biodegradable</li>
          <li>Compostable</li>
          <li>Plastic-free</li>
          <li>Safe for hot and cold food</li>
        </ul>
        <br />
        <p
          className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown`}
        >
          By choosing Arecoid, buyers support a cleaner supply chain and a
          sustainable alternative to plastic and paper-based tableware.
        </p>
      </div>
    </section>
  );
}
