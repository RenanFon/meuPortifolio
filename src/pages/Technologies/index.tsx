import React from 'react';
import { Database, Code, CloudArrowUp } from '@phosphor-icons/react';
import styles from './styles.module.css';

export function Technologies() {
  const sections = {
    frontend: {
      icon: <Code size={28} weight="duotone" />,
      title: "Frontend",
      technologies: [
        { name: 'React', level: 'Avançado', description: 'Desenvolvimento de interfaces modernas e componentizadas.' },
        { name: 'TypeScript', level: 'Intermediário', description: 'Desenvolvimento com tipagem estática e recursos modernos.' },
        { name: 'JavaScript', level: 'Avançado', description: 'Programação client-side e manipulação do DOM.' },
        { name: 'HTML/CSS', level: 'Avançado', description: 'Layouts responsivos e estilização moderna.' }
      ]
    },
    backend: {
      icon: <Database size={28} weight="duotone" />,
      title: "Backend",
      technologies: [
        { name: 'Delphi', level: 'Avançado', description: 'Desenvolvimento desktop e sistemas corporativos.' },
        { name: 'PHP', level: 'Intermediário', description: 'Desenvolvimento web e APIs RESTful.' },
        { name: 'C#', level: 'Intermediário', description: 'Aplicações empresariais e microserviços.' },
        { name: 'SQL', level: 'Avançado', description: 'Modelagem e otimização de bancos de dados.' }
      ]
    },
    devops: {
      icon: <CloudArrowUp size={28} weight="duotone" />,
      title: "DevOps",
      technologies: [
        { name: 'Git', level: 'Avançado', description: 'Controle de versão e workflows em equipe.' },
        { name: 'Testes', level: 'Avançado', description: 'Testes unitários, integração e TDD.' },
        { name: 'SOLID', level: 'Intermediário', description: 'Princípios de design e código limpo.' },
        { name: 'CI/CD', level: 'Intermediário', description: 'Integração e deploy contínuos.' }
      ]
    }
  };

  return (
    <section className={styles.technologies}>
      <h2 className={styles.sectionTitle}>Tecnologias</h2>
      <div className={styles.techGrid}>
        {Object.entries(sections).map(([key, section]) => (
          <div key={key} className={styles.techSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>{section.icon}</span>
              <h3>{section.title}</h3>
            </div>
            <div className={styles.techList}>
              {section.technologies.map((tech) => (
                <div key={tech.name} className={styles.techCard}>
                  <div className={styles.techInfo}>
                    <h4>{tech.name}</h4>
                    <span className={styles.level}>{tech.level}</span>
                    <p>{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
