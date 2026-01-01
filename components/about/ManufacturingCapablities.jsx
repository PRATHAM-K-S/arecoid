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

export default function ManufacturingCapablities() {
  return (
    <section className="grid gap-4 xl:grid-cols-2 items-center">
      <div>
        <h2
          className={`${leagueSpartan.className} text-arecoidGreen font-semibold text-[32px] leading-10 sm:text-4xl sm:leading-11 xl:text-[40px] xl:leading-13`}
        >
          Manufacturing Capablities
        </h2>
      </div>
      <div className="relative aspect-video rounded-lg overflow-clip xl:row-end-3 xl:row-start-1 xl:col-start-2">
        <Image
          src={"/about/hydraulicMachines.png"}
          alt={"Employees working inside an areca leaf dinnerware industry"}
          fill
          className="object-cover"
        />
      </div>
      <div className="xl:row-start-2">
        <p
          className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown`}
        >
          Our products are manufactured in-house using carefully selected areca
          palm leaves and modern hydraulic pressing technology.
          <br />
          <br />
          Each product undergoes controlled molding, heat treatment, and quality
          inspection to ensure durability, hygiene, and consistency.
          <br />
          <br />
          Production capacity:
        </p>
        <ul
          className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown list-disc list-inside space-y-2 mt-3`}
        >
          <li>Up to 1,00,000 plates per month</li>
          <li>Scalable for bulk and container-level export orders</li>
        </ul>
      </div>
    </section>
  );
}
