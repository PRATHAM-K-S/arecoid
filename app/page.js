import { ExportQuote, Footer, Hero, Manufacturing, ProductRange, WhyArecoid } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyArecoid />
      <ProductRange />
      <Manufacturing />
      <ExportQuote/>
      <Footer/>
    </main>
  );
}
