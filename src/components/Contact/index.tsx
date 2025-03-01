import React from 'react';
import styles from './styles.module.css';
import whatsappIcon from '@/assets/icons/icons8-whatsapp-24.png';
import emailIcon from '@/assets/icons/icons8-gmail-login-24.png';
import locationIcon from '@/assets/icons/icons8-location-24.png';

export function Contact() {
  return (
    <section id="contato" className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Contato</h2>
      <div className={styles.contactGrid}>
        <article className={styles.contactCard}>
          <img src={whatsappIcon} alt="WhatsApp" />
          <h3>WhatsApp</h3>
          <a href="tel:+5542991217290">(42) 99121-7290</a>
        </article>
        <article className={styles.contactCard}>
          <img src={emailIcon} alt="Email" />
          <h3>E-mail</h3>
          <a href="mailto:renanfonseca88@gmail.com">renanfonseca88@gmail.com</a>
        </article>
        <article className={styles.contactCard}>
          <img src={locationIcon} alt="Localização" />
          <h3>Localização</h3>
          <address>Imbituva-PR</address>
        </article>
      </div>
    </section>
  );
}
