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
  title: "Infoniq Studio | Modern Web Design & Development Agency",
  description:
    "Crafting modern, aesthetic, and interactive digital experiences with a blend of design and technology. Specializing in 3D websites, mobile apps, and brand identities.",
  keywords: ["web design", "web development", "3D websites", "mobile apps", "brand identity", "UI/UX design", "digital agency"],
  authors: [{ name: "Infoniq Studio" }],
  creator: "Infoniq Studio",
  publisher: "Infoniq Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://infoniqstudio.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Infoniq Studio | Modern Web Design & Development Agency",
    description: "Crafting modern, aesthetic, and interactive digital experiences with a blend of design and technology.",
    url: "https://infoniqstudio.com",
    siteName: "Infoniq Studio",
    images: [
      {
        url: "/images/logo.svg", // Replace with actual OG image when created
        width: 1200,
        height: 630,
        alt: "Infoniq Studio - Modern Digital Experiences",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infoniq Studio | Modern Web Design & Development Agency",
    description: "Crafting modern, aesthetic, and interactive digital experiences with a blend of design and technology.",
    images: ["/images/logo.svg"],
    creator: "@infoniqstudio", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Infoniq Studio",
              "url": "https://infoniqstudio.com",
              "logo": "https://infoniq.studio/images/logo.svg",
              "description": "Modern software design and development studio crafting cutting-edge 3D interactive websites, mobile apps, and brand identities.",
              "foundingDate": "2024",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://twitter.com/infoniqstudio", // Replace with actual social links
                "https://linkedin.com/company/infoniqstudio"
              ],
              "serviceType": ["Web Design", "Web Development", "Mobile App Development", "UI/UX Design", "Branding"],
              "areaServed": "Worldwide"
            }),
          }}
        />
      </head>
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
