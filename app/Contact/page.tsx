"use client";

import ContactForm from "../components/ContactForm/ContactForm";
import styles from "./Contact.module.scss";

export default function ContactPage() {
  return (
    <section className={styles.contactPageWrapper}>
      <ContactForm />
    </section>
  );
}
