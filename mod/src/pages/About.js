import React from 'react'
import AboutBanner from '../components/aboutbanner/AboutBanner'
import AboutText from '../components/aboutbanner/AboutText'
import Board from '../components/aboutbanner/Board'
import Team from '../components/aboutbanner/Team'

const About = () => {
  return (
    <div>
      {/* <AboutBanner/> */}
      <AboutBanner title="ABOUT US" />
      <AboutText/>
      <Board/>
      <Team/>
    </div>
  )
}

export default About
