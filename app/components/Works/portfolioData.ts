export type PortfolioMediaType = "image" | "video";

export interface PortfolioItem {
  id: string;
  tagName: string;
  mainHeading: string;
  subHeading: string;
  imageSrc?: string;
  videoSrc?: string;
  popupImage?: string;
  mediaType: PortfolioMediaType;
  altText: string;
  captionText: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "3d-interactive-websites",
    tagName: "UI/UX DESIGN",
    videoSrc: "/videos/portfolio-video-2.mp4",
    mediaType: "video",
    mainHeading: "3D Interactive Websites",
    subHeading:
      "Immersive, high-performance websites built with advanced 3D visuals, smooth animations, and modern UI.",
    altText: "3D Interactive Websites",
    captionText: "3D Interactive Websites",
    popupImage: "/images/portfolio-popup-1.webp",
  },
  {
    id: "creative-storytelling-production",
    tagName: "UI/UX DESIGN",
    videoSrc: "/videos/portfolio-video-1.mp4",
    mediaType: "video",
    mainHeading: "Creative Storytelling & Production",
    subHeading:
      "Impact-driven films and digital content crafted to connect, engage, and perform across modern media platforms.",
    altText: "Creative Storytelling & Production",
    captionText: "Creative Storytelling & Production",
    popupImage: "/images/portfolio-popup-2.webp",
  },
  {
    id: "nova-next-gen-electric-scooters",
    tagName: "UI/UX DESIGN",
    imageSrc: "/images/portfolio-12.webp",
    mediaType: "image",
    mainHeading: "Nova - Next Gen Electric Scooters",
    subHeading:
      "Smart electric scooter development with efficient motors, battery management, safety, connectivity, and sustainability.",
    altText: "Nova - Next Gen Electric Scooters",
    captionText: "Nova - Next Gen Electric Scooters",
    popupImage: "/images/portfolio-popup-3.webp",
  },
  {
    id: "buildco-architects-website-experience",
    tagName: "UI/UX DESIGN",
    imageSrc: "/images/portfolio-11.png",
    mediaType: "image",
    mainHeading: "Buildco Architects Website Experience",
    subHeading:
      "A cinematic website translating bold storytelling into a clear, high-performance digital experience.",
    altText: "Buildco Architects Website Experience",
    captionText: "Buildco Architects Website Experience",
    popupImage: "/images/portfolio-popup-4.webp",
  },
  {
    id: "skin-care-brand-identity-e-commerce",
    tagName: "UI/UX DESIGN",
    imageSrc: "/images/portfolio-14.webp",
    mediaType: "image",
    mainHeading: "Skin Care Brand Identity & E-commerce",
    subHeading:
      "A cohesive brand identity and e-commerce experience for a modern skincare line, blending aesthetics with seamless shopping.",
    altText: "Skin Care Brand Identity & E-commerce",
    captionText: "Skin Care Brand Identity & E-commerce",
    popupImage: "/images/portfolio-popup-5.webp",
  },
  {
    id: "perfume-brand-identity-website",
    tagName: "UI/UX DESIGN",
    imageSrc: "/images/portfolio-15.webp",
    mediaType: "image",
    mainHeading: "Perfume Brand Identity Website",
    subHeading:
      "A cohesive brand identity experience for a modern perfume line, blending aesthetics with seamless shopping.",
    altText: "Perfume Brand Identity Website",
    captionText: "Perfume Brand Identity Website",
    popupImage: "/images/portfolio-popup-6.webp",
  },
];

export function getPortfolioItemById(id: string): PortfolioItem | undefined {
  return portfolioData.find((item) => item.id === id);
}

