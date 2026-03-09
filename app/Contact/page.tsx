"use client";

import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import styles from "./Contact.module.scss";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | Infoniq Studio - Get In Touch";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Ready to start your project? Contact Infoniq Studio for modern web design, development, and digital solutions. Let's create something amazing together.");
    }
  }, []);

  return (
    <section className={styles.contactPageWrapper}>
      <ContactForm />
    </section>
  );
}
