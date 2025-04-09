import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import '../css/admission.css'; // Ton CSS personnalisé
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Admission() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;

  const translations = {
    fr: {
      title: "Admission",
      description: "Déposez votre candidature à l'ISIG",
      heading: "Déposez votre candidature",
      intro: "Merci de l'intérêt que vous portez à l'ISIG. Remplissez ce formulaire pour entamer votre admission.",
      namePlaceholder: "Nom complet",
      emailPlaceholder: "Adresse email",
      phonePlaceholder: "Numéro de téléphone",
      programPlaceholder: "Choisir un programme",
      programs: [
        "Licence Informatique",
        "Licence Administration des Affaires",
        "Master Intelligence Artificielle"
      ],
      motivationPlaceholder: "Votre lettre de motivation",
      captchaQuestion: "Pour confirmer que vous êtes humain : Combien font",
      captchaPlaceholder: "Votre réponse",
      captchaError: "Réponse incorrecte. Veuillez réessayer.",
      submitButton: "Envoyer ma candidature",
    },
    en: {
      title: "Admission",
      description: "Submit your application to ISIG",
      heading: "Submit Your Application",
      intro: "Thank you for your interest in ISIG. Please fill out this form to begin your admission process.",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email Address",
      phonePlaceholder: "Phone Number",
      programPlaceholder: "Choose a program",
      programs: [
        "Bachelor in Computer Science",
        "Bachelor in Business Administration",
        "Master in Artificial Intelligence"
      ],
      motivationPlaceholder: "Your motivation letter",
      captchaQuestion: "To confirm you're human: What is",
      captchaPlaceholder: "Your answer",
      captchaError: "Incorrect answer. Please try again.",
      submitButton: "Submit my application",
    }
  };

  const t = translations[locale] || translations.fr; // fallback français

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
      setErrorMessage(t.captchaError);
      setCaptchaValue('');
      generateCaptcha(); // Nouvelle question
      return;
    }

    setCaptchaValid(true);
    setErrorMessage('');

    const subject = encodeURIComponent('Candidature ISIG');
    const body = encodeURIComponent(
      `Nom : ${formData.name}\n` +
      `Email : ${formData.email}\n` +
      `Téléphone : ${formData.phone}\n` +
      `Programme : ${formData.program}\n` +
      `Motivation :\n${formData.motivation}`
    );

    const mailtoLink = `mailto:contact@monimba.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  }

  return (
    <Layout title={t.title} description={t.description}>
      <main className="admission-main">
        <h1>{t.heading}</h1>
        <p>{t.intro}</p>

        <form className="admission-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t.namePlaceholder}
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t.emailPlaceholder}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder={t.phonePlaceholder}
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
            <option value="">{t.programPlaceholder}</option>
            {t.programs.map((program, index) => (
              <option key={index} value={program}>
                {program}
              </option>
            ))}
          </select>
          <textarea
            name="motivation"
            rows={5}
            placeholder={t.motivationPlaceholder}
            value={formData.motivation}
            onChange={handleInputChange}
            required
          ></textarea>

          {/* CAPTCHA */}
          <div style={{ marginTop: '2rem', textAlign: 'left' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>
              {t.captchaQuestion} {number1} + {number2} ?
            </label>
            <input
              type="text"
              value={captchaValue}
              onChange={handleCaptchaInput}
              placeholder={t.captchaPlaceholder}
              required
            />
            {errorMessage && (
              <div style={{ color: 'red', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                {errorMessage}
              </div>
            )}
          </div>

          <button type="submit" style={{ marginTop: '2rem' }}>
            {t.submitButton}
          </button>
        </form>
      </main>
    </Layout>
  );
}
