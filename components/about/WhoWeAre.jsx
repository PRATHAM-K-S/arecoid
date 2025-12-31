import { League_Spartan, Atkinson_Hyperlegible } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function WhoWeAre() {
  return (
    <section className="flex flex-col mx-6 gap-6">
      <h2
        className={`${leagueSpartan.className} text-[32px] leading-10 font-semibold text-arecoidGreen`}
      >
        Who We Are
      </h2>
      <p
        className={`${atkinsonHyperlegible.className} leading-6 text-arecoidBrown`}
      >
        Arecoid is an export-focused brand specializing in eco-friendly areca
        leaf dinnerware. We are a unit of Parashakthi Industries, a
        manufacturing company based in India with hands-on experience in
        producing natural, sustainable tableware.
        <br/><br/>
        With a strong foundation in
        domestic manufacturing, Arecoid was created to serve global markets with
        high-quality, biodegradable dinnerware made from naturally fallen areca
        palm leaves.
      </p>
    </section>
  );
}
