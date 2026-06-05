import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

const translations = {
  ru: { news: 'Новости', about: 'Об авторе', contact: 'Обратная связь', services: 'Продукты и услуги', lang: 'EN', footer: 'Сайт создан 2026-05-22 © Анастасия Хитько | +7 908 517 50 43' },
  en: { news: 'News', about: 'About Author', contact: 'Contact Us', services: 'Products & Services', lang: 'RU', footer: 'Site created 2026-05-22 © Anastasia Hitko | +7 908 517 50 43' }
};

function Layout({ t, setLang, lang, menuOpen, setMenuOpen }) {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="/logo.png" alt="Логотип" style={{ height: '30px' }} />
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/news" onClick={() => setMenuOpen(false)}>{t.news}</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>{t.about}</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>{t.contact}</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>{t.services}</Link>
        </nav>
        <button className="lang-btn" onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}>{t.lang}</button>
      </header>

      <main className="main">
        <section className="section">
          {/* Баннер удалён */}
        </section>

        <article className="article">
          <Routes>
            <Route path="/" element={<News t={t} />} />
            <Route path="/news" element={<News t={t} />} />
            <Route path="/about" element={<About t={t} />} />
            <Route path="/contact" element={<Contact t={t} />} />
            <Route path="/services" element={<Services t={t} />} />
          </Routes>
        </article>

        <aside className="aside">
          <div>
            <strong>Теги:</strong> <br/>
            <span style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '5px' }}>
              #Образование #Методика #Курсы
            </span>
          </div>
          {/* Нижний баннер удалён */}
        </aside>
      </main>

      <footer className="footer">{t.footer}</footer>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('ru');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <BrowserRouter>
      <Layout t={t} setLang={setLang} lang={lang} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </BrowserRouter>
  );
}