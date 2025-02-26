'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  useEffect(() => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const closeMenu = document.getElementById('nav-close');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => navMenu.classList.toggle('show'));
    }

    if (closeMenu && navMenu) {
      closeMenu.addEventListener('click', () => navMenu.classList.remove('show'));
    }

    return () => {
      if (navToggle) navToggle.removeEventListener('click', () => navMenu.classList.toggle('show'));
      if (closeMenu) closeMenu.removeEventListener('click', () => navMenu.classList.remove('show'));
    };
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div className="nav-toggle" id="nav-toggle">
          <i className='bx bx-menu'></i>
        </div>

        <div>
          <Link href="/" className="nav-logo">Mahdi Jazini</Link>
        </div>

        <div className="nav-menu" id="nav-menu">
          <div className="nav-close" id="nav-close">
            <i className='bx bx-x'></i>
          </div>

          <ul className="nav-list">
            <li className="nav-item"><Link href="#home" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link href="#about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link href="#skills" className="nav-link">Skills</Link></li>
            <li className="nav-item"><Link href="#services" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link href="#works" className="nav-link">Works</Link></li>
            <li className="nav-item"><Link href="#contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
