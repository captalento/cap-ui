import { ButtonHTMLAttributes } from "react";
import * as style  from './button.css';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ type = 'button', children, ...rest}: ButtonProps) {
  return (
    <button {...rest} className={style.buttonClass} type={type}>{children}</button>
  )
}