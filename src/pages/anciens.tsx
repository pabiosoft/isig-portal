import React from 'react';
import Layout from '@theme/Layout';
import '../css/anciens.css'; // 👈 Ton CSS
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Anciens() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;

  const translations = {
    fr: {
      title: "Anciens élèves",
      description: "Nos anciens élèves à travers le monde",
      heading: "Nos Anciens Élèves",
      intro: "Nos diplômés poursuivent leur parcours dans des entreprises prestigieuses, en Guinée et à l'international.",
      alumni: [
        { name: "Aissatou Diallo", role: "Data Scientist chez Google (Canada)" },
        { name: "Mamadou Bah", role: "Ingénieur Logiciel chez Microsoft (France)" },
        { name: "Fatoumata Camara", role: "Responsable Marketing chez L'Oréal (Sénégal)" },
        { name: "Ousmane Condé", role: "Analyste Financier chez JP Morgan (États-Unis)" }
      ]
    },
    en: {
      title: "Alumni",
      description: "Our alumni around the world",
      heading: "Our Alumni",
      intro: "Our graduates pursue careers at prestigious companies, both in Guinea and internationally.",
      alumni: [
        { name: "Aissatou Diallo", role: "Data Scientist at Google (Canada)" },
        { name: "Mamadou Bah", role: "Software Engineer at Microsoft (France)" },
        { name: "Fatoumata Camara", role: "Marketing Manager at L'Oréal (Senegal)" },
        { name: "Ousmane Condé", role: "Financial Analyst at JP Morgan (United States)" }
      ]
    }
  };

  const t = translations[locale] || translations.fr; // fallback fr

  return (
    <Layout title={t.title} description={t.description}>
      <main className="anciens-main">
        <h1>{t.heading}</h1>
        <p>{t.intro}</p>

        <ul className="alumni-list">
          {t.alumni.map((alumnus, index) => (
            <li key={index} className="alumni-card">
              <h3>{alumnus.name}</h3>
              <p>{alumnus.role}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
