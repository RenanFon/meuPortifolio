import React from 'react';
import styles from './styles.module.css';

export function Technologies() {
  const technologies = {
    frontend: [
      { 
        name: 'React',
        level: 'Avançado',
        icon: '⚛️',
        description: 'Desenvolvimento de interfaces modernas e componentizadas, com foco em performance e reusabilidade.',
      },
      { 
        name: 'JavaScript',
        level: 'Avançado',
        icon: '📜',
        description: 'Programação client-side robusta, manipulação do DOM e integração com APIs RESTful.',
      },
      { 
        name: 'TypeScript',
        level: 'Intermediário',
        icon: '💎',
        description: 'Desenvolvimento mais seguro com tipagem estática, interfaces e recursos modernos do JavaScript.',
      },
      { 
        name: 'HTML5/CSS3',
        level: 'Avançado',
        icon: '🎨',
        description: 'Estruturação semântica, layouts responsivos, animações e estilização moderna com Flexbox e Grid.',
      },
    ],
    backend: [
      { 
        name: 'Delphi',
        level: 'Avançado',
        icon: '🔷',
        description: 'Desenvolvimento desktop com ênfase em sistemas corporativos, integrações e relatórios.',
      },
      { 
        name: 'PHP',
        level: 'Intermediário',
        icon: '🐘',
        description: 'Construção de APIs RESTful, integrações com bancos de dados e desenvolvimento web.',
      },
      { 
        name: 'C#',
        level: 'Intermediário',
        icon: '♯',
        description: 'Desenvolvimento .NET com foco em APIs, microserviços e aplicações empresariais.',
      },
      { 
        name: 'SQL',
        level: 'Avançado',
        icon: '🗃️',
        description: 'Modelagem de dados, queries complexas, otimização de performance e stored procedures.',
      },
    ],
    others: [
      { 
        name: 'Git',
        level: 'Avançado',
        icon: '📋',
        description: 'Controle de versão, fluxos de trabalho em equipe, resolução de conflitos e integrações.',
      },
      { 
        name: 'Testes Unitários',
        level: 'Avançado',
        icon: '🧪',
        description: 'Desenvolvimento orientado a testes (TDD), mocks, cobertura de código e automação.',
      },
      { 
        name: 'SOLID',
        level: 'Intermediário',
        icon: '📐',
        description: 'Aplicação dos princípios de design de software para código limpo e manutenível.',
      },
      { 
        name: 'DevOps',
        level: 'Intermediário',
        icon: '🔄',
        description: 'Integração contínua, deploy automatizado e manutenção de ambientes.',
      },
    ]
  };

  return (
    <section className={styles.technologies}>
      <h1>Tecnologias</h1>
      
      <div className={styles.techGrid}>
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category} className={styles.techSection}>
            <h2>
              {category === 'frontend' && 'Frontend 🎨'}
              {category === 'backend' && 'Backend ⚙️'}
              {category === 'others' && 'Outras Tecnologias 🛠️'}
            </h2>
            <div className={styles.techList}>
              {techs.map((tech) => (
                <div key={tech.name} className={styles.techItem}>
                  <div className={styles.techIcon}>{tech.icon}</div>
                  <div className={styles.techInfo}>
                    <h3>{tech.name} <span className={styles.level}>{tech.level}</span></h3>
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
