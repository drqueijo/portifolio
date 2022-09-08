import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'

function index() {
  return (
    <header className={styles.container}>
        <h1 className={styles.logo}>
            MATHEUS.
        </h1>
        <nav className={styles.nav}>
            <Link className={styles.link} href='/projects'>Projects</Link>
            <Link className={styles.link} href='/blog'>Blog</Link>
            <Link className={styles.link} href='/about'>About</Link>
        </nav>
    </header>
  )
}

export default index