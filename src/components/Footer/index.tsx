import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Renan Fonseca. Todos os direitos reservados.</p>
    </footer>
  );
}
