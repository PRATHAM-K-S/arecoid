"use client";

import { League_Spartan, Atkinson_Hyperlegible } from "next/font/google";
import Image from "next/image";
import { ProductCard } from "..";
import { useRef, useState, useEffect } from "react";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ProductRange() {
  const scrollRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);
  const scrollAmount = 250;

  // Function to check scroll position and toggle buttons
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      // Show left button if we've scrolled away from the start
      setShowLeftBtn(scrollLeft > 10);
      
      // Show right button if we haven't reached the end (with 10px buffer)
      setShowRightBtn(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      // Check on initial load
      checkScrollPosition();
      
      // Add event listener for manual scrolling/swiping
      currentRef.addEventListener("scroll", checkScrollPosition);
      // Check on window resize in case the layout changes
      window.addEventListener("resize", checkScrollPosition);
    }

    return () => {
      if (currentRef) currentRef.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  const scrollHorizontally = (direction) => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -scrollAmount : scrollAmount;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="mx-6 py-16 flex flex-col gap-8 sm:mx-8 xl:mx-16">
      <h2
        className={`${leagueSpartan.className} text-arecoidGreen font-bold text-[32px] leading-10 sm:text-4xl sm:leading-11 xl:text-[40px] xl:leading-13`}
      >
        Our Product Range
      </h2>

      <div className="relative group">
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="max-w-full overflow-x-hidden overflow-y-hidden pb-4 flex gap-4 no-scrollbar scroll-smooth"
        >
          <ProductCard
            src={"/productRange/roundPlates.png"}
            alt={"Round Areca Plates"}
            title={"Round Plates"}
            description={'Available sizes: 10", 11", 12"'}
            href={"/"}
          />
          <ProductCard
            src={"/productRange/squarePlates.png"}
            alt={"Square Areca Plates"}
            title={"Square Plates"}
            description={'Available sizes: 6", 8", 9"'}
            href={"/"}
          />
          <ProductCard
            src={"/productRange/roundBowls.png"}
            alt={"Round Bowls"}
            title={"Round Bowls"}
            description={'Available sizes: 3.5", 5"'}
            href={"/"}
          />
          <ProductCard
            src={"/productRange/compartmentPlates.png"}
            alt={"Compartment Plates"}
            title={"Compartment Plates"}
            description={'Available sizes: 12" 4-partition'}
            href={"/"}
          />
        </div>

        {/* Left Button - Only rendered if showLeftBtn is true */}
        {showLeftBtn && (
          <button
            onClick={() => scrollHorizontally("left")}
            className="bg-white p-3 flex justify-center items-center rounded-full absolute top-1/3 -translate-y-1/2 -left-4 mt-4 z-30 shadow-md transition-all duration-300 cursor-pointer"
          >
            <Image
              src={"/productRange/left-arrow.png"}
              alt="left arrow"
              width={24}
              height={24}
            />
          </button>
        )}

        {/* Right Button - Only rendered if showRightBtn is true */}
        {showRightBtn && (
          <button
            onClick={() => scrollHorizontally("right")}
            className="bg-white p-3 flex justify-center items-center rounded-full absolute top-1/3 -translate-y-1/2 -right-4 mt-4 z-30 shadow-md transition-all duration-300 cursor-pointer"
          >
            <Image
              src={"/productRange/right-arrow.png"}
              alt="right arrow"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
    </section>
  );
}