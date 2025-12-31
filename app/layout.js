import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: {
    default: "Arecoid - Eco-friendly Areca Leaf Dinnerware Manufacturer in India",
    template:" %s | Arecoid",
  },
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
