"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setStatus("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={styles.mainContactForm}>
      <div className="mainContainer">
        <div className={styles.contactForm}>
          <div className={styles.stackBox}>
            <div className={styles.tagBox}>
              <h4>Contact Us</h4>
            </div>
            <div className={styles.contentFlexWrapper}>
              <div className={styles.contentSet}>
                <h2>GET IN TOUCH</h2>
                <h3>
                  Let’s connect to transform ideas into meaningful digital
                  experiences through innovation, collaboration, and
                  future-ready design solutions together.
                </h3>
                <div className="stackPage rotatingText">
                  <Image
                    src="/icons/rotate-text-dark.svg"
                    className="rText"
                    alt="Rotate Text"
                    fill
                  />
                  <Image
                    src="/icons/arrow-red.svg"
                    className="rArrow"
                    alt="Rotate Text"
                    fill
                  />
                </div>
              </div>
              <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit}>
                  <div className={styles.formBox}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formBox}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formBox}>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button className="cmnButton" disabled={loading}>
                    {loading ? "Sending..." : "Submit"}
                  </button>

                  {status && <p className={styles.successMail}>{status}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
