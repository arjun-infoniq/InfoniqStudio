"use client";

import { useEffect } from "react";
import SpreadComponents from "../components/SpreadComponents/SpreadComponents";
import ServiceCards from "../components/ServiceCards/ServiceCards";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Our Services | Infoniq Studio - Web Design, Development & Branding";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our comprehensive services including 3D interactive websites, mobile app development, UI/UX design, branding, and custom web applications.");
    }
  }, []);

  return (
    <>
      <SpreadComponents />
      <ServiceCards />
    </>
  );
}
