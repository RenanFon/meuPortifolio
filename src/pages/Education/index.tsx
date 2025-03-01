import React from 'react';
import styles from './styles.module.css';

export function Education() {
  return (
    <section className={styles.education}>
      <h1>Formação Acadêmica</h1>

      <div className={styles.mainEducation}>
        <div className={styles.educationCard}>
          <div className={styles.cardHeader}>
            <img src="/icons/unicesumar-logo.png" alt="Logo UniCesumar" className={styles.universityLogo} />
            <div>
              <h2>Análise e Desenvolvimento de Sistemas</h2>
              <p>UniCesumar • 2021 - 2023</p>
            </div>
          </div>

          <div className={styles.cardContent}>
            <p className={styles.description}>
              Formação tecnológica voltada ao desenvolvimento de soluções computacionais e análise de sistemas.
              O curso capacita profissionais para analisar, projetar, documentar, especificar, testar, implantar
              e manter sistemas de informação.
            </p>

            <div className={styles.highlights}>
              <h3>Principais Conhecimentos:</h3>
              <ul>
                <li>Desenvolvimento de Software</li>
                <li>Análise e Modelagem de Sistemas</li>
                <li>Banco de Dados</li>
                <li>Engenharia de Software</li>
                <li>Programação Orientada a Objetos</li>
                <li>Arquitetura de Software</li>
              </ul>
            </div>

            <div className={styles.projects}>
              <h3>Projetos Desenvolvidos:</h3>
              <ul>
                <li>Sistema de Gerenciamento de Projetos</li>
                <li>Aplicações Web com tecnologias modernas</li>
                <li>Integrações de APIs e Microsserviços</li>
                <li>Desenvolvimento de Sistemas Distribuídos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.additionalEducation}>
        <h2>Formação Complementar</h2>
        <div className={styles.courseGrid}>
          {/* Cursos e Certificações */}
          <div className={styles.courseCard}>
            <h3>Desenvolvimento Web</h3>
            <ul>
              <li>HTML5 e CSS3 (46h)</li>
              <li>JavaScript Avançado (49h)</li>
              <li>React JS (30h)</li>
            </ul>
          </div>

          <div className={styles.courseCard}>
            <h3>Back-end</h3>
            <ul>
              <li>Banco de Dados SQL e NoSQL (52h)</li>
              <li>Node.js (22h)</li>
              <li>Delphi Avançado (40h)</li>
            </ul>
          </div>

          <div className={styles.courseCard}>
            <h3>DevOps & Ferramentas</h3>
            <ul>
              <li>Git e GitHub (12h)</li>
              <li>Testes Unitários (20h)</li>
              <li>SCRUM (2h)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
