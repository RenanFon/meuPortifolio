import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Code, 
  GraduationCap, 
  FolderSimple, 
  EnvelopeSimple 
} from '@phosphor-icons/react';
import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <div className={styles.logoContainer}>
            <div className={styles.logoText}>
              <span className={styles.firstName}>Renan</span>
              <span className={styles.lastName}>Fonseca</span>
            </div>
            <div className={styles.logoDivider}></div>
            <span className={styles.logoTitle}>Full Stack Developer</span>
          </div>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/sobre">
              <User weight="duotone" size={20} />
              <span>Sobre</span>
            </Link>
          </li>
          <li>
            <Link to="/tecnologias">
              <Code weight="duotone" size={20} />
              <span>Tecnologias</span>
            </Link>
          </li>
          <li>
            <Link to="/formacao">
              <GraduationCap weight="duotone" size={20} />
              <span>Formação</span>
            </Link>
          </li>
          <li>
            <Link to="/projetos">
              <FolderSimple weight="duotone" size={20} />
              <span>Projetos</span>
            </Link>
          </li>
          <li>
            <Link to="/contato">
              <EnvelopeSimple weight="duotone" size={20} />
              <span>Contato</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
