import React from 'react';
import styles from './styles.module.css';
import profilePhoto from '@/assets/images/154706152_2840956502830419_371064825344242994_n.jpg';

export function About() {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>Sobre mim</h2>
      <div className={styles.aboutContent}>
        <div className={styles.bioContainer}>
          <div className={styles.bioHeader}>
            <h3>Renan Antunes Fonseca</h3>
            <span>Desenvolvedor Full Stack</span>
          </div>
          <p className={styles.bioText}>
            Desenvolvedor web focado em criar soluções eficientes e escaláveis. 
            Atualmente cursando o último módulo de Análise e Desenvolvimento de Sistemas, 
            busco constantemente aprender e aplicar novas tecnologias.
          </p>
        </div>

        <div className={styles.skillsContainer}>
          <h3>Tecnologias</h3>
          <div className={styles.skillGroups}>
            <div className={styles.skillGroup}>
              <h4>Frontend</h4>
              <ul className={styles.skillsList}>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            <div className={styles.skillGroup}>
              <h4>Backend</h4>
              <ul className={styles.skillsList}>
                <li>SQL</li>
                <li>Delphi</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className={styles.skillGroup}>
              <h4>Ferramentas</h4>
              <ul className={styles.skillsList}>
                <li>Git</li>
                <li>VS Code</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.aboutImage}>
          <img src={profilePhoto} alt="Foto profissional de Renan Fonseca" />
        </div>
      </div>
    </section>
  );
}
