import { useState } from 'react';
import type { FaqItem } from '../types';
import { MinusIcon, PlusIcon } from './icons';
import styles from './Accordion.module.css';

export function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className={styles.item}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{item.question}</span>
              {isOpen ? <MinusIcon /> : <PlusIcon />}
            </button>
            {isOpen && <p className={styles.answer}>{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
