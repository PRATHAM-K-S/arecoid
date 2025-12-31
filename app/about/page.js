import { AboutArecoid, ManufacturingCapablities, SoftCta, Sustainability, WhoWeAre, WhyArecoidAbout } from "@/components";

export default function About() {
  return (
    <main className="py-4 pb-8 flex flex-col gap-12">
      <AboutArecoid />
      <WhoWeAre/>
      <ManufacturingCapablities/>
      <Sustainability/>
      <WhyArecoidAbout/>
      <SoftCta/>
    </main>
  );
}
