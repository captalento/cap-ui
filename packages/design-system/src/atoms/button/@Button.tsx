import { ButtonHTMLAttributes } from "react";
import * as style  from './button.css';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ type, children, }: ButtonProps) {
  return (
    <button type={type} className={style.buttonClass}>{children}</button>
  )
}