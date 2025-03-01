import React from 'react';
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <h3>Renan Fonseca</h3>
          <p>Full Stack Developer</p>
          <div className={styles.socialLinks}>
            <a 
              href="https://github.com/RenanFon" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubLogo size={24} weight="duotone" />
            </a>
            <a 
              href="https://www.linkedin.com/in/renan-fonseca-8a5384200/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={24} weight="duotone" />
            </a>
            <a 
              href="mailto:renanfonseca88@gmail.com"
              aria-label="Email"
            >
              <EnvelopeSimple size={24} weight="duotone" />
            </a>
          </div>
        </div>
        
        <div className={styles.footerDivider}></div>
        
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} - Desenvolvido com React e TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
