import React from 'react'
import Contact from './Contact'

const Info = () => {
  return (
    <div className="infoMain">

    
    <div className='info'>
      <div className="textContent">
    <h1>How can you make your program more inclusive? </h1>
    <p>
       While inclusion as an objective is inherent in development sector efforts, actors may be at different stages of their inclusion journey, and facing a diverse set of challenges. While some stakeholders may be concerned about identifying and reaching the last mile or base of pyramid populations, others may be struggling to recruit and retain a diverse workforce or to integrate an inclusion lens across their program cycle. Wherever you are on this inclusion journey, the Inclusive Development Resource Guide aims to support your efforts.
       </p>
      </div>
<button>CLICK TO DOWNLOAD</button>
      <div className="box">
        <div className='card'>
        <img src="./img/health.png" alt="" />
        <span>Inclusive Health Learning Brief</span>
        </div>
        <div className='card'>
        <img src="./img/mus.png" alt="" />
        <span>Inclusion Tools and Best Practices</span>
        </div>
        <div className='card'>
        <img src="./img/directory.png" alt="" />
        <span>Inclusion Experts Directory</span>
        </div>
      </div>
      </div>
      <Contact/>
    </div>
  )
}

export default Info
