import React from 'react'
import * as styles  from './header.css'

interface HeaderProps {
  children: React.ReactNode
}

export function Header({children}: HeaderProps) {
  return (
    <header className={styles.headerRoot}>
      <section className={styles.containerRoot}>

          <div className={styles.logoRoot}>
            {children}
          </div>

          <nav className={styles.navRoot}>
            <ul className={styles.ulRoot}>
              <li>Home</li>
              <li>Posts</li>
            </ul>
          </nav>
          
      </section>
    </header>
  )
}
