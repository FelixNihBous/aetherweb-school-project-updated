"use client"

import React, { useState, useEffect } from 'react';
import { ContactPopup } from '../contactus/contact'; // Tetap diimpor sesuai kode Anda
import Head from 'next/head'; // Tetap diimpor sesuai kode Anda
import Link from 'next/link';


export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false); // State untuk mengontrol pembukaan/penutupan menu mobile
  const [isMobile, setIsMobile] = useState(false); // State untuk melacak apakah tampilan saat ini mobile

  useEffect(() => {
    // Logika meta tag asli Anda
    document.title = "Aether Web Development Services - Desain Responsif & Pengalaman Pengguna Terbaik";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Aether menyediakan layanan pengembangan web profesional. Kami menciptakan antarmuka intuitif, desain responsif, dan pengalaman pengguna yang mulus untuk bisnis Anda. Dapatkan konsultasi gratis sekarang!');

    // Fungsi untuk menangani perubahan ukuran layar
    const handleResize = () => {
      // Set isMobile menjadi true jika lebar jendela kurang dari atau sama dengan 768px
      setIsMobile(window.innerWidth <= 768);
    };

    // Atur status awal saat komponen dimuat
    handleResize();

    // Tambahkan event listener untuk memantau perubahan ukuran jendela
    window.addEventListener('resize', handleResize);

    // Fungsi cleanup saat komponen dilepas dari DOM
    return () => {
      // Cleanup meta tag asli
      if (metaDescription && metaDescription.parentNode) {
        metaDescription.parentNode.removeChild(metaDescription);
      }
      document.title = "Aether Digital - Made in Next.JS";
      // Hapus event listener saat komponen tidak lagi digunakan
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Array dependensi kosong agar useEffect ini hanya berjalan sekali saat mount dan cleanup saat unmount

  // Saya telah menghapus openPopup dan closePopup karena fungsi setShowPopup tidak didefinisikan
  // dan ContactPopup tidak digunakan dalam JSX yang Anda berikan. Jika Anda membutuhkannya,
  // pastikan untuk mendefinisikan setShowPopup dan mengintegrasikan ContactPopup di JSX.

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Mengganti status menuOpen
  };

  return (
    <>
      <div className='header-bar '>
        <Link href="/">
          <p className='LogoName bubble-gum-sans'>AETHER</p>
        </Link>

        {isMobile ? (
          <>
            <div
              className='hamburger-menu'
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => { if (e.key === 'Enter') toggleMenu(); }}
            >
              <div className={`bar1 ${menuOpen ? 'change' : ''}`}></div>
              <div className={`bar2 ${menuOpen ? 'change' : ''}`}></div>
              <div className={`bar3 ${menuOpen ? 'change' : ''}`}></div>
            </div>
            <div className={`navigation-Buttons ${menuOpen ? 'open' : ''}`}>
              <a
                className='bubble-gum-sans'
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  const element = document.getElementById('aboutus-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setMenuOpen(false); // Tutup menu setelah navigasi
                }}
              >
                About Us
              </a>
              <a className='bubble-gum-sans'
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
                onClick={() => {
                  const element = document.getElementById('contact-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setMenuOpen(false); // Tutup menu setelah navigasi
                }}
              >
                Contact Us
              </a>
            </div>
          </>
        ) : (
          // Render tombol navigasi standar saat isMobile adalah false (tampilan desktop)
          <div className='navigation-Buttons'>
            <a
              className='bubble-gum-sans'
              style={{ cursor: 'pointer' }}
              onClick={() => {
                const element = document.getElementById('aboutus-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              About Us
            </a>
            <a className='bubble-gum-sans'
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
              onClick={() => {
                const element = document.getElementById('contact-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
      <div className='landingPage'>
        <div className='landingPage-body'>
          <div className='landingPage-content'>
            <div className='landingPage-content-text'>
              <h2>Aether: Web Development Services</h2>
              <p>
                Crafting intuitive interfaces, responsive designs,
                and seamless user experiences for your business.
              </p>
              <button 
                className="cta-button"
                onClick={() => {
                  const element = document.getElementById('contact-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setMenuOpen(false); // Tutup menu setelah navigasi
                }}
              >Get a Free Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}