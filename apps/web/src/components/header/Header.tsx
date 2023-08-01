import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import { ReactComponent as Logo } from '../../assets/icons/logos/campfire-2-svgrepo-com.svg'
import { ReactComponent as Moon } from '../../assets/icons/settings/moon-cloudy-svgrepo-com.svg'
import { ReactComponent as Sun } from '../../assets/icons/settings/sun-svgrepo-com.svg'

const Header = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  //turn darkmode on and off
  const toggleTheme = () => {
    if (darkMode) {
      theme.dispatch({ type: 'LIGHTMODE', darkMode: false })
      localStorage.theme = 'light'
    } else {
      theme.dispatch({ type: 'DARKMODE', darkMode: true })
      localStorage.theme = 'dark'
    }
  }

  return (
    <div className={`${darkMode ? 'tw-bg-campfire-neutral-800 tw-text-campfire-blue' : 'tw-bg-light'
      } tw-dark tw-font-mono tw-flex tw-flex-col tw-w-sfull tw-place-items-center tw-px-5 tw-relative`}>
      <header
        className={`tw-grow-0 tw-h-[48px] tw-px-2 tw-w-full tw-flex tw-flex-row tw-justify-between tw-rounded`}
      >
        <Link to={`/`} className="tw-flex tw-flex-row tw-place-self-center">
          <span className="tw-place-self-center">
            <Logo style={{ height: 22, width: 36 }} />
          </span>
          <h5 className={`tw-text-xl ${darkMode ? 'hover:tw-text-white' : 'hover:tw-text-campfire-blue'}`}>
            ReCodeCamp
          </h5>
        </Link>
        <nav className="tw-flex tw-flex-row tw-items-center">
          <ol className="tw-flex tw-flex-row tw-items-center tw-pl-0.5">
            {!darkMode ? (
              <li>
                <button className="tw-place-self-center" onClick={toggleTheme}>
                  <Sun style={{ height: 24, width: 36 }} />
                </button>
              </li>
            ) : (
              <li>
                <button className="tw-place-self-center" onClick={toggleTheme}>
                  <Moon style={{ height: 24, width: 36 }} />
                </button>
              </li>
            )}
          </ol>
        </nav>
      </header>
    </div>
  )
}

export default Header
