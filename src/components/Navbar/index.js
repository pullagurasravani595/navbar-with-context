// Write your code here

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickBtnTheme = () => {
        toggleTheme()
      }

      const websiteUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return isDarkTheme ? (
        <nav className="nav-container dark">
          <img src={websiteUrl} alt="website logo" className="website-logo" />
          <ul className="home-about-container">
            <Link to="/" className="nav-link">
              <li className="list-element dark-list-element">Home</li>
            </Link>
            <Link to="/about" className="nav-link">
              <li className="list-element dark-list-element">About</li>
            </Link>
          </ul>
          <button
            type="button"
            data-testid="theme"
            className="button"
            onClick={onClickBtnTheme}
          >
            <img src={themeUrl} alt="theme" className="button-img" />
          </button>
        </nav>
      ) : (
        <nav className="nav-container light">
          <img src={websiteUrl} alt="website logo" className="website-logo" />
          <ul className="home-about-container">
            <Link to="/" className="nav-link">
              <li className="list-element">Home</li>
            </Link>
            <Link to="/about" className="nav-link">
              <li className="list-element">About</li>
            </Link>
          </ul>
          <button
            type="button"
            data-testid="theme"
            className="button"
            onClick={onClickBtnTheme}
          >
            <img src={themeUrl} alt="theme" className="button-img" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
