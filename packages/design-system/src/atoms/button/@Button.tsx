import { ButtonHTMLAttributes } from "react";
import { buttonClass } from './button.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ type, children, }: ButtonProps) {
  return (
    <button type={type} className={buttonClass}>{children}</button>
  )
}