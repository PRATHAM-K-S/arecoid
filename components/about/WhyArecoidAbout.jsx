import { WhyArecoidCard } from "..";

export default function WhyArecoidAbout() {
  return (
    <section className="flex flex-col mx-6 gap-6">
      <h2 className="text-[32px] leading-10 font-semibold text-arecoidGreen">
        Why Arecoid?
      </h2>
      <div className="flex flex-col gap-4">
        <WhyArecoidCard src={"/about/icons/manufacturing_light.png"} alt={"manufacturing icon"} text={"Manufacturer, not trader"}/>
        <WhyArecoidCard src={"/about/icons/process.png"} alt={"process icon"} text={"Export-focused processes"}/>
        <WhyArecoidCard src={"/about/icons/size.png"} alt={"scale icon"} text={"Consistent product sizing & quality"}/>
        <WhyArecoidCard src={"/about/icons/readiness.png"} alt={"readiness icon"} text={"Bulk & container shipment readiness"}/>
        <WhyArecoidCard src={"/about/icons/communication.png"} alt={"communication icon"} text={"Transparent communication"}/>
      </div>
    </section>
  );
}