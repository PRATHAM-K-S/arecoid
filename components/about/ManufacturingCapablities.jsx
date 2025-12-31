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

export default function ManufacturingCapablities() {
  return (
    <section className="flex flex-col mx-6 gap-6">
      <h2
        className={`${leagueSpartan.className} text-[32px] leading-10 font-semibold text-arecoidGreen`}
      >
        Manufacturing Capablities
      </h2>
      <div className="relative aspect-video">
        <Image
          src={"/about/hydraulicMachines.png"}
          alt={"areca leaf plates"}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <p
          className={`${atkinsonHyperlegible.className} leading-6 text-arecoidBrown`}
        >
          Our products are manufactured in-house using carefully selected areca
          palm leaves and modern hydraulic pressing technology.
          <br />
          <br />
          Each product undergoes controlled molding, heat treatment, and quality
          inspection to ensure durability, hygiene, and consistency.
          <br />
          <br />
        </p>
        <p
          className={`${atkinsonHyperlegible.className} leading-6 text-arecoidBrown`}
        >
          Production capacity:
        </p>
        <ul className={`${atkinsonHyperlegible.className} list-disc list-inside leading-6 text-arecoidBrown mt-2`}>
          <li>Up to 1,00,000 plates per month</li>
          <li>Scalable for bulk and container-level export orders</li>
        </ul>
      </div>
    </section>
  );
}
