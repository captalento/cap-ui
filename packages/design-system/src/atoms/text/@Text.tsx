import { HTMLAttributes } from "react";

export type TextProps = HTMLAttributes<HTMLParagraphElement>;

export function Text({ children, ...props }: TextProps) {
  return (
    <p {...props}>{children}</p>
  )
}