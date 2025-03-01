import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Database, Code, CloudArrowUp } from '@phosphor-icons/react';
import styles from './styles.module.css';
import profilePhoto from '@/assets/images/154706152_2840956502830419_371064825344242994_n.jpg';

export function About() {
  const navigate = useNavigate();

  const handleNavigateToTech = (section: string) => {
    navigate(`/tecnologias#${section}`);
  };

  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>Sobre mim</h2>
      <div className={styles.aboutContent}>
        <div className={styles.profileSection}>
          <div className={styles.profileImage}>
            <img src={profilePhoto} alt="Renan Fonseca" />
          </div>
          <div className={styles.profileInfo}>
            <h3>Renan Antunes Fonseca</h3>
            <span className={styles.role}>Full Stack Developer</span>
            <div className={styles.tags}>
              <span onClick={() => handleNavigateToTech('backend')} role="button" tabIndex={0}>
                <Database size={20} weight="duotone" />
                Backend
              </span>
              <span onClick={() => handleNavigateToTech('frontend')} role="button" tabIndex={0}>
                <Code size={20} weight="duotone" />
                Frontend
              </span>
              <span onClick={() => handleNavigateToTech('devops')} role="button" tabIndex={0}>
                <CloudArrowUp size={20} weight="duotone" />
                DevOps
              </span>
            </div>
          </div>
        </div>

        <div className={styles.bioContainer}>
          <div className={styles.bioContent}>
            <p className={styles.bioText}>
              Como Desenvolvedor Full Stack, combino habilidades em desenvolvimento frontend e backend 
              para criar soluções completas e eficientes. Com sólida formação em Análise e Desenvolvimento 
              de Sistemas e experiência prática na Bsoft, tenho me dedicado a desenvolver sistemas 
              empresariais robustos e escaláveis.
            </p>
            <p className={styles.bioText}>
              Minha abordagem ao desenvolvimento é focada em código limpo e boas práticas, 
              implementando testes unitários e princípios SOLID para garantir a qualidade e 
              manutenibilidade dos projetos. Trabalho com diversas tecnologias, incluindo Delphi, 
              PHP e C# no backend, e React com TypeScript no frontend.
            </p>
            <p className={styles.bioText}>
              Além do desenvolvimento, tenho experiência em mentorar outros desenvolvedores e 
              contribuir com a evolução das práticas de desenvolvimento da equipe. Acredito no 
              poder da colaboração e no compartilhamento de conhecimento para elevar a qualidade 
              dos projetos.
            </p>
          </div>
          
          <div className={styles.highlights}>
            <h4>Especialidades</h4>
            <ul>
              <li>Desenvolvimento Full Stack</li>
              <li>Arquitetura de Software</li>
              <li>Testes e Qualidade de Código</li>
              <li>Metodologias Ágeis</li>
              <li>Mentoria Técnica</li>
              <li>Integração de Sistemas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
