import React from 'react';
import Layout from '@theme/Layout';
import '../css/formations.css'; // 👈 On importe le CSS premium

export default function Formations() {
  return (
    <Layout title="Formations" description="Programmes disponibles à l'ISIG">
      <main className="formations-main">
        <h1>Nos Formations</h1>
        <p>
          Découvrez nos programmes d'excellence, conçus pour répondre aux défis du monde contemporain et aux attentes des recruteurs internationaux.
        </p>

        <div className="programs-grid">
          <div className="program-card">
            <h3>Licence Informatique</h3>
            <p>Technologies modernes, cybersécurité, développement logiciel et innovation numérique.</p>
          </div>
          <div className="program-card">
            <h3>Licence Administration des Affaires</h3>
            <p>Management, marketing digital, stratégie d'entreprise et commerce international.</p>
          </div>
          <div className="program-card">
            <h3>Master Intelligence Artificielle</h3>
            <p>Machine learning, data science avancée, éthique de l'IA et IA appliquée au monde réel.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
