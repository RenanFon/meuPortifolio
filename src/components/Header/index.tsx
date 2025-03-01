import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  User, 
  Code, 
  GraduationCap, 
  EnvelopeSimple,
  List,
  X
} from '@phosphor-icons/react';
import styles from './styles.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

      <button 
        className={styles.menuButton} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X size={24} weight="bold" />
        ) : (
          <List size={24} weight="bold" />
        )}
      </button>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <li>
            <NavLink to="/sobre" onClick={() => setIsMenuOpen(false)}>
              <User size={20} />
              <span>Sobre</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tecnologias" onClick={() => setIsMenuOpen(false)}>
              <Code size={20} />
              <span>Tecnologias</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/formacao" onClick={() => setIsMenuOpen(false)}>
              <GraduationCap size={20} />
              <span>Formação</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" onClick={() => setIsMenuOpen(false)}>
              <EnvelopeSimple size={20} />
              <span>Contato</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
