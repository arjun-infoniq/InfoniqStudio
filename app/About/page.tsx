"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import styles from "./About.module.scss";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: easeOut },
  viewport: { once: true, amount: 0.25 },
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const pillContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const pillItem = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

const processContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const processItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const principles = [
  {
    title: "Purpose over polish",
    text: "We build products that support performance, scalability, and long-term growth—not quick fixes or templates.",
  },
  {
    title: "Design + engineering together",
    text: "Strategy, UX, UI, and development stay in one loop so what we design is exactly what ships.",
  },
  {
    title: "Built for real results",
    text: "Visually striking experiences that are also fast, accessible, and aligned with how your business actually works.",
  },
];

const capabilities = [
  "3D interactive websites",
  "Custom web development",
  "Brand identity",
  "Mobile & product UI",
  "Motion & micro-interactions",
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    text: "We align on goals, audience, and constraints—so scope, timeline, and success metrics are clear before pixels move.",
  },
  {
    step: "02",
    title: "Design",
    text: "UX flows, UI craft, and brand touchpoints come together in a direction you can feel and approve with confidence.",
  },
  {
    step: "03",
    title: "Build",
    text: "Front-end polish, solid engineering, and performance tuning—no handoff gaps between design and code.",
  },
  {
    step: "04",
    title: "Ship",
    text: "Launch, documentation, and iteration. We stay close so the product keeps improving after go-live.",
  },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Infoniq Studio - Design-Driven Digital Agency";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about Infoniq Studio—a modern design and development studio for 3D websites, apps, and brand experiences. Strategy, craft, and engineering in one team."
      );
    }
  }, []);

  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className="mainContainer">
          <motion.div {...fadeUp}>
            <h4 className="cmnTagHeading">About Us</h4>
            <h1 className={`cmnMainHeading ${styles.heroTitle}`}>
              We&apos;re a design-driven digital studio
            </h1>
            <p className={styles.lead}>
              Infoniq crafts cutting-edge 3D interactive websites, mobile apps,
              and brand identities—combining bold creativity with engineering
              so every launch feels premium, fast, and future-ready.
            </p>
            <div className={styles.heroActions}>
              <Link href="/Contact/" className="cmnButton">
                Start a project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.story}>
        <div className="mainContainer">
          <div className={styles.storyGrid}>
            <motion.div {...fadeUp}>
              <h4 className="cmnTagHeading">Who we are</h4>
              <h2 className="cmnMainHeading">
                Designing the future of digital experiences
              </h2>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
            >
              <p className={styles.body}>
                We&apos;re a modern software design and development studio. Our
                work spans immersive web, product interfaces, and brand systems
                for teams that want presence and performance—not generic
                templates.
              </p>
              <p className={styles.body}>
                Our approach is simple: ship work that is visually stunning, easy
                to use, and built for real-world business outcomes—from first
                impression to conversion and retention.
              </p>
            </motion.div>
          </div>
          <motion.div
            className={styles.storyMedia}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: easeOut }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/videos/about-video.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      <section className={styles.principles}>
        <div className="mainContainer">
          <motion.div {...fadeUp} className={styles.sectionHead}>
            <h4 className="cmnTagHeading">How we work</h4>
            <h2 className="cmnMainHeading">Principles that guide every build</h2>
          </motion.div>
          <motion.ul
            className={styles.principleList}
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {principles.map((item) => (
              <motion.li
                key={item.title}
                variants={listItem}
                className={styles.principleCard}
              >
                <span className={styles.principleLine} aria-hidden />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className={styles.capabilities}>
        <div className="mainContainer">
          <motion.div {...fadeUp} className={styles.sectionHead}>
            <h4 className="cmnTagHeading">Capabilities</h4>
            <h2 className="cmnMainHeading">What we create</h2>
            <p className={styles.capIntro}>
              The same disciplines you see across our site—aligned with our
              services and portfolio—from strategy and UX to launch-ready code.
            </p>
          </motion.div>
          <motion.ul
            className={styles.pillRow}
            variants={pillContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {capabilities.map((label) => (
              <motion.li key={label} variants={pillItem} className={styles.pill}>
                {label}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className={styles.process}>
        <div className="mainContainer">
          <motion.div {...fadeUp} className={styles.sectionHead}>
            <h4 className="cmnTagHeading">Process</h4>
            <h2 className="cmnMainHeading">From discovery to launch</h2>
            <p className={styles.processIntro}>
              A clear path from first conversation to shipped product—echoing
              how we describe projects with clients: no hidden steps, no
              confusion.
            </p>
          </motion.div>
          <motion.ol
            className={styles.processTrack}
            variants={processContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
          >
            {processSteps.map((item, i) => (
              <motion.li
                key={item.step}
                variants={processItem}
                className={styles.processStep}
              >
                <div className={styles.processIndex}>
                  <span className={styles.processNum}>{item.step}</span>
                  {i < processSteps.length - 1 && (
                    <span className={styles.processConnector} aria-hidden />
                  )}
                </div>
                <div className={styles.processBody}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className="mainContainer">
          <motion.div
            className={styles.ctaInner}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className={styles.ctaCopy}>
              <h4 className="cmnTagHeading">Next step</h4>
              <h2 className="cmnMainHeading">
                Ready to build something that stands out?
              </h2>
              <p>
                Tell us about your goals—we&apos;ll map scope, timeline, and
                the right mix of design and engineering.
              </p>
            </div>
            <div className={styles.ctaVisual}>
              <div className={`rotatingText ${styles.ctaRotate}`}>
                <Image
                  src="/images/rotate-text.svg"
                  className="rText"
                  alt=""
                  fill
                />
                <Image
                  src="/icons/arrow-red.svg"
                  className="rArrow"
                  alt=""
                  fill
                />
              </div>
              <Link href="/Contact/" className="cmnButton">
                Let&apos;s talk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
