// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <>
          <Navbar />
          <div className="not-found-container not-found-dark">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="image"
            />
            <h1 className="heading light-heading">Lost Your Way?</h1>
            <p className="light-description">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="not-found-container not-found-light">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="image"
            />
            <h1 className="heading dark-heading">Lost Your Way?</h1>
            <p className="dark-description">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
