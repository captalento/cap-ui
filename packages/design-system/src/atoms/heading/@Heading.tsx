import { HTMLAttributes } from "react";

import * as styles from './heading.css';
export type HeadingProps = HTMLAttributes<HTMLHeadingElement>;

export function Heading({ children, ...props }: HeadingProps) {
  return (
    <h1 {...props} className={styles.headingClass}>{children}</h1>
  )
}