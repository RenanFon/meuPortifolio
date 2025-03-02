import { User, GraduationCap, Briefcase, Coffee } from '@phosphor-icons/react';
import styles from './styles.module.css';

export function About() {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>Sobre mim</h2>
      <div className={styles.aboutContent}>
        <div className={styles.bioContainer}>
          <div className={styles.bioHeader}>
            <User size={32} weight="duotone" />
            <div>
              <h3>Renan Antunes Fonseca</h3>
              <span>Desenvolvedor Full Stack</span>
            </div>
          </div>
          <div className={styles.bioContent}>
            <p className={styles.bioText}>
              Desenvolvedor apaixonado por criar soluções eficientes e escaláveis. 
              Com experiência em desenvolvimento web e sistemas corporativos, 
              busco sempre aplicar as melhores práticas e padrões de projeto para 
              entregar código de qualidade.
            </p>
            <p className={styles.bioText}>
              Atualmente, atuo no desenvolvimento e manutenção de sistemas empresariais, 
              com foco em melhorar a qualidade do código e a eficiência dos processos 
              de desenvolvimento. Tenho experiência com metodologias ágeis e trabalho 
              em equipe.
            </p>
            <div className={styles.interests}>
              <h4>
                <Coffee size={24} weight="duotone" />
                Áreas de Interesse
              </h4>
              <ul>
                <li>
                  <Briefcase size={20} weight="duotone" />
                  Arquitetura de Software
                </li>
                <li>
                  <GraduationCap size={20} weight="duotone" />
                  Clean Code
                </li>
                <li>
                  <User size={20} weight="duotone" />
                  DevOps
                </li>
                <li>
                  <Coffee size={20} weight="duotone" />
                  Testes Automatizados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
