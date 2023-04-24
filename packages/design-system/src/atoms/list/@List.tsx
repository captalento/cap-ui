import { HTMLAttributes } from "react";

// import * as style  from './text.css';
export type ListProps = HTMLAttributes<HTMLUListElement>;

export function List({ children, ...props }: ListProps) {
  return (
    <ul {...props}>{children}</ul>
  )
}