import React from 'react'
import How from '../How/How'
import Projects from '../../components/projects/Projects'
import ChoseUs from '../../components/choseUs/ChoseUs'
import Feature from '../../components/feature/Feature'
import Work from '../../components/work/Work'
import Token from '../../components/token/Token'
import Arts from '../../components/arts/Arts'
import Slider from '../slider/Slider'
import Faq from '../../components/faq/Faq';

function LandingPage() {
  return (
    <div>
        <Slider/>
        <How/>
        <Projects/>
        <ChoseUs/>
        <Feature/>
        <Work/>
        <Token/>
        <Arts/>
        <Faq />
    </div>
  )
}

export default LandingPage