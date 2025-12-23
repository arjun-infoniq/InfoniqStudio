import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import Header from "./header/header.module";
import LiquidEther from "./components/LiquidEther/LiquidEther";

import Footer from "./footer/footer.module";
import Loader from "./components/Loader/Loader";
import Silk from "./components/Silk/Silk";

const geistSans = Jura({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
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
      <body className={geistSans.className}>
        <Header />
        <Loader />
        {children}
        <div className="liquidEtherWrapper">
          {/* <LiquidEther
          colors={["#FF4C1F", "#FF643D", "#FD8263"]}
          mouseForce={40}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        /> */}
          <Silk
            speed={2}
            scale={.9}
            color="#7B7481"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        <Footer />
      </body>
    </html>
  );
}
