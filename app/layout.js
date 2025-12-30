import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Arecoid | Premium Areca Leaf Plates & Biodegradable Tableware",
  description:
    "Arecoid: Leading manufacturer of sustainable Areca leaf dinnerware in India. Premium, 100% natural and compostable plates for eco-dining.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-arecoidPrimary">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
