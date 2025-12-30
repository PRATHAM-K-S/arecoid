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

export default function WhyArecoid() {
  return (
    <section className="mx-6 pt-16 flex flex-col gap-8 sm:mx-8 xl:mx-16">
      <h2
        className={`${leagueSpartan.className} text-arecoidGreen font-bold text-[32px] leading-10 sm:text-4xl sm:leading-11 xl:text-[40px] xl:leading-13`}
      >
        Why Arecoid?
      </h2>
      <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-4">
        <div className="flex gap-4 items-center bg-arecoidCream px-6 py-10 sm:py-12 sm:px-8 xl:py-16 xl:px-10 rounded-lg">
          <span className="aspect-square relative">
            <Image
              src={"/whyArecoid/manufacture.png"}
              alt={"Manufacturing Icon"}
              width={56}
              height={56}
              priority
            />
          </span>
          <div className="flex flex-col">
            <h3
              className={`${leagueSpartan.className} text-arecoidGreen text-xl font-bold leading-7 sm:text-2xl sm:leading-8 xl:text-[28px] xl:leading-9`}
            >
              Export-Grade Manufacturing
            </h3>
            <p className={`${atkinsonHyperlegible.className} leading-6`}>
              Consistent, export-grade quality for global markets
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center bg-arecoidCream px-6 py-10 sm:py-12 sm:px-8 xl:py-16 xl:px-10 rounded-lg">
          <span className="aspect-square relative">
            <Image
              src={"/whyArecoid/chemical-free.png"}
              alt={"Manufacturing Icon"}
              width={56}
              height={56}
              priority
            />
          </span>
          <div className="flex flex-col">
            <h3
              className={`${leagueSpartan.className} text-arecoidGreen text-xl font-bold leading-7 sm:text-2xl sm:leading-8 xl:text-[28px] xl:leading-9`}
            >
              100% Natural and Chemical free
            </h3>
            <p className={`${atkinsonHyperlegible.className} leading-6`}>
              No additives, coatings, or plastic
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center bg-arecoidCream px-6 py-10 sm:py-12 sm:px-8 xl:py-16 xl:px-10 rounded-lg">
          <span className="aspect-square relative">
            <Image
              src={"/whyArecoid/dishes.png"}
              alt={"Manufacturing Icon"}
              width={56}
              height={56}
              priority
            />
          </span>
          <div className="flex flex-col">
            <h3
              className={`${leagueSpartan.className} text-arecoidGreen text-xl font-bold leading-7 sm:text-2xl sm:leading-8 xl:text-[28px] xl:leading-9`}
            >
              Wide Product Range
            </h3>
            <p className={`${atkinsonHyperlegible.className} leading-6`}>
              Consistent, export-grade quality for global markets
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center  bg-arecoidCream px-6 py-10 sm:py-12 sm:px-8 xl:py-16 xl:px-10 rounded-lg">
          <span className="aspect-square relative">
            <Image
              src={"/whyArecoid/reliability.png"}
              alt={"Manufacturing Icon"}
              width={56}
              height={56}
              priority
            />
          </span>
          <div className="flex flex-col">
            <h3
              className={`${leagueSpartan.className} text-arecoidGreen text-xl font-bold leading-7 sm:text-2xl sm:leading-8 xl:text-[28px] xl:leading-9`}
            >
              Reliable Supplier
            </h3>
            <p className={`${atkinsonHyperlegible.className} leading-6`}>
              Complete export documentation and logistics coordination
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
