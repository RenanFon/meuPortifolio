import { useState, useEffect, useRef } from 'react';
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
  // Inicializa como true para começar expandido
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    // Só fecha o menu no mobile
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    // Em mobile começa fechado, em desktop começa aberto
    const isMobile = window.innerWidth <= 768;
    setIsMenuOpen(!isMobile);

    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMenuOpen(!isMobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Só bloqueia o scroll no mobile
    if (window.innerWidth <= 768) {
      document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && 
          buttonRef.current && 
          !menuRef.current.contains(event.target as Node) && 
          !buttonRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        ref={buttonRef}
        className={styles.menuButton} 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isMenuOpen ? (
          <X size={24} weight="bold" />
        ) : (
          <List size={24} weight="bold" />
        )}
      </button>

      <div className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`} onClick={closeMenu} />

      <nav ref={menuRef} className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <li>
            <NavLink to="/sobre" onClick={closeMenu}>
              <User size={20} />
              <span>Sobre</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tecnologias" onClick={closeMenu}>
              <Code size={20} />
              <span>Tecnologias</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/formacao" onClick={closeMenu}>
              <GraduationCap size={20} />
              <span>Formação</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" onClick={closeMenu}>
              <EnvelopeSimple size={20} />
              <span>Contato</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
