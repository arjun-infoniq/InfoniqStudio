import type { Metadata } from "next";
import { Bruno_Ace, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./footer/footer.module";
import Header from "./header/header.module";
import Loader from "./components/Loader/Loader";
import Silk from "./components/Silk/Silk";
import { SmoothScrollProvider } from "./providers";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bruno",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Infoniq Studio",
  description:
    "Crafting modern, aesthetic, and interactive digital experiences with a blend of design and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${brunoAce.variable} antialiased dark`}
      >
        <SmoothScrollProvider>
          <Header />
          <Loader />
          <div
            style={{
              height: "100vh",
              width: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <Silk
              speed={6}
              scale={0.7}
              color="#d92b00"
              noiseIntensity={3}
              rotation={0}
            />
          </div>
          {children}

          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
