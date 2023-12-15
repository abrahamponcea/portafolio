import React from 'react'
import './skills.css'
import Backend from './Backend'
import Frontend from './Frontend'
import Programs from './Programs'


const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section_title'>Skills</h2>
        <span className='section_subtitle'>My technical level</span>
        <div className='skills__container container grid'>
            <Frontend/>
            <Backend/>
            <Programs/>
        </div>
    </section>
  )
}

export default Skills