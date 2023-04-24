import { ButtonHTMLAttributes } from "react";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, }: ButtonProps) {
  return <button>{children}</button>;
};
