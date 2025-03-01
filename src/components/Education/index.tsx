import styles from './styles.module.css';

export function Education() {
  return (
    <section id="formacao" className={styles.educationSection}>
      <h2 className={styles.sectionTitle}>Formação</h2>
      <div className={styles.educationGrid}>
        <article className={styles.educationCard}>
          <h3>Formação Acadêmica</h3>
          <p>Análise e Desenvolvimento de Sistemas</p>
          <p>Último módulo (5/5)</p>
        </article>
        <article className={styles.educationCard}>
          <h3>Certificações e Cursos</h3>
          <ul className={styles.coursesList}>
            <li>Algoritmos e Lógica de Programação (33h)</li>
            <li>Bancos de Dados SQL e NoSQL (52h)</li>
            <li>Git e GitHub (12h)</li>
            <li>HTML5 e CSS3 (46h)</li>
            <li>JavaScript Avançado (49h)</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
