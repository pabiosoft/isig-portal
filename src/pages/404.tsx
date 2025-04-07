import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import '../css/404.css'; // (facultatif pour encore plus stylé)

export default function NotFound() {
  return (
    <Layout title="Page Introuvable">
      <main className="notfound-container">
        <div className="notfound-content">
          <h1 className="notfound-title">404</h1>
          <h2 className="notfound-subtitle">Oups, cette page est introuvable...</h2>
          <p className="notfound-text">
            Il semble que vous soyez perdu. <br />
            Retournez à l’accueil ou explorez nos formations !
          </p>
          <div className="notfound-buttons">
            <Link className="button button--primary" to="/">
              Retour à l'accueil
            </Link>
            <Link className="button button--secondary" to="/formations">
              Voir nos formations
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
