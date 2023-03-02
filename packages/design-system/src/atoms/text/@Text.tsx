import { HTMLAttributes } from "react";

import * as style  from './text.css';
export type TextProps = HTMLAttributes<HTMLParagraphElement>;

export function Text({ children, ...props }: TextProps) {
  return (
    <p {...props} className={style.textClass}>{children}</p>
  )
}