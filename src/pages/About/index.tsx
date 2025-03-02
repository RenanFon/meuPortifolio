import styles from './styles.module.css';
import profilePhoto from '@/assets/images/154706152_2840956502830419_371064825344242994_n.jpg';

export function About() {
  return (
    <div className={`pageContainer tech-bg`}>
      <h1 className={`pageTitle glow-text`}>Sobre Mim</h1>
      
      <section className={`sectionContainer tech-border matrix-bg`}>
        <div className={styles.content}>
          <div className={`${styles.profile} floating`}>
            <img src={profilePhoto} alt="Renan Fonseca" />
          </div>
          {/* ...rest of component... */}
        </div>
      </section>
    </div>
  );
}
