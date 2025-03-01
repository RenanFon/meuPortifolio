import React from 'react';
import styles from './styles.module.css';

export function About() {
  return (
    <section className={styles.about}>
      <div className={styles.bioContainer}>
        <div className={styles.bioHeader}>
          <h2>Renan Antunes Fonseca</h2>
          <span>Desenvolvedor Full Stack</span>
        </div>
        <p className={styles.bioText}>
          Desenvolvedor web focado em criar soluções eficientes e escaláveis. 
          Atualmente cursando o último módulo de Análise e Desenvolvimento de Sistemas, 
          busco constantemente aprender e aplicar novas tecnologias.
        </p>
      </div>

      <div className={styles.experienceContainer}>
        <h3>Experiência Profissional</h3>
        <div className={styles.jobCard}>
          <div className={styles.jobHeader}>
            <h4>Desenvolvedor na Bsoft</h4>
            <span>Julho 2023 - Presente · 1 ano 9 meses</span>
          </div>
          <p className={styles.jobDescription}>
            Como Desenvolvedor na Bsoft, tenho atuado diretamente em melhorias na qualidade 
            do código e na eficiência do desenvolvimento.
          </p>
          <div className={styles.achievements}>
            <h5>Principais Realizações:</h5>
            <ul>
              <li>
                <strong>Testes Unitários e de Integração:</strong> Desenvolvimento e implementação 
                de uma nova estrutura de testes, aumentando a confiabilidade do software e 
                acelerando o ciclo de desenvolvimento.
              </li>
              <li>
                <strong>Princípios SOLID:</strong> Aplicação dos princípios SOLID no sistema 
                principal, melhorando a manutenibilidade e a escalabilidade do código.
              </li>
              <li>
                <strong>Ferramentas e Mentoria:</strong> Desenvolvimento de ferramentas auxiliares 
                e orientação de desenvolvedores em práticas de testes unitários e código limpo.
              </li>
              <li>
                <strong>Manutenção Contínua:</strong> Manutenções regulares e melhorias 
                constantes nas ferramentas auxiliares para garantir eficiência operacional.
              </li>
            </ul>
          </div>
          <div className={styles.techStack}>
            <h5>Tecnologias:</h5>
            <ul>
              <li>Delphi</li>
              <li>PHP</li>
              <li>C#</li>
            </ul>
          </div>
        </div>
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
    </section>
  );
}
