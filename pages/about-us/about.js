import React from 'react'
import Image from 'next/image'

function aboutus() {
  return (
    <div id="aboutus-section" className='container-AboutUs w-full'>
      <div className="content-aboutus">
        <h2 className="">About Us</h2>
        <p className="">
          Kami adalah tim ahli dalam pengembangan website. Kami menciptakan solusi digital inovatif dengan desain intuitif dan pengalaman pengguna yang mulus. Dari situs korporat hingga e-commerce, kami menggabungkan keahlian teknis dan kreativitas untuk memastikan kehadiran online Anda menonjol dan sukses. Kami berkomitmen pada hasil nyata yang fungsional dan estetis.        </p>
      </div>
      <Image className='image' src="/internetLogo.png" alt="alt" width={300} height={300}  />
    </div>
  )
}

export default aboutus
