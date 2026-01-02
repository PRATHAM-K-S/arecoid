import {
  AboutArecoid,
  ManufacturingCapablities,
  SoftCta,
  Sustainability,
  WhoWeAre,
  WhyChooseArecoid,
} from "@/components";

export default function About() {
  return (
    <main className="py-4 xl:py-16 pb-8 flex flex-col gap-12 xl:gap-24 mx-6 sm:mx-8 xl:mx-16">
      <AboutArecoid />
      <ManufacturingCapablities />
      <Sustainability />
      <WhyChooseArecoid />
      <SoftCta />
    </main>
  );
}
