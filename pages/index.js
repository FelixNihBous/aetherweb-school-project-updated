import React, { useState, useEffect } from 'react';
import { ContactPopup } from './contactus/contact';
import Head from 'next/head';

export default function Index() {
  const [showPopup, setShowPopup] = useState(false);

  // Effect untuk mengelola overflow body saat popup muncul
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [showPopup]);

  useEffect(() => {
    document.title = "Aether Web Development Services - Desain Responsif & Pengalaman Pengguna Terbaik";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Aether menyediakan layanan pengembangan web profesional. Kami menciptakan antarmuka intuitif, desain responsif, dan pengalaman pengguna yang mulus untuk bisnis Anda. Dapatkan konsultasi gratis sekarang!');

    return () => {
      if (metaDescription && metaDescription.parentNode) {
        metaDescription.parentNode.removeChild(metaDescription);
      }
      document.title = "React App";
    };
  }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
        <link rel="icon" href="/Logo.ico" type="image/x-icon" />
        <div className='landingPage'>
          <div className='header-bar '>
            <p className='LogoName bubble-gum-sans'>AETHER </p>
            <div className='navigation-Buttons'>
              <a className='bubble-gum-sans' href="/aboutus">About Us</a>
              <a className='bubble-gum-sans' onClick={openPopup} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Contact Us</a>
            </div>
          </div>
          <div className='landingPage-body'>
            <div className='landingPage-content'>
              <div className='landingPage-content-text'>
                <h2>Aether: Web Development Services</h2>
                <p>
                  Crafting intuitive interfaces, responsive designs,
                  and seamless user experiences for your business.
                </p>
                <button className="cta-button">Get a Free Consultation</button>
              </div>
            </div>
          </div>

          {showPopup && (
            <ContactPopup onClose={closePopup} />
          )}
        </div>
    </>
  );
}
