import React from 'react';
import styles from './styles.module.css';
import facebookIcon from '@/assets/icons/icons8-facebook-24.png';
import linkedinIcon from '@/assets/icons/icons8-linkedin-24.png';
import instagramIcon from '@/assets/icons/icons8-instagram-24.png';
import whatsappIcon from '@/assets/icons/icons8-whatsapp-24.png';

export function SocialLinks() {
  return (
    <section className={styles.socialLinks} aria-label="Redes sociais">
      <ul>
        <li>
          <a href="https://www.facebook.com/renan.fonseca.7927" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/renanantunesfonseca/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/renan_fonseca_64/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
        </li>
      </ul>
    </section>
  );
}
