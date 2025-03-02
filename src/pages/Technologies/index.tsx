import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Database, 
  Code, 
  CloudArrowUp,
  GraduationCap,
  ArrowSquareOut,
  SquaresFour, // Para React (substituindo Braces)
  FileJs,
  Globe, // Para HTML/CSS (substituindo Browser)
  Terminal,
  Code as CodeIcon,
  Hash,
  GitBranch,
  Database as DbIcon,
  Star
} from '@phosphor-icons/react';
import styles from './styles.module.css';

export function Technologies() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const sections = {
    frontend: {
      icon: <Code size={28} weight="duotone" />,
      title: "Frontend",
      technologies: [
        {
          name: 'React',
          icon: <SquaresFour size={24} weight="duotone" />, // Atualizado
          description: 'Desenvolvimento de interfaces modernas e responsivas utilizando React. Experiência com hooks, context API, estados globais e locais. Criação de componentes reutilizáveis e implementação de layouts complexos com foco em performance e experiência do usuário.',
          courses: [
            {
              name: 'React Completo',
              institution: 'Origamid',
              certificateUrl: '#' // URL do certificado
            },
            {
              name: 'React: desenvolvendo com JavaScript',
              institution: 'Alura',
              certificateUrl: '#'
            },
            {
              name: 'React Native: Criando um App',
              institution: 'Alura',
              certificateUrl: '#'
            }
          ]
        },
        {
          name: 'JavaScript',
          icon: <FileJs size={24} weight="duotone" />,
          description: 'Domínio avançado de JavaScript moderno (ES6+), incluindo promises, async/await, manipulação do DOM, módulos e closures. Experiência com TypeScript para desenvolvimento mais seguro e manutenível.',
          courses: [
            'JavaScript Completo ES6 - Origamid',
            'JavaScript do Básico ao Avançado - Udemy',
            'JavaScript para Web - Alura'
          ]
        },
        {
          name: 'HTML/CSS',
          icon: <Globe size={24} weight="duotone" />, // Atualizado
          description: 'Desenvolvimento de interfaces responsivas e acessíveis com HTML semântico e CSS moderno. Experiência com Flexbox, Grid, animações, transformações e design adaptativo. Implementação de layouts complexos com foco em performance e compatibilidade cross-browser.',
          courses: [
            'HTML e CSS para Iniciantes - Origamid',
            'CSS Flexbox - Origamid',
            'CSS Grid Layout - Origamid'
          ]
        }
      ]
    },
    backend: {
      icon: <Database size={28} weight="duotone" />,
      title: "Backend",
      technologies: [
        {
          name: 'Delphi',
          icon: <Terminal size={24} weight="duotone" />,
          description: 'Desenvolvimento de sistemas desktop empresariais robustos com Delphi. Experiência em criação de relatórios, integração com bancos de dados, implementação de regras de negócio complexas e otimização de performance. Conhecimento em padrões de projeto e arquitetura em camadas.',
          courses: [
            'Delphi Fundamental - Udemy',
            'Desenvolvendo Sistema com Delphi e SQL - Udemy',
            'Delphi: Explorando a Linguagem - Alura'
          ]
        },
        {
          name: 'PHP',
          icon: <CodeIcon size={24} weight="duotone" />,
          description: 'Desenvolvimento de aplicações web com PHP moderno, seguindo PSRs e boas práticas. Experiência com frameworks como Laravel, implementação de APIs RESTful, testes automatizados e integração com diversos serviços e bancos de dados.',
          courses: [
            'Formação Aprenda a programar em PHP - Alura',
            'Formação Boas práticas em PHP - Alura',
            'PHP e TDD: testes com PHPUnit - Alura'
          ]
        },
        {
          name: 'C#',
          icon: <Hash size={24} weight="duotone" />,
          description: 'Desenvolvimento de aplicações .NET com C#, incluindo Web APIs, serviços Windows e aplicações console. Conhecimento em LINQ, Entity Framework, injeção de dependência e princípios SOLID.',
          courses: [
            'Formação Aprenda a programar em C# com Orientação a Objetos - Alura'
          ]
        }
      ]
    },
    devops: {
      icon: <CloudArrowUp size={28} weight="duotone" />,
      title: "DevOps",
      technologies: [
        {
          name: 'Git',
          icon: <GitBranch size={24} weight="duotone" />,
          description: 'Gerenciamento avançado de versão com Git, incluindo estratégias de branching, resolução de conflitos, git flow e integração contínua. Experiência com GitHub Actions, hooks e automação de processos.',
          courses: [
            'Git e GitHub: Controle e Compartilhe seu Código - Alura',
            'Git e GitHub: Estratégias de Ramificação - Alura',
            'Git e GitHub Essencial para o Desenvolvedor - Geek University'
          ]
        },
        {
          name: 'SQL',
          icon: <DbIcon size={24} weight="duotone" />,
          description: 'Modelagem e otimização de bancos de dados relacionais, com foco em PostgreSQL e MySQL. Experiência em queries complexas, procedures armazenadas, triggers, índices e tuning de performance.',
          courses: [
            'Formação SQL com PostgreSQL - Alura',
            'SQL com MySQL Server da Oracle - Alura',
            'Banco de Dados SQL - Geek University'
          ]
        },
        {
          name: 'Clean Code',
          icon: <Star size={24} weight="duotone" />,
          description: 'Aplicação de princípios de Clean Code e SOLID para criar código limpo, manutenível e testável. Experiência em refatoração, code review e implementação de padrões de projeto para melhorar a qualidade do código.',
          courses: [
            'Clean Code na Prática - Udemy',
            'Refatoração em PHP: boas práticas no seu código - Alura'
          ]
        }
      ]
    }
  };

  return (
    <section className={styles.technologies}>
      <h2 className="sectionTitle" data-text="Tecnologias">Tecnologias</h2>
      <div className={styles.techGrid}>
        {Object.entries(sections).map(([key, section]) => (
          <div key={key} id={key} className={styles.techSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>{section.icon}</span>
              <h3>{section.title}</h3>
            </div>
            <div className={styles.techList}>
              {section.technologies.map((tech) => (
                <div key={tech.name} className={styles.techCard}>
                  <div className={styles.techHeader}>
                    <div className={styles.techName}>
                      <span className={styles.techIcon}>{tech.icon}</span>
                      <h4>{tech.name}</h4>
                    </div>
                  </div>

                  <p className={styles.techDescription}>
                    {tech.description}
                  </p>

                  <div className={styles.coursesList}>
                    <h5>
                      <GraduationCap size={24} weight="duotone" />
                      Certificações e Cursos
                    </h5>
                    
                    {tech.courses.map((course, index) => (
                      <a
                        key={index}
                        href={course.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.courseLink}
                      >
                        <span className={styles.courseName}>{course.name}</span>
                        <span className={styles.courseInstitution}>
                          {course.institution}
                        </span>
                        <ArrowSquareOut size={20} />
                      </a>
                    ))}
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
