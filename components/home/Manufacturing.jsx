import { League_Spartan } from "next/font/google";
import Image from "next/image";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Manufacturing() {
  return (
    <section className="mx-6 py-16 flex flex-col sm:mx-8 xl:mx-16">
      <h2
        className={`${leagueSpartan.className} text-arecoidGreen font-bold text-[32px] leading-10 sm:text-4xl sm:leading-11 xl:text-[40px] xl:leading-13`}
      >
        Manufacturing Process
      </h2>
      <div className="w-full flex justify-center">
        <Image
          src={"/manufacturing/manufacturingProcess.svg"}
          alt="Manufacturing Process"
          width={1000}
          height={100}
          priority
        />
      </div>
    </section>
  );
}
