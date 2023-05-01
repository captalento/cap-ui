import { HTMLAttributes } from "react";
import clsx from 'clsx';

import * as styles from './heading.css';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  color?: 'primary' | 'secondary' | 'blue' | 'yellow' | 'red' | 'green' | 'orange';
  size?: 'sm' | 'md' | 'lg';
};

export function Heading({ children, color = 'primary', size = 'md', ...props }: HeadingProps) {
  const colorClass = styles[`${color}Class`];
  const sizeClass = styles[`${size}Class`];

  return (
    <h1 {...props} className={clsx(styles.headingClass, colorClass, sizeClass)}>{children}</h1>
  )
}