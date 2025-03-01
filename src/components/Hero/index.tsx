import React from 'react';
import styles from './styles.module.css';
import profileImage from '@/assets/images/fundo2.png';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.apresentacao}>
        <h2>Desenvolvimento <span>Web e Back-end</span></h2>
        <p>Olá! Sou desenvolvedor web com foco em soluções front-end e back-end. 
           Atualmente estou cursando o último módulo de 
           <span className={styles.destaque}>Análise e Desenvolvimento de Sistemas</span>.</p>
        <p>Busco constantemente aprimorar minhas habilidades e entregar resultados de qualidade.</p>
      </div>
      <div className={styles.profileImage}>
        <img src={profileImage} alt="Foto de Renan Fonseca" />
      </div>
    </section>
  );
}
