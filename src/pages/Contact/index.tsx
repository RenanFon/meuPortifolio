import React from 'react';
import {
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  Phone,
  MapPin,
  Copy,
  CheckCircle
} from '@phosphor-icons/react';
import styles from './styles.module.css';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('renanfonseca88@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactInfo = [
    {
      icon: <EnvelopeSimple size={24} weight="duotone" />,
      title: 'Email',
      content: 'renanfonseca88@gmail.com',
      link: 'mailto:renanfonseca88@gmail.com',
      copyable: true
    },
    {
      icon: <LinkedinLogo size={24} weight="duotone" />,
      title: 'LinkedIn',
      content: 'Renan Fonseca',
      link: 'https://www.linkedin.com/in/renan-fonseca-8a5384200/'
    },
    {
      icon: <GithubLogo size={24} weight="duotone" />,
      title: 'GitHub',
      content: 'RenanFon',
      link: 'https://github.com/RenanFon'
    },
    {
      icon: <Phone size={24} weight="duotone" />,
      title: 'Telefone',
      content: '+55 (44) 99999-9999',
      link: 'tel:+5544999999999'
    },
    {
      icon: <MapPin size={24} weight="duotone" />,
      title: 'Localização',
      content: 'Maringá, PR - Brasil'
    }
  ];

  return (
    <section className={styles.contactSection}>
      <h2 className="sectionTitle" data-text="Contato">Contato</h2>
      <div className={styles.contactContent}>
        <div className={styles.contactCard}>
          <h3>Vamos Conversar!</h3>
          <p>
            Estou sempre aberto a novas oportunidades e parcerias. 
            Se você tem um projeto interessante ou quer bater um papo sobre tecnologia, 
            ficarei feliz em conversar!
          </p>
          <div className={styles.contactGrid}>
            {contactInfo.map((info, index) => (
              <div key={index} className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  {info.icon}
                </div>
                <div className={styles.contactInfo}>
                  <h4>{info.title}</h4>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.content}
                    </a>
                  ) : (
                    <span>{info.content}</span>
                  )}
                </div>
                {info.copyable && (
                  <button 
                    onClick={handleCopyEmail}
                    className={styles.copyButton}
                    title="Copiar email"
                  >
                    {copiedEmail ? (
                      <CheckCircle size={20} weight="duotone" />
                    ) : (
                      <Copy size={20} weight="duotone" />
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
