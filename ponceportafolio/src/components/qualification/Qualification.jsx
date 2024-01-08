import React, { useState} from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) =>{
        setToggleState(index)
    }
  return (
    <section className='qualification secction'>
        <h2 className='section_title'>Qualification</h2>
        <span className='section_subtitle'>My personal journey</span>

        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className={
                    toggleState === 1 
                    ? 'qualification__button qualification__active button--flex' 
                    : 'qualification__button button--flex'
                    }
                    onClick={() => toggleTab(1)}>
                    <i className='uil uil-graduation-cap
                    qualification__icon'></i>
                    Education
                </div>
                
                <div className={
                    toggleState === 2 
                    ? 'qualification__button qualification__active button--flex' 
                    : 'qualification__button button--flex'}
                    onClick={() => toggleTab(2)}>
                    <i className='uil uil-briefcase-alt
                    qualification__icon'></i>
                    Experience
                </div>
            </div>
            <div className='qualification__sections'>
                <div className={
                    toggleState === 1 
                    ? 'qualification__content qualification__content-active' 
                     : 'qualification__content'
                    }>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>C, C++ Development</h3>
                            <span className='qualification__subtitle'>Universidad de Guanajuato</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                2019 - 2021
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>Neural Networks IA</h3>
                            <span className='qualification__subtitle'>Universidad de Guanajuato</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                2021 - 2022
                            </div>
                        </div>

                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>UI/UX Experience</h3>
                            <span className='qualification__subtitle'>Universidad de Guanajuato</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                2021 -Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Full-Stack Developer</h3>
                            <span className='qualification__subtitle'>Universidad de Guanajuato</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                2021 -Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Vue Development</h3>
                            <span className='qualification__subtitle'>Universidad de Guanajuato</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                2021 -Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>React Development</h3>
                            <span className='qualification__subtitle'>Universidad de Guanajuato</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                2022 - Present
                            </div>
                        </div>

                    </div>


                </div>
                
                <div className={
                    toggleState === 2 
                    ? 'qualification__content qualification__content-active' 
                     : 'qualification__content'
                    }>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>React Developer</h3>
                            <span className='qualification__subtitle'>H. Ayuntamiento Municipal Salamanca</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calender-alt'></i>
                                2023 -Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>Design Asistant</h3>
                            <span className='qualification__subtitle'>Corporativo Guerrero Velázquez - Hotel el Relicario</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calender-alt'></i>
                                2021 - 2023
                            </div>
                        </div>

                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Web Designer</h3>
                            <span className='qualification__subtitle'>Figma</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                2021 -Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    </section>
  )
}

export default Qualification