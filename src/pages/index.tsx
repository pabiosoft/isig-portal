import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import '../css/homepage.css'; // Assurez-vous que le CSS est mis à jour

export default function Home() {
  return (
    <Layout
      title="Accueil"
      description="ISIG - Une éducation de classe mondiale pour les leaders de demain"
    >
      <main>
        {/* HERO BANNER */}
        <div className="hero-banner">
          <h1>Forgez votre avenir avec l'ISIG</h1>
          <p>Une éducation de classe mondiale pour les leaders de demain</p>
          <Link className="button button--primary button--lg" to="/docs/tutorial-basics/admission">
            Rejoignez-nous dès maintenant
          </Link>
        </div>

        {/* VALEURS */}
        <section className="values-section">
          <h2>Nos Valeurs</h2>
          <div className="values-cards">
          <div className="values-card values-card-logo-only">
            <img src="/logo/logo.png" alt="Logo ISIG" className="values-logo" />
          </div>
            <div className="values-card">
              <span className="icon">🏆</span>
              <h3>Excellence</h3>
              <p>Des standards académiques rigoureux pour une réussite assurée.</p>
            </div>
            <div className="values-card">
              <span className="icon">💡</span>
              <h3>Innovation</h3>
              <p>Des programmes avant-gardistes pour des carrières d’avenir.</p>
            </div>
            <div className="values-card">
              <span className="icon">🌍</span>
              <h3>Responsabilité</h3>
              <p>Former des citoyens engagés pour un monde meilleur.</p>
            </div>
          </div>
        </section>

        {/* INFORMATIONS OFFICIELLES */}
        <section className="official-info-section">
          <h2>Informations Officielles</h2>
          <p className="official-info-subtitle">
            Tout ce que vous devez savoir pour démarrer votre parcours à l’ISIG.
          </p>
          <div className="official-info-cards">
            <Link to="/docs/reglement-interieur" className="official-info-card">
              <span className="icon">📜</span> Règlement Intérieur
              <p>Toutes les règles et attentes à l’ISIG.</p>
            </Link>
            <Link to="/docs/admission" className="official-info-card">
              <span className="icon">🎓</span> Conditions d’Admission
              <p>Comment rejoindre notre institution.</p>
            </Link>
            <Link to="/docs/guide-etudiant" className="official-info-card">
              <span className="icon">📚</span> Guide Étudiant
              <p>Votre manuel pour la vie étudiante.</p>
            </Link>
            <Link to="/docs/evenements" className="official-info-card">
              <span className="icon">🎉</span> Événements
              <p>Les moments forts de l’année.</p>
            </Link>
          </div>
        </section>

        <section className="programs-section">
          <h2>Nos Programmes</h2>
          <p className="section-subtitle">
            Des formations d’excellence pour façonner les leaders de demain.
          </p>
          <div className="programs-container">
            {/* Card Licences */}
            <div className="programs-card">
              <div className="card-header">
                <img src="https://img.icons8.com/?size=100&id=23318&format=png&color=000000" alt="Licence Icon" className="card-icon" />
                <h3>Licences</h3>
              </div>
              <ul>
                <li>
                  <span className="program-icon">💻</span> Informatique et Cybersécurité
                  <p>Maîtrisez les technologies de demain et protégez le monde numérique.</p>
                </li>
                <li>
                  <span className="program-icon">📈</span> Gestion des Entreprises
                  <p>Acquérez les compétences pour diriger avec vision et efficacité.</p>
                </li>
                <li>
                  <span className="program-icon">🌐</span> Commerce International
                  <p>Devenez un acteur clé des échanges mondiaux.</p>
                </li>
                <li>
                  <span className="program-icon">🏛️</span> Sciences Politiques
                  <p>Comprenez les dynamiques globales et influencez l’avenir.</p>
                </li>
              </ul>
              <Link className="button button--outline button--premium" to="/formations#licences">
                Explorer les Licences
              </Link>
            </div>

            {/* Card Masters */}
            <div className="programs-card">
              <div className="card-header">
                <img src="https://img.icons8.com/?size=100&id=23501&format=png&color=000000" alt="Master Icon" className="card-icon" />
                <h3>Masters</h3>
              </div>
              <ul>
                <li>
                  <span className="program-icon">🤖</span> Intelligence Artificielle
                  <p>Innovez et devenez un pionnier dans le domaine de l’IA.</p>
                </li>
                <li>
                  <span className="program-icon">🌍</span> Management International
                  <p>Dirigez des équipes à l’échelle mondiale avec aisance.</p>
                </li>
                <li>
                  <span className="program-icon">💰</span> Finance et Audit
                  <p>Maîtrisez la gestion financière avec expertise et précision.</p>
                </li>
                <li>
                  <span className="program-icon">🩺</span> Ingénierie Biomédicale
                  <p>Contribuez à des avancées révolutionnaires en santé.</p>
                </li>
              </ul>
              <Link className="button button--outline button--premium" to="/formations#masters">
                Explorer les Masters
              </Link>
            </div>
          </div>
        </section>

        {/* ANCIENS ÉLÈVES */}
        <section className="alumni-section">
          <h2>Nos Anciens Élèves</h2>
          <p>Des parcours inspirants à travers le monde.</p>
          <div className="alumni-container">
            <div className="alumni-card">
              <img src="/img/aissatou.jpg" alt="Aissatou Diallo" className="alumni-image" />
              <h3>Abdoul Traoré</h3>
              <p>Data Scientist - Ministère de l’Économie Numérique 🇬🇳</p>
              <small>"L’ISIG m’a donné les clés pour exceller."</small>
            </div>
            <div className="alumni-card">
              <img src="/img/mamadou.jpg" alt="Mamadou Bah" className="alumni-image" />
              <h3>Mamadou Bah</h3>
              <p>Administrateur Civil - Ministère de l’Administration 🇬🇳</p>
              <small>"Une formation qui ouvre des portes."</small>
            </div>
            <div className="alumni-card">
              <img src="/img/camara.jpg" alt="Fatoumata Camara" className="alumni-image" />
              <h3>Francis Camara</h3>
              <p>Marketing Digital - Capgemini 🇫🇷</p>
              <small>"L’ISIG m’a propulsée à l’international."</small>
            </div>
          </div>
          <Link className="button button--primary" to="/anciens">Découvrir leurs parcours</Link>
        </section>

        {/* MOT DU DIRECTEUR */}
        <section className="director-section fade-in">
          <h2>Mot du Directeur</h2>
          <div className="director-container">
            <img src="/img/directeur.png" alt="Dr. Mohamed Diallo" className="director-image" />
            <div className="director-text">
              <p>
                "Chers futurs leaders, à l’ISIG, nous croyons en votre potentiel pour changer le monde. Notre mission est de vous fournir les outils, les connaissances et l’inspiration nécessaires pour réaliser vos rêves. Ensemble, construisons un avenir meilleur."
              </p>
              <p className="director-name">Dr. Mohamed Diallo<br />Directeur Général</p>
            </div>
          </div>
        </section>

        {/* APPEL À ACTION FINAL */}
        <section className="cta-section">
          <h2>Prêt à rejoindre l’excellence ?</h2>
          <p>Postulez dès maintenant et commencez votre voyage vers le succès.</p>
          <Link className="cta-button" to="/admission">Déposez votre candidature</Link>
        </section>
      </main>
    </Layout>
  );
}