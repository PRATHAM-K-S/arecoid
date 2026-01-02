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

export default function WhyArecoidCard({ src, alt, title, description }) {
  return (
    <div className="flex gap-4 items-center bg-arecoidCream px-6 py-10 sm:py-12 sm:px-8 xl:py-16 xl:px-10 rounded-lg">
      <span className="aspect-square relative">
        <Image src={src} alt={alt} width={56} height={56} priority />
      </span>
      <div className="flex flex-col">
        <h3
          className={`${leagueSpartan.className} text-arecoidGreen text-xl font-bold leading-7 sm:text-2xl sm:leading-8 xl:text-[28px] xl:leading-9`}
        >
          {title}
        </h3>
        <p
          className={`${atkinsonHyperlegible.className} leading-6 text-arecoidBrown`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
