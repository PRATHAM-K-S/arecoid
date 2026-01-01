import Image from "next/image";
import { Atkinson_Hyperlegible } from "next/font/google";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function WhyArecoidCard({ src, alt, text }) {
  return (
    <div className="flex items-center gap-4">
      <Image src={src} alt={alt} width={32} height={32}/>
      <p className={`${atkinsonHyperlegible.className} text-lg leading-7 text-arecoidBrown`}>{text}</p>
    </div>
  );
}
