import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Database, 
  Code, 
  CloudArrowUp,
  GraduationCap,
  ArrowSquareOut,
  SquaresFour,
} from '@phosphor-icons/react';
import { TechnologySection } from '@/types';
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

  const sections: Record<string, TechnologySection> = {
    frontend: {
      icon: <Code size={28} weight="duotone" />,
      title: "Frontend",
      technologies: [
        {
          name: 'React',
          icon: <SquaresFour size={24} weight="duotone" />,
          description: 'Desenvolvimento de interfaces modernas e responsivas utilizando React. Experiência com hooks, context API, estados globais e locais.',
          courses: [
            {
              name: 'React Completo',
              institution: 'Origamid',
              certificateUrl: '#'
            },
            {
              name: 'React: desenvolvendo com JavaScript',
              institution: 'Alura',
              certificateUrl: '#'
            }
          ]
        }
      ]
    },
    backend: {
      icon: <Database size={28} weight="duotone" />,
      title: "Backend",
      technologies: [
        {
          name: 'Node.js',
          icon: <Code size={24} weight="duotone" />,
          description: 'Desenvolvimento de APIs RESTful com Node.js, Express e TypeScript.',
          courses: [
            {
              name: 'Node.js Completo',
              institution: 'Udemy',
              certificateUrl: '#'
            }
          ]
        }
      ]
    },
    devops: {
      icon: <CloudArrowUp size={28} weight="duotone" />,
      title: "DevOps",
      technologies: [
        {
          name: 'Docker',
          icon: <CloudArrowUp size={24} weight="duotone" />,
          description: 'Containerização de aplicações e orquestração com Docker e Docker Compose.',
          courses: [
            {
              name: 'Docker para Desenvolvedores',
              institution: 'Udemy',
              certificateUrl: '#'
            }
          ]
        }
      ]
    }
  };

  return (
    <div className={`pageContainer tech-bg`}>
      <h1 className={`pageTitle glow-text`}>Tecnologias</h1>
      
      {Object.entries(sections).map(([key, section]) => (
        <section key={key} className={`sectionContainer tech-border matrix-bg`}>
          <h2 className={`sectionTitle floating`}>{section.title}</h2>
          <div className={`${styles.techGrid} tech-dots`}>
            {section.technologies.map((tech) => (
              <div key={tech.name} className={`tech-card`}>
                <div className={styles.techHeader}>
                  <span className={styles.techIcon}>{tech.icon}</span>
                  <h3>{tech.name}</h3>
                </div>

                <p className={styles.techDescription}>
                  {tech.description}
                </p>

                <div className={styles.coursesList}>
                  <h4>
                    <GraduationCap size={24} weight="duotone" />
                    Certificações e Cursos
                  </h4>
                  
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
        </section>
      ))}
    </div>
  );
}
