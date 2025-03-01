import { motion } from 'framer-motion';
import { GithubLogo } from '@phosphor-icons/react';
import styles from './styles.module.css';

export function Projects() {
  return (
    <motion.section 
      id="projetos" 
      className={styles.projectsSection}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.sectionTitle}>Projetos</h2>
      <a 
        href="https://github.com/RenanFon" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.githubLink}
      >
        <GithubLogo size={24} />
        <span>Ver projetos no GitHub</span>
      </a>
    </motion.section>
  );
}
