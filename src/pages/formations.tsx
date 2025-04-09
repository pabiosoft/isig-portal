import React from 'react';
import Layout from '@theme/Layout';
import '../css/formations.css'; // 👈 Ton CSS
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Formations() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;

  const translations = {
    fr: {
      title: "Formations",
      description: "Programmes disponibles à l'ISIG",
      heading: "Nos Formations",
      intro: "Découvrez nos programmes d'excellence, conçus pour répondre aux défis du monde contemporain et aux attentes des recruteurs internationaux.",
      programs: [
        {
          name: "Licence Informatique",
          desc: "Technologies modernes, cybersécurité, développement logiciel et innovation numérique."
        },
        {
          name: "Licence Administration des Affaires",
          desc: "Management, marketing digital, stratégie d'entreprise et commerce international."
        },
        {
          name: "Master Intelligence Artificielle",
          desc: "Machine learning, data science avancée, éthique de l'IA et IA appliquée au monde réel."
        }
      ]
    },
    en: {
      title: "Programs",
      description: "Programs available at ISIG",
      heading: "Our Programs",
      intro: "Discover our excellence programs, designed to meet contemporary challenges and international recruiters' expectations.",
      programs: [
        {
          name: "Bachelor in Computer Science",
          desc: "Modern technologies, cybersecurity, software development, and digital innovation."
        },
        {
          name: "Bachelor in Business Administration",
          desc: "Management, digital marketing, business strategy, and international trade."
        },
        {
          name: "Master in Artificial Intelligence",
          desc: "Machine learning, advanced data science, AI ethics, and real-world AI applications."
        }
      ]
    }
  };

  const t = translations[locale] || translations.fr; // fallback fr

  return (
    <Layout title={t.title} description={t.description}>
      <main className="formations-main">
        <h1 >{t.heading}</h1>
        <p>{t.intro}</p>

        <div className="programs-grid">
          {t.programs.map((program, index) => (
            <div key={index} className="program-card">
              <h3>{program.name}</h3>
              <p>{program.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
