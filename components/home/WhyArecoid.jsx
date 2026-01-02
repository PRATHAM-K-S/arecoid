import { League_Spartan, Atkinson_Hyperlegible } from "next/font/google";
import Image from "next/image";
import { WhyArecoidCard } from "..";

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
        <WhyArecoidCard
          src="/whyArecoid/manufacture.png"
          alt="manufacturing icon"
          title="Export-Grade Manufacturing"
          description="Consistent, export-grade quality for global markets"
        />
        <WhyArecoidCard
          src="/whyArecoid/chemical-free.png"
          alt="chemical free icon"
          title="100% Natural and Chemical free"
          description="No additives, coatings, or plastic"
        />
        <WhyArecoidCard
          src="/whyArecoid/dishes.png"
          alt="dishes icon"
          title="Wide Product Range"
          description="Consistent, export-grade quality for global markets"
        />
        <WhyArecoidCard
          src="/whyArecoid/reliability.png"
          alt="reliability icon"
          title="Reliable Supplier"
          description="Complete export documentation and logistics coordination"
        />
      </div>
    </section>
  );
}
