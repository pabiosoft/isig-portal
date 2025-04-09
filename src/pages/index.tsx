import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '../css/homepage.css'; // Ton CSS personnalisé

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';



export default function Home() {
  const { i18n } = useDocusaurusContext();

  const locale = i18n.currentLocale;

  const translations = {
    fr: {
      title: "Accueil",
      description: "ISIG - Une éducation de classe mondiale pour les leaders de demain",
      heroTitle: "Forgez votre avenir avec l'ISIG",
      heroSubtitle: "Une éducation de classe mondiale pour les leaders de demain",
      heroButton: "Rejoignez-nous dès maintenant",
      valuesTitle: "Nos Valeurs",
      excellenceTitle: "Excellence",
      excellenceDesc: "Des standards académiques rigoureux pour une réussite assurée.",
      innovationTitle: "Innovation",
      innovationDesc: "Des programmes avant-gardistes pour des carrières d’avenir.",
      responsibilityTitle: "Responsabilité",
      responsibilityDesc: "Former des citoyens engagés pour un monde meilleur.",
      officialInfoTitle: "Informations Officielles",
      officialInfoSubtitle: "Tout ce que vous devez savoir pour démarrer votre parcours à l’ISIG.",
      regulation: "Règlement Intérieur",
      admission: "Conditions d’Admission",
      studentGuide: "Guide Étudiant",
      events: "Événements",
      programsTitle: "Nos Programmes",
      programsSubtitle: "Des formations d’excellence pour façonner les leaders de demain.",
      licenses: "Licences",
      masters: "Masters",
      alumniTitle: "Nos Anciens Élèves",
      alumniSubtitle: "Des parcours inspirants à travers le monde.",
      directorMessage: "Mot du Directeur",
      directorSpeech: `Chers futurs leaders, à l’ISIG, nous croyons en votre potentiel pour changer le monde. Notre mission est de vous fournir les outils, les connaissances et l’inspiration nécessaires pour réaliser vos rêves. Ensemble, construisons un avenir meilleur.`,
      applyTitle: "Prêt à rejoindre l’excellence ?",
      applySubtitle: "Postulez dès maintenant et commencez votre voyage vers le succès.",
      applyButton: "Déposez votre candidature",
      programsList: [
        {
          title: "Licences",
          icon: "https://img.icons8.com/?size=100&id=23318&format=png&color=000000",
          fields: [
            { emoji: "💻", name: "Informatique et Cybersécurité", desc: "Maîtrisez les technologies de demain et protégez le monde numérique." },
            { emoji: "📈", name: "Gestion des Entreprises", desc: "Acquérez les compétences pour diriger avec vision et efficacité." },
            { emoji: "🌐", name: "Commerce International", desc: "Devenez un acteur clé des échanges mondiaux." },
            { emoji: "🏛️", name: "Sciences Politiques", desc: "Comprenez les dynamiques globales et influencez l’avenir." }
          ],
          link: "/formations",
        },
        {
          title: "Masters",
          icon: "https://img.icons8.com/?size=100&id=23501&format=png&color=000000",
          fields: [
            { emoji: "🤖", name: "Intelligence Artificielle", desc: "Innovez et devenez un pionnier dans le domaine de l’IA." },
            { emoji: "🌍", name: "Management International", desc: "Dirigez des équipes à l’échelle mondiale avec aisance." },
            { emoji: "💰", name: "Finance et Audit", desc: "Maîtrisez la gestion financière avec expertise et précision." },
            { emoji: "🩺", name: "Ingénierie Biomédicale", desc: "Contribuez à des avancées révolutionnaires en santé." }
          ],
          link: "/formations",
        }
      ],
      alumniList: [
        {
          name: "Abdoul Traoré",
          role: "Data Scientist - Ministère de l’Économie Numérique 🇬🇳",
          quote: "L’ISIG m’a donné les clés pour exceller.",
          image: "/img/abdoul.jpg",
        },
        {
          name: "Mamadou Bah",
          role: "Administrateur Civil - Ministère de l’Administration 🇬🇳",
          quote: "Une formation qui ouvre des portes.",
          image: "/img/mamadou.jpg",
        },
        {
          name: "Francis Camara",
          role: "Marketing Digital - Capgemini 🇫🇷",
          quote: "L’ISIG m’a propulsée à l’international.",
          image: "/img/camara.jpg",
        }
      ]
    },
    en: {
      title: "Home",
      description: "ISIG - A world-class education for tomorrow's leaders",
      heroTitle: "Forge your future with ISIG",
      heroSubtitle: "A world-class education for tomorrow's leaders",
      heroButton: "Join us now",
      valuesTitle: "Our Values",
      excellenceTitle: "Excellence",
      excellenceDesc: "Rigorous academic standards for assured success.",
      innovationTitle: "Innovation",
      innovationDesc: "Cutting-edge programs for future careers.",
      responsibilityTitle: "Responsibility",
      responsibilityDesc: "Training engaged citizens for a better world.",
      officialInfoTitle: "Official Information",
      officialInfoSubtitle: "Everything you need to start your journey at ISIG.",
      regulation: "Internal Regulations",
      admission: "Admission Conditions",
      studentGuide: "Student Guide",
      events: "Events",
      programsTitle: "Our Programs",
      programsSubtitle: "Excellence training to shape tomorrow's leaders.",
      licenses: "Bachelor's Degrees",
      masters: "Master's Degrees",
      alumniTitle: "Our Alumni",
      alumniSubtitle: "Inspiring careers around the world.",
      directorMessage: "Director's Message",
      directorSpeech: `Dear future leaders, at ISIG, we believe in your potential to change the world. Our mission is to provide you with the tools, knowledge, and inspiration needed to achieve your dreams. Together, let's build a better future.`,
      applyTitle: "Ready to join excellence?",
      applySubtitle: "Apply now and start your journey to success.",
      applyButton: "Submit your application",
      programsList: [
        {
          title: "Bachelor's Degrees",
          icon: "https://img.icons8.com/?size=100&id=23318&format=png&color=000000",
          fields: [
            { emoji: "💻", name: "Computer Science and Cybersecurity", desc: "Master tomorrow's technologies and protect the digital world." },
            { emoji: "📈", name: "Business Management", desc: "Acquire skills to lead with vision and efficiency." },
            { emoji: "🌐", name: "International Trade", desc: "Become a key player in global exchanges." },
            { emoji: "🏛️", name: "Political Science", desc: "Understand global dynamics and shape the future." }
          ],
          link: "/formations",
        },
        {
          title: "Master's Degrees",
          icon: "https://img.icons8.com/?size=100&id=23501&format=png&color=000000",
          fields: [
            { emoji: "🤖", name: "Artificial Intelligence", desc: "Innovate and become a pioneer in AI." },
            { emoji: "🌍", name: "International Management", desc: "Lead global teams with ease." },
            { emoji: "💰", name: "Finance and Audit", desc: "Master financial management with expertise." },
            { emoji: "🩺", name: "Biomedical Engineering", desc: "Contribute to groundbreaking health advancements." }
          ],
          link: "/formations",
        }
      ],
      alumniList: [
        {
          name: "Abdoul Traoré",
          role: "Data Scientist - Ministry of Digital Economy 🇬🇳",
          quote: "ISIG gave me the keys to excel.",
          image: "/img/abdoul.jpg",
        },
        {
          name: "Mamadou Bah",
          role: "Civil Administrator - Ministry of Administration 🇬🇳",
          quote: "An education that opens doors.",
          image: "/img/mamadou.jpg",
        },
        {
          name: "Francis Camara",
          role: "Digital Marketing - Capgemini 🇫🇷",
          quote: "ISIG propelled me internationally.",
          image: "/img/camara.jpg",
        }
      ]
    }
  };

  const t = translations[locale] || translations.fr; // fallback français


  return (
    <Layout
      title={t.title}
      description={t.description}
    >
      <main>
        {/* HERO */}
        <div className="hero-banner">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSubtitle}</p>
          <Link className="button button--primary button--lg" to="/docs/categories/admission">
            {t.heroButton}
          </Link>
        </div>

        {/* VALEURS */}
        <section className="values-section">
          <h2>{t.valuesTitle}</h2>
          <div className="values-cards">
            <div className="values-card values-card-logo-only">
              <img src={useBaseUrl('/logo/logo.png')} alt="Logo ISIG" className="values-logo" />
            </div>
            <div className="values-card">
              <span className="icon">🏆</span>
              <h3>{t.excellenceTitle}</h3>
              <p>{t.excellenceDesc}</p>
            </div>
            <div className="values-card">
              <span className="icon">💡</span>
              <h3>{t.innovationTitle}</h3>
              <p>{t.innovationDesc}</p>
            </div>
            <div className="values-card">
              <span className="icon">🌍</span>
              <h3>{t.responsibilityTitle}</h3>
              <p>{t.responsibilityDesc}</p>
            </div>
          </div>
        </section>

        {/* INFORMATIONS OFFICIELLES */}
        <section className="official-info-section">
          <h2>{t.officialInfoTitle}</h2>
          <p className="official-info-subtitle">{t.officialInfoSubtitle}</p>
          <div className="official-info-cards">
            <Link to="/docs/reglement-interieur" className="official-info-card">
              <span className="icon">📜</span> {t.regulation}
            </Link>
            <Link to="/docs/categories/admission" className="official-info-card">
              <span className="icon">🎓</span> {t.admission}
            </Link>
            <Link to="/docs/categories/guide-etudiant" className="official-info-card">
              <span className="icon">📚</span> {t.studentGuide}
            </Link>
            <Link to="/docs/categories/evenements" className="official-info-card">
              <span className="icon">🎉</span> {t.events}
            </Link>
          </div>
        </section>

        {/* PROGRAMMES */}
        <section className="programs-section">
          <h2>{t.programsTitle}</h2>
          <p className="section-subtitle">{t.programsSubtitle}</p>
          <div className="programs-container">
        {t.programsList.map((program, idx) => (
          <div className="programs-card" key={idx}>
            <div className="card-header">
              <img src={program.icon} alt={program.title} className="card-icon" />
              <h3>{program.title}</h3>
            </div>
            <ul>
              {program.fields.map((field, idx2) => (
                <li key={idx2}>
                  <span className="program-icon">{field.emoji}</span> {field.name}
                  <p>{field.desc}</p>
                </li>
              ))}
            </ul>
            <Link className="button button--outline button--premium" to={program.link}>
              {program.title}
            </Link>
          </div>
        ))}
          </div>
        </section>


        {/* ANCIENS ÉLÈVES */}
        <section className="alumni-section">
          <h2>{t.alumniTitle}</h2>
          <p>{t.alumniSubtitle}</p>
          <div className="alumni-container">
            {t.alumniList.map((alumnus, idx) => (
              <div className="alumni-card" key={idx}>
                <img src={useBaseUrl(alumnus.image)} alt={alumnus.name} className="alumni-image" />
                <h3>{alumnus.name}</h3>
                <p>{alumnus.role}</p>
                <small>"{alumnus.quote}"</small>
              </div>
            ))}
          </div>
          <Link className="button button--primary" to="/anciens">
            Découvrir leurs parcours
          </Link>
        </section>


        {/* MOT DU DIRECTEUR */}
        <section className="director-section fade-in">
          <h2>{t.directorMessage}</h2>
          <div className="director-container">
            <img src={useBaseUrl('/img/directeur.png')} alt="Dr. Mohamed Diallo" className="director-image" />
            <div className="director-text">
              <p>{t.directorSpeech}</p>
              <p className="director-name">Dr. Mohamed Diallo<br />Directeur Général</p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="cta-section">
          <h2>{t.applyTitle}</h2>
          <p>{t.applySubtitle}</p>
          <Link className="cta-button" to="/admission">{t.applyButton}</Link>
        </section>
      </main>
    </Layout>
  );
}
