import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmissionStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/meozadvk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmissionStatus('error');
        setErrorMessage(errorData.errors ? errorData.errors.map(err => err.message).join(', ') : errorData.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
      setErrorMessage('Network error or server unreachable. Please check your connection.');
    }
  };

  return (
    <div id='contact-section' className="contactContainer">
      <div className="content-Text" style={{ display: 'flex', flexDirection: 'column', color: 'black', textAlign: 'start' }}>
        <h1 className="h1-ContactUs" style={{ color: 'black', fontWeight: 600 }}>Contact Us</h1>


        <p><strong>Punya ide digital?</strong> Aether Digital siap mewujudkannya. Hubungi kami untuk mendiskusikan kebutuhan <strong>pengembangan website profesional</strong> Anda. Kami menawarkan <strong>solusi inovatif</strong> untuk situs web baru, peningkatan fungsionalitas, atau konsultasi strategis. Mari <strong>berkolaborasi</strong> mencapai tujuan digital Anda!</p>
      </div>
      <form onSubmit={handleSubmit} className="contactForm w-10 rounded-2xl w-fit h-fit bg-transparent" style={{ padding: '20px' }}>
        <div>
          <label htmlFor="name" className="block text-black mb-1 text-sm font-medium">Your Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" Input Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={{ background: 'white', border: 'solid 1px black' }}
            className="inputTag w-100 px-5 py-3 border border-gray-300 rounded-lg outline-none bg-transparent text-black focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-black mb-1 text-sm font-medium">Your Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" Input Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            style={{ background: 'white', border: 'solid 1px black' }}

            className="inputTag w-100 px-5 py-3 border border-gray-300 rounded-lg outline-none bg-transparent text-black focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-black mb-1 text-sm font-medium">Your Message :</label>
          <textarea
            id="message"
            name="message"
            placeholder=" Message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            style={{ background: 'white', border: 'solid 1px black' }}

            className="inputTag w-100 p-4 bg-transparent border border-gray-300 rounded-lg outline-none resize-y min-h-[150px] text-black focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={submissionStatus === 'sending'}
            className="mt-5 px-6 py-3 bg-[#0a0a23] text-white font-medium rounded-md cursor-pointer hover:bg-[#1a1a4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0a0a23] transition duration-150 ease-in-out shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submissionStatus === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {submissionStatus === 'success' && (
          <p className="text-center text-green-600 font-medium mt-4">Message sent successfully!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="text-center text-red-600 font-medium mt-4">Error: {errorMessage}</p>
        )}
      </form>
    </div>
  );
}
