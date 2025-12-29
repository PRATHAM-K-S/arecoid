import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Arecoid",
  description: "Launching soon website for arecoid",
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
