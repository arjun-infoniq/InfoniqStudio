"use client";
import { useState } from "react";
import styles from "./Accordion.module.scss";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
};

export default function Accordion({
  items,
  allowMultiple = false,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      return allowMultiple ? [...prev, index] : [index];
    });
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div key={index} className={styles.item}>
            <button
              className={styles.header}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <div className={styles.innerPadding}>
                <span>{item.title}</span>
                <span className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
                  +
                </span>
              </div>
            </button>

            <div className={`${styles.content} ${isOpen ? styles.open : ""}`}>
              <div className={styles.inner}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
