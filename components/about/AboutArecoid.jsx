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

export default function AboutArecoid() {
  return (
    <section className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center">
      <div className="flex flex-col gap-4">
        <h1
          className={`${leagueSpartan.className} text-4xl leading-11 md:text-[44px] md:leading-13 xl:text-[52px] xl:leading-16 font-bold text-arecoidGreen`}
        >
          About Arecoid
        </h1>
        <p
          className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown`}
        >
          An export-focused areca leaf dinnerware brand from India
        </p>
      </div>
      <div className="relative aspect-video xl:aspect-square rounded-lg overflow-clip xl:w-1/2">
        <Image
          src={"/about/aboutHero.png"}
          alt={"Employees working inside an areca leaf dinnerware industry"}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
