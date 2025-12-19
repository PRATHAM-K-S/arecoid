import "./globals.css";

export const metadata = {
  title: "Arecoid",
  description: "Launching soon website for arecoid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden">{children}</body>
    </html>
  );
}
