import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

// Write your code here

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <>
          <Navbar />
          <div className="about-banner dark-about">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
              className="about-image"
            />
            <h1 className="about-heading light-heading">About</h1>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="about-banner light-about">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
              className="about-image"
            />
            <h1 className="about-heading dark-heading">About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
