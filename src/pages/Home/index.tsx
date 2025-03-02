import styles from './styles.module.css';

export function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2>Desenvolvimento <span>Web e Back-end</span></h2>
        <p>
          Olá! Sou desenvolvedor web com foco em soluções front-end e back-end. 
          Atualmente cursando o último módulo de 
          <span className={styles.destaque}> Análise e Desenvolvimento de Sistemas</span>.
        </p>
        <p>Busco constantemente aprimorar minhas habilidades e entregar resultados de qualidade.</p>
        <div className={styles.cta}>
          <a href="/projetos" className={styles.primaryButton}>Ver Projetos</a>
          <a href="/sobre" className={styles.secondaryButton}>Saiba Mais</a>
        </div>
      </div>
    </section>
  );
}
