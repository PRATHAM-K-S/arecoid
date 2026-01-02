import { League_Spartan, Atkinson_Hyperlegible } from "next/font/google";
import { WhyChooseArecoidCard } from "..";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function WhyChooseArecoid() {
  return (
    <section className="flex flex-col gap-6">
      <h2
        className={`${leagueSpartan.className} text-arecoidGreen font-semibold text-[32px] leading-10 sm:text-4xl sm:leading-11 xl:text-[40px] xl:leading-13`}
      >
        Why Arecoid
      </h2>
      <div className="flex flex-col gap-4">
        <WhyChooseArecoidCard
          src={"/about/icons/manufacturing_light.png"}
          alt={"manufacturing icon"}
          text={"Manufacturer, not trader"}
        />
        <WhyChooseArecoidCard
          src={"/about/icons/process.png"}
          alt={"process icon"}
          text={"Export-focused processes"}
        />
        <WhyChooseArecoidCard
          src={"/about/icons/size.png"}
          alt={"scale icon"}
          text={"Consistent product sizing & quality"}
        />
        <WhyChooseArecoidCard
          src={"/about/icons/readiness.png"}
          alt={"readiness icon"}
          text={"Bulk & container shipment readiness"}
        />
        <WhyChooseArecoidCard
          src={"/about/icons/communication.png"}
          alt={"communication icon"}
          text={"Transparent communication"}
        />
      </div>
    </section>
  );
}
