import { League_Spartan, Atkinson_Hyperlegible } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ExportQuote() {
  return (
    <section className="mx-6 py-16 flex flex-col sm:mx-8 sm:w-3/4 xl:mx-16 xl:w-1/2 gap-4">
      <h2
        className={`${leagueSpartan.className} text-4xl leading-11 md:text-[44px] md:leading-13 xl:text-[52px] xl:leading-16 font-bold text-arecoidGreen`}
      >
        Looking for a Reliable Areca Leaf Dinnerware Exporter?
      </h2>
      <ul
        className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown xl:w-full list-disc list-inside flex flex-col sm:flex-row gap-4`}
      >
        <li>Bulk Manufacturing</li>
        <li>Consistent Quality</li>
        <li>Export-Ready Documentation</li>
      </ul>
      <div className="flex gap-4">
        <button
          className={`${atkinsonHyperlegible.className} text-sm leading-5 text-arecoidPrimary bg-arecoidGreen py-3.5 px-6 rounded-lg mt-3 cursor-pointer`}
        >
          Get Export Quote
        </button>
        <button
          className={`${atkinsonHyperlegible.className} text-sm leading-5 text-arecoidGreen border border-arecoidGreen py-3.5 px-6 rounded-lg mt-3 cursor-pointer`}
        >
          Request Samples
        </button>
      </div>
    </section>
  );
}
