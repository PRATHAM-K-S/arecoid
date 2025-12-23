import Image from "next/image";
import CustomFont from "next/font/local";
import { Yeseva_One } from "next/font/google";

const yesevaOne = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
});

const theSeasons = CustomFont({
  src: "/The_Seasons.otf",
});

const tt_commons_pro = CustomFont({
  src: "/tt_commons_pro_condensed_regular.otf"
})

export default function Home() {
  return (
    <main>
      <nav className="w-full h-14 md:h-16 lg:h-20 bg-[#fff3e4] flex justify-center items-center">
        <span
          className={`${yesevaOne.className} text-2xl md:tex-3xl lg:text-4xl text-[#694a38]`}
        >
          Arecoid
        </span>
      </nav>
      <div className="h-screen">
        <Image
          src={"/website_bg_arecoid_16_9.png"}
          alt="Image of areca leaf plates kept on a table"
          quality={100}
          fill
          sizes="100vw"
          className="object-cover -z-10 relative"
        />
        <div className="relative w-full h-full opacity-50 bg-black"></div>
        <div className="absolute top-0 w-full flex flex-col gap-10 lg:gap-16 justify-center items-center h-full">
          <div
            className={`${theSeasons.className} text-center text-6xl md:text-7xl lg:text-8xl text-[#fff3e4]`}
          >
            <h1>Launching</h1>
            <h1>Soon</h1>
          </div>
          <div className="text-[#fff3e4] w-full lg:w-1/2 text-center text-lg md:text-2xl">
            <p className={`${tt_commons_pro.className} mx-8`}>
              Redefining global dinnerware with the strength of nature and the
              spirit of sustainability. A new chapter by Parashakthi Industries
            </p>
          </div>
          <div className="text-center flex justify-center w-full px-8 md:w-1/2">
            <input placeholder="Enter your email address" className="w-full text-sm md:text-lg md:px-8 bg-[#fff3e4] outline-none px-4 py-3 text-[#694a38]"/>
            <button className="w-1/4 text-sm md:text-lg px-2 md:px-8 bg-[#694a38] text-[#fff3e4]">Notify Me</button>
          </div>
        </div>
      </div>
    </main>
  );
}
