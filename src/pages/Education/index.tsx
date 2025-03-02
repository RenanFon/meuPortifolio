import styles from './styles.module.css';

export function Education() {
  const mainEducation = {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "UNICESUMAR",
    period: "2021 - 2023",
    description: "Formação focada em desenvolvimento de software, com ênfase em programação, banco de dados e engenharia de software.",
    skills: [
      "Programação Orientada a Objetos",
      "Banco de Dados",
      "Engenharia de Software",
      "Desenvolvimento Web",
      "Análise de Sistemas"
    ]
  };

  const additionalFormations = [
    {
      title: "Formação Engenharia de Software",
      institution: "Alura",
      period: "2022",
      skills: [
        "Design de Software",
        "Padrões de Design",
        "Metodologias Ágeis",
        "Testes de Software"
      ]
    },
    {
      title: "Formação Business Agility",
      institution: "Alura",
      period: "2022",
      skills: [
        "Metodologias Ágeis",
        "Gestão de Projetos",
        "Scrum",
        "Kanban"
      ]
    },
    {
      title: "Formação Comunicação",
      institution: "Alura",
      period: "2023",
      skills: [
        "Comunicação Interpessoal",
        "Apresentações",
        "Trabalho em Equipe"
      ]
    }
  ];

  return (
    <section className={styles.education}>
      <h2 className={styles.sectionTitle}>Formação</h2>
      <div className={styles.educationContent}>
        <div className={styles.mainEducation}>
          <div className={styles.educationCard}>
            {/* Principal formação */}
            <div className={styles.educationHeader}>
              <h3>{mainEducation.course}</h3>
              <span className={styles.period}>{mainEducation.period}</span>
              <span className={styles.institution}>{mainEducation.institution}</span>
            </div>
            <p className={styles.description}>{mainEducation.description}</p>
            <div className={styles.skillsList}>
              {mainEducation.skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.additionalEducation}>
          <h2>Formações Complementares</h2>
          <div className={styles.courseGrid}>
            {additionalFormations.map((formation, index) => (
              <div key={index} className={styles.educationCard}>
                <h3>{formation.title}</h3>
                <p className={styles.period}>{formation.period}</p>
                <p className={styles.institution}>{formation.institution}</p>
                <ul>
                  {formation.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
