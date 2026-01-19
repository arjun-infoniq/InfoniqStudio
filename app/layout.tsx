import type { Metadata } from "next";
import { Bruno_Ace, Poppins } from 'next/font/google'
import "./globals.css";
import Footer from "./footer/footer.module";
import Header from "./header/header.module";
import Loader from "./components/Loader/Loader";


const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bruno',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Infoniq Studio",
  description: "Crafting modern, aesthetic, and interactive digital experiences with a blend of design and technology.",
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
         <Header />
         <Loader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
