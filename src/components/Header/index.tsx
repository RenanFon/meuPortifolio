import { Link, NavLink } from 'react-router-dom';
import { 
  User, 
  Code, 
  GraduationCap, 
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
            <NavLink to="/sobre">
              <User size={20} />
              <span>Sobre</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tecnologias">
              <Code size={20} />
              <span>Tecnologias</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/formacao">
              <GraduationCap size={20} />
              <span>Formação</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato">
              <EnvelopeSimple size={20} />
              <span>Contato</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
