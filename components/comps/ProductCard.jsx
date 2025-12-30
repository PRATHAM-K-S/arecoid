import Image from "next/image";
import { League_Spartan, Atkinson_Hyperlegible } from "next/font/google";
import Link from "next/link";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ProductCard({src,alt,title,description,href}) {
  return (
    <div className="flex flex-col gap-4 max-w-3/5 min-w-3/5 sm:max-w-1/3 sm:min-w-1/3 xl:max-w-1/4 xl:min-w-1/4">
      <div className="relative aspect-square">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain rounded-lg"
          priority
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3
          className={`${leagueSpartan.className} text-arecoidGreen text-xl font-bold leading-7 sm:text-2xl sm:leading-8 xl:text-[28px] xl:leading-9`}
        >
          {title}
        </h3>
        <p className={`${atkinsonHyperlegible.className} text-sm leading-3.5 text-arecoidBrown`}>
          {description}
        </p>
        <Link
          className={`${atkinsonHyperlegible.className} pt-2 text-sm leading-3.5 font-semibold text-arecoidBrown`}
          href={href}
        >
          Know more
        </Link>
      </div>
    </div>
  );
}
