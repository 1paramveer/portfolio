import "../app/globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { inter, sonder } from "../components/Fonts";
import Cursor from "@/components/Cursor";

export const metadata = {
  title: "Paramveer Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${sonder.variable} h-screen min-w-96`}
      >
        <Cursor />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
