import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
        <a href='https://www.instagram.com/abrahamponcea' className='home__social-icon' target='_blank'> 
            <i class="uil uil-instagram"></i>
        </a>

        <a href='https://www.facebook.com/abraham.ponce.94651?mibextid=ZbWKwL' className='home__social-icon' target='_blank'> 
            <i class="uil uil-facebook-f"></i>
        </a>

        <a href='https://github.com/abrahamponcea' className='home__social-icon' target='_blank'>
            <i class="uil uil-github-alt"></i> 
        </a>

        <a href='www.linkedin.com/in/abrahamponcea' className='home__social-icon' target='_blank'> 
            <i class="uil uil-linkedin-alt"></i>
        </a>
    </div>
  )
}

export default Social