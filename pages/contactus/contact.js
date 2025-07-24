import React, { useState } from 'react';
import Index from '../index.js';

export function ContactPopup({ onClose }) {
  // State to hold the values of the form inputs
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

        window.location.href = '/';
      } else {
        const errorData = await response.json();
        setSubmissionStatus('error'); // Set status to error
        setErrorMessage(errorData.errors ? errorData.errors.map(err => err.message).join(', ') : errorData.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
      setErrorMessage('Network error or server unreachable. Please check your connection.');
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex flex-col justify-center items-center z-1000 p-4 font-sans">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full text-left flex flex-col gap-5">
          <p className="text-black cursor-pointer self-end text-lg font-bold" onClick={onClose}>X</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-center text-black font-bold text-2xl pb-5">Get in touch with us</h1>

            <div>
              <label htmlFor="name" className="block text-black mb-1 text-sm font-medium">Your Name :</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Input Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg outline-none bg-transparent text-black focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-black mb-1 text-sm font-medium">Your Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Input Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg outline-none bg-transparent text-black focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-black mb-1 text-sm font-medium">Your Message :</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-transparent border border-gray-300 rounded-lg outline-none resize-y min-h-[150px] text-black focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={submissionStatus === 'sending'}
                className="mt-5 px-6 py-3 bg-[#1800ad] text-white font-medium rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submissionStatus === 'sending' ? 'Sending...' : 'Send'}
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
      </div>
    </>
  );
}

export default function Contact() {
  return null;
}
