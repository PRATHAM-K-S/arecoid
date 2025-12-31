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
    <section className="flex flex-col mx-6 gap-6">
      <div className="space-y-2">
        <h1
          className={`${leagueSpartan.className} text-4xl text-arecoidGreen leading-11 font-bold`}
        >
          About Arecoid
        </h1>
        <p className={`${atkinsonHyperlegible.className} leading-6 text-arecoidBrown w-3/4 `}>
          An export-focused areca leaf dinnerware manufacturer from India
        </p>
      </div>
      <div className="relative aspect-video">
        <Image
          src={"/about/aboutHero.png"}
          alt={"areca leaf plates"}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
