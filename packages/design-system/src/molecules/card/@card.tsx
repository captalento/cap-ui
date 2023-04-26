import { ReactNode } from 'react';
import { clsx } from 'clsx';
import * as styles from './card.css';

export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'dark' | 'white'
}

export function Card({ className, children, variant = 'dark' }: CardProps) {
  return (
    <div className={clsx(className, styles.cardReset)}>{children}</div>
  );
}
