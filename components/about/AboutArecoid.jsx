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
    <section className="grid gap-8 xl:grid-cols-2">
      <div className="flex flex-col gap-4 place-content-center">
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
      <div className="relative aspect-video xl:aspect-square rounded-lg overflow-clip xl:col-start-2 xl:row-start-1 xl:row-end-3 xl:w-3/4 xl:place-self-end">
        <Image
          src={"/about/aboutHero.png"}
          alt={"Employees working inside an areca leaf dinnerware industry"}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h2
          className={`${leagueSpartan.className} text-arecoidGreen font-semibold text-[32px] leading-10 sm:text-4xl sm:leading-11 xl:text-[40px] xl:leading-13`}
        >
          Who We Are
        </h2>
        <p
          className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown`}
        >
          Arecoid is an export-focused brand specializing in eco-friendly areca
          leaf dinnerware. We are a unit of Parashakthi Industries, a
          manufacturing company based in India with hands-on experience in
          producing natural, sustainable tableware.
          <br />
          <br />
          With a strong foundation in domestic manufacturing, Arecoid was
          created to serve global markets with high-quality, biodegradable
          dinnerware made from naturally fallen areca palm leaves.
        </p>
      </div>
    </section>
  );
}
