import React from 'react'
import LandingPage from './landing-page/landingPage'
import AboutUs from './about-us/about'
import Contact from './contactus/contact'
import Head from 'next/head'

function Index() {
  return (
    <>
      <div>
        <LandingPage />
        <AboutUs />
        <Contact />
      </div>
      </>
  )
}

export default Index
