import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Arecoid",
  description:
    "Sustainable Areca Leaf Dinnerware Manufacturer from India.Arecoid, a unit of Parashakthi Industries, specializes in eco-friendly areca leaf dinnerware for export and domestic markets.",
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
