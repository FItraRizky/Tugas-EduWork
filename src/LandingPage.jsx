import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import profile from '../profile.jpg';

const FOTO_USER = profile;
const RUNNING_TEXT = 'Selamat datang di Tugas Eduwork! Platform tugas, belajar, dan pengembangan skill digital terbaik di Indonesia 🚀';

const LANGUAGES = [
  { name: 'Java', label: '☕' },
  { name: 'JavaScript', label: 'JS' },
  { name: 'Python', label: '🐍' },
  { name: 'PHP', label: 'PHP' },
  { name: 'HTML', label: '<>' },
  { name: 'CSS', label: '{ }' },
  { name: 'C', label: 'C' },
  { name: 'C#', label: 'C#' },
  { name: 'MySQL', label: 'DB' },
  { name: 'Docker', label: '🐳' },
];

function Language3DBalls() {
  return (
    <section className="languages-3d-section">
      <h2 className="judul-animasi" style={{marginBottom: 32}}>Bahasa Pemrograman Favorit</h2>
      <div className="languages-3d-container">
        {LANGUAGES.map((lang, i) => (
          <div className="lang-3d-ball" key={lang.name} style={{animationDelay: `${i * 0.15}s`}}>
            <span>{lang.label}</span>
            <div className="lang-3d-label">{lang.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={profile} alt="Logo" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #2d8cff' }} />
        <span>Tugas Eduwork</span>
      </div>
      <button className="navbar-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span className={open ? 'bar open' : 'bar'}></span>
        <span className={open ? 'bar open' : 'bar'}></span>
        <span className={open ? 'bar open' : 'bar'}></span>
      </button>
      <ul className={open ? 'navbar-menu open' : 'navbar-menu'}>
        <li><a href="#home">Home</a></li>
        <li><a href="#fitur">Fitur</a></li>
        <li><a href="#kontak">Kontak</a></li>
      </ul>
    </nav>
  );
}

function HeroPhoto3D() {
  const imgRef = React.useRef(null);

  React.useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const handleMouseMove = (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;
      img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
    };
    const reset = () => {
      img.style.transform = '';
    };
    img.addEventListener('mousemove', handleMouseMove);
    img.addEventListener('mouseleave', reset);
    return () => {
      img.removeEventListener('mousemove', handleMouseMove);
      img.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={FOTO_USER}
      alt="Foto User"
      style={{ transition: 'transform 0.3s cubic-bezier(.68,-0.55,.27,1.55)' }}
    />
  );
}

export default function LandingPage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="landing-container">
      <Navbar />
      <button className="dark-toggle" onClick={() => setDark(d => !d)}>
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>
      <div className="parallax-bg"></div>
      <header className="header header-flex" id="home">
        <div className="hero-text">
          <h1 className="judul-animasi">Tugas Eduwork</h1>
          <div className="running-text-modern">
            <span className="running-text-content">
              {RUNNING_TEXT} &nbsp; &nbsp; {RUNNING_TEXT}
            </span>
          </div>
        </div>
        <div className="hero-photo parallax-foto">
          <HeroPhoto3D />
        </div>
      </header>
      <Language3DBalls />
      <main className="main-content" id="fitur">
        <div className="card hover-card">
          <h2>Belajar Interaktif</h2>
          <p>tugas.</p>
        </div>
        <div className="card hover-card">
          <h2>Animasi Modern</h2>
          <p>tugas.</p>
        </div>
        <div className="card hover-card">
          <h2>Running Text</h2>
          <p>tugas</p>
        </div>
      </main>
      <footer className="footer" id="kontak">
        &copy; 2025 Tugas Eduwork. All rights reserved.
      </footer>
    </div>
  );
} 