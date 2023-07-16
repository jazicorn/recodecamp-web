import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import { ReactComponent as Logo } from '../../assets/icons/logos/campfire-2-svgrepo-com.svg'
import { ReactComponent as Moon } from '../../assets/icons/user/settings/moon-cloudy-svgrepo-com.svg'
import { ReactComponent as Sun } from '../../assets/icons/user/settings/sun-svgrepo-com.svg'

//icons
import {
  IconHome,
} from '@tabler/icons-react';

const HeaderDashboard = () => {
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
    <div className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25' : '[&>*]:tw-backdrop-brightness-65 [&>*]:tw-backdrop-blur-sm'
      } tw-dark tw-font-mono tw-flex tw-flex-col tw-w-full tw-place-items-center tw-px-5 tw-mt-3 tw-relative`}>
      <header
        className={`tw-grow-0 tw-h-[48px] tw-backdrop-brightness-65 tw-px-2 tw-w-full tw-flex tw-flex-row tw-justify-between tw-rounded`}
      >
        <div className='tw-pl-1 tw-flex tw-flex-row tw-place-self-center'>
          <Link to={'/learn'} className={`${darkMode ? "": ""}`}>
          { darkMode ? <IconHome color="#2ca9bc" /> : <IconHome color="#000" />}
          </Link>
        </div>
          <Link to={'/'} className="tw-flex tw-flex-row tw-place-self-center">
            <span className="tw-place-self-center">
              <Logo style={{ height: 22, width: 36 }} />
            </span>
            <h5 className={`tw-text-xl ${darkMode ? 'hover:tw-text-white tw-text-campfire-blue' : 'hover:tw-text-campfire-blue'}`}>
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

export default HeaderDashboard
