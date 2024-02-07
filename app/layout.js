import "../app/globals.css";
import { inter, sonder, jetbrains_mono } from "../components/Fonts";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sonder.variable} ${jetbrains_mono.variable} flex flex-col h-screen overscroll-y-none min-w-96`}
      >
        <Cursor />
        <SmoothScroll>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
