import { ButtonHTMLAttributes } from "react";
import * as styles from "./button.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ type = 'button', children, ...rest}: ButtonProps) {
  return (
    <button {...rest} className={styles.buttonClass} type={type}>{children}</button>
  )
}