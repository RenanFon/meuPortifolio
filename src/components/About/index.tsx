import React from 'react';
import styles from './styles.module.css';
import profilePhoto from '@/assets/images/154706152_2840956502830419_371064825344242994_n.jpg';

export function About() {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>Sobre mim</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>Desenvolvedor web focado em criar soluções eficientes e escaláveis. Possuo experiência com:</p>
          <ul className={styles.skillsList}>
            <li>HTML5 e CSS3</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>Delphi</li>
            <li>Git</li>
          </ul>
        </div>
        <div className={styles.aboutImage}>
          <img src={profilePhoto} alt="Foto profissional de Renan Fonseca" />
        </div>
      </div>
    </section>
  );
}
