import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/"><h1>Renan <span>Fonseca</span></h1></Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
