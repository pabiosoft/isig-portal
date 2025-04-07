import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import '../css/admission.css'; // 👈 Ton CSS

export default function Admission() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    motivation: '',
  });
  const [captchaValue, setCaptchaValue] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  function generateCaptcha() {
    const n1 = Math.floor(Math.random() * 5) + 1;
    const n2 = Math.floor(Math.random() * 5) + 1;
    setNumber1(n1);
    setNumber2(n2);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleCaptchaInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setCaptchaValue(value);
    setErrorMessage('');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (parseInt(captchaValue.trim(), 10) !== number1 + number2) {
      setCaptchaValid(false);
      setErrorMessage('Réponse incorrecte. Veuillez réessayer.');
      setCaptchaValue('');
      generateCaptcha(); // Nouvelle question
      return;
    }

    setCaptchaValid(true);
    setErrorMessage('');

    // Construction du mailto:
    const subject = encodeURIComponent('Candidature ISIG');
    const body = encodeURIComponent(
      `Nom : ${formData.name}\n` +
      `Email : ${formData.email}\n` +
      `Téléphone : ${formData.phone}\n` +
      `Programme : ${formData.program}\n` +
      `Motivation :\n${formData.motivation}`
    );

    const mailtoLink = `mailto:contact@monimba.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink; // Ouvre l'email automatiquement
  }

  return (
    <Layout title="Admission" description="Déposez votre candidature à l'ISIG">
      <main className="admission-main">
        <h1>Déposez votre candidature</h1>
        <p>Merci de l'intérêt que vous portez à l'ISIG. Remplissez ce formulaire pour entamer votre admission.</p>

        <form className="admission-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Numéro de téléphone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <select
            name="program"
            value={formData.program}
            onChange={handleInputChange}
            required
          >
            <option value="">Choisir un programme</option>
            <option value="Licence Informatique">Licence Informatique</option>
            <option value="Licence Administration des Affaires">Licence Administration des Affaires</option>
            <option value="Master Intelligence Artificielle">Master Intelligence Artificielle</option>
          </select>
          <textarea
            name="motivation"
            rows={5}
            placeholder="Votre lettre de motivation"
            value={formData.motivation}
            onChange={handleInputChange}
            required
          ></textarea>

          {/* Mini CAPTCHA */}
          <div style={{ marginTop: '2rem', textAlign: 'left' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>
              Pour confirmer que vous êtes humain : Combien font {number1} + {number2} ?
            </label>
            <input
              type="text"
              value={captchaValue}
              onChange={handleCaptchaInput}
              placeholder="Votre réponse"
              required
            />
            {/* Message d'erreur sous le champ */}
            {errorMessage && (
              <div style={{ color: 'red', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                {errorMessage}
              </div>
            )}
          </div>

          <button type="submit" style={{ marginTop: '2rem' }}>
            Envoyer ma candidature
          </button>
        </form>
      </main>
    </Layout>
  );
}
