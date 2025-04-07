import React from 'react';
import Layout from '@theme/Layout';
import '../css/about.css'; // 👈 On importe le CSS premium

export default function About() {
  return (
    <Layout title="À propos" description="À propos de l'ISIG">
      <main className="about-main">
        <h1>À propos de l'ISIG</h1>
        <p style={{ marginBottom: '2rem' }}>
          Fondé avec une vision internationale, l'Institut Supérieur International de Guinée (ISIG) s'engage à former les talents
          capables d'impacter le monde. Nos programmes rigoureux, notre corps professoral d'exception et nos partenariats globaux
          positionnent nos diplômés parmi les leaders de demain.
        </p>
        <p>
          Notre mission est claire : offrir une éducation de classe mondiale, promouvoir l'innovation, et accompagner le développement
          socio-économique de la Guinée et au-delà. À l'ISIG, nous croyons que l'excellence est sans frontières.
        </p>
      </main>
    </Layout>
  );
}
