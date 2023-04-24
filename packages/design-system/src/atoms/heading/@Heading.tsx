import { HTMLAttributes } from "react";

import * as style  from './heading.css';
export type HeadingProps = HTMLAttributes<HTMLHeadingElement>;

export function Heading({ children, ...props }: HeadingProps) {
  return (
    <h1 {...props} className={style.headingClass}>{children}</h1>
  )
}