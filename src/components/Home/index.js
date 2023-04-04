// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <>
          <Navbar />
          <div className="banner-container dark-banner">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
              className="home-image"
            />
            <h1 className="home-heading light-heading">Home</h1>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="banner-container light-banner">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
              className="home-image"
            />
            <h1 className="home-heading dark-heading">Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
