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
    <section className="flex flex-col gap-6">
      <h2
        className={`${leagueSpartan.className} text-arecoidGreen font-bold text-[32px] leading-10 sm:text-4xl sm:leading-11 xl:text-[40px] xl:leading-13`}
      >
        Lets Build Sustainable Partnership
      </h2>
      <p
        className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown xl:w-1/2`}
      >
        Arecoid works with distributors, importers, and eco-focused brands
        worldwide to supply high-quality areca leaf dinnerware from India. We
        support bulk orders, export requirements, and long-term sourcing
        partnerships with consistent quality and transparent communication.
        Production capacity:
      </p>
              <button
          className={`${atkinsonHyperlegible.className} text-sm leading-5 text-arecoidPrimary bg-arecoidGreen py-3.5 px-6 rounded-lg mt-3 max-w-fit`}
        >
          Contact Us
        </button>
    </section>
  );
}
