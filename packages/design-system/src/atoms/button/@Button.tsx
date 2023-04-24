import { ButtonHTMLAttributes } from "react";
import { buttonClass }  from './button.css';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ type = 'button', children, ...rest}: ButtonProps) {
  return (
    <button {...rest} className={buttonClass} type={type}>{children}</button>
  )
}