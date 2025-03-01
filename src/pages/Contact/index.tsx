import React from 'react';
import styles from './styles.module.css';

export function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contato</h2>
      <div className={styles.contactGrid}>
        <article className={styles.contactCard}>
          <img src="/icons/icons8-whatsapp-24.png" alt="WhatsApp" />
          <h3>WhatsApp</h3>
          <a href="tel:+5542991217290">(42) 99121-7290</a>
        </article>
        <article className={styles.contactCard}>
          <img src="/icons/icons8-gmail-login-24.png" alt="Email" />
          <h3>E-mail</h3>
          <a href="mailto:renanfonseca88@gmail.com">renanfonseca88@gmail.com</a>
        </article>
        <article className={styles.contactCard}>
          <img src="/icons/icons8-location-24.png" alt="Localização" />
          <h3>Localização</h3>
          <address>Imbituva-PR</address>
        </article>
      </div>
    </section>
  );
}
