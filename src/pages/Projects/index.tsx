import { GithubLogo } from '@phosphor-icons/react';
import styles from './styles.module.css';

export function Projects() {
  return (
    <section className={styles.projects}>
      <h2>Meus Projetos</h2>
      <div className={styles.projectsGrid}>
        <a 
          href="https://github.com/RenanFon" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.githubLink}
        >
          <GithubLogo size={24} />
          <span>Ver projetos no GitHub</span>
        </a>
      </div>
    </section>
  );
}
