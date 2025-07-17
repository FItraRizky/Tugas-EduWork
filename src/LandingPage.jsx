import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import profile from '../profile.jpg';

const FOTO_USER = profile;
const RUNNING_TEXT = 'Selamat datang di Tugas Eduwork! Platform tugas, belajar, dan pengembangan skill digital terbaik di Indonesia 🚀';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">Tugas Eduwork</div>
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
          <img src={FOTO_USER} alt="Foto User" />
        </div>
      </header>
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