import React from 'react'
import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Renan <span>Fonseca</span></h1>
      </div>
      <nav className={styles.nav} aria-label="Navegação principal">
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#formacao">Formação</a></li>
        </ul>
      </nav>
    </header>
  );
}
