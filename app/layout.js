import { Footer, Navbar } from "@/components";
import "./globals.css";

// app/layout.js or app/page.js
export const metadata = {
  title: "Arecoid | Areca Leaf Dinnerware Manufacturer in India",
  description:
    "Arecoid is a leading manufacturer of sustainable Areca leaf plates in India. We provide 100% natural, compostable, and eco-friendly dinnerware solutions.",
  alternates: {
    canonical: "https://arecoid.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-arecoidPrimary xl:h-screen flex flex-col justify-between">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
