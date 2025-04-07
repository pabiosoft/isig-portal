import React from 'react';
import Layout from '@theme/Layout';
import '../css/anciens.css'; // 👈 On importe le CSS propre

export default function Anciens() {
  return (
    <Layout title="Anciens élèves" description="Nos anciens élèves à travers le monde">
      <main className="anciens-main">
        <h1>Nos Anciens Élèves</h1>
        <p>
          Nos diplômés poursuivent leur parcours dans des entreprises prestigieuses, en Guinée et à l'international.
        </p>

        <ul className="alumni-list">
          <li className="alumni-card">
            <h3>Aissatou Diallo</h3>
            <p>Data Scientist chez Google (Canada)</p>
          </li>
          <li className="alumni-card">
            <h3>Mamadou Bah</h3>
            <p>Ingénieur Logiciel chez Microsoft (France)</p>
          </li>
          <li className="alumni-card">
            <h3>Fatoumata Camara</h3>
            <p>Responsable Marketing chez L'Oréal (Sénégal)</p>
          </li>
          <li className="alumni-card">
            <h3>Ousmane Condé</h3>
            <p>Analyste Financier chez JP Morgan (États-Unis)</p>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
