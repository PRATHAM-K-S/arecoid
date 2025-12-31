import { League_Spartan, Atkinson_Hyperlegible } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function SoftCta() {
  return (
    <section className="flex flex-col mx-6 gap-6">
      <h2
        className={`${leagueSpartan.className} text-[32px] leading-10 font-bold text-arecoidGreen`}
      >
        Lets Build Sustainable Partnership
      </h2>
      <p
        className={`${atkinsonHyperlegible.className} leading-6 text-arecoidBrown`}
      >
        Arecoid works with distributors, importers, and eco-focused brands
        worldwide to supply high-quality areca leaf dinnerware from India. We
        support bulk orders, export requirements, and long-term sourcing
        partnerships with consistent quality and transparent communication.
      </p>
      <button
        className={`${atkinsonHyperlegible.className} text-sm leading-5 text-arecoidPrimary bg-arecoidGreen py-3.5 px-6 rounded-lg mt-3 w-fit`}
      >
        Contact Us
      </button>
    </section>
  );
}
