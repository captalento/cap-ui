import { DSProvider, Header } from '@captalento/design-system';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode
}
import * as styles  from './styles.css'

export function Layout({ children }: LayoutProps) {
  return (
    <DSProvider>
      <Header>
        <Image
          src="logo-m.svg"
          alt="logo captalento"
          width={40}
          height={40}
        />
      </Header>
      <section className={styles.sectionClass}>
        <section className={styles.containerClass}>
          {children}
        </section>
      </section>
    </DSProvider>
  )
}
