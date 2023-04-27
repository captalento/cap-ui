import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import * as styles from './text.css';

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: 'sm' | 'md' | 'lg';
};

export function Text({ children, size = 'md', ...rest }: TextProps) {
  const textSize = styles[size];

  return (
    <p className={clsx(styles.root, textSize)} {...rest} >{children}</p>
  )
}
