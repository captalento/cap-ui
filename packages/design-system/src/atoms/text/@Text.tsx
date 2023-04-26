import { HTMLAttributes } from "react";

import * as styles from './text.css';
import clsx from "clsx";
export type TextProps = HTMLAttributes<HTMLParagraphElement>;

export function Text({ children, ...props }: TextProps) {
  return (
    <p {...props} className={clsx(styles.root)}>{children}</p>
  )
}