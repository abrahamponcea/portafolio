import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
            <i class='bx bxs-building-house about__icon'></i>
            <h3 className='about__title'>Universidad de Guanajuato</h3>
            <span className='about__subtitle'>Ingenieria en Sistemas Computacionales</span>
        </div>

        <div className='about__box'>
            <i class='bx bx-award about__icon'></i>
            <h3 className='about__title'>Experiencia</h3>
            <span className='about__subtitle'>2 años trabajando</span>
        </div>
        
        <div className='about__box'>
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className='about__title'>Completados</h3>
            <span className='about__subtitle'>3 + Projects</span>
        </div>

        <div className='about__box'>
            <i class='bx bx-headphone about__icon'></i>
            <h3 className='about__title'>Soporte</h3>
            <span className='about__subtitle'>Online 24/7</span>
        </div>

    </div>
  )
}

export default Info