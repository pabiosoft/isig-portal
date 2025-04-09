import React from 'react';
import Layout from '@theme/Layout';
import '../css/about.css'; // 👈 Ton CSS premium
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function About() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;

  const translations = {
    fr: {
      title: "À propos",
      description: "À propos de l'ISIG",
      heading: "À propos de l'ISIG",
      paragraph1: `Fondé avec une vision internationale, l'Institut Supérieur International de Guinée (ISIG) s'engage à former les talents capables d'impacter le monde. Nos programmes rigoureux, notre corps professoral d'exception et nos partenariats globaux positionnent nos diplômés parmi les leaders de demain.`,
      paragraph2: `Notre mission est claire : offrir une éducation de classe mondiale, promouvoir l'innovation, et accompagner le développement socio-économique de la Guinée et au-delà. À l'ISIG, nous croyons que l'excellence est sans frontières.`,
    },
    en: {
      title: "About",
      description: "About ISIG",
      heading: "About ISIG",
      paragraph1: `Founded with an international vision, the International Higher Institute of Guinea (ISIG) is committed to training talents capable of impacting the world. Our rigorous programs, outstanding faculty, and global partnerships position our graduates among tomorrow’s leaders.`,
      paragraph2: `Our mission is clear: to provide world-class education, promote innovation, and support the socio-economic development of Guinea and beyond. At ISIG, we believe that excellence knows no boundaries.`,
    }
  };

  const t = translations[locale] || translations.fr; // fallback français

  return (
    <Layout title={t.title} description={t.description}>
      <main className="about-main">
        <h1>{t.heading}</h1>
        <p style={{ marginBottom: '2rem' }}>
          {t.paragraph1}
        </p>
        <p>
          {t.paragraph2}
        </p>
      </main>
    </Layout>
  );
}
