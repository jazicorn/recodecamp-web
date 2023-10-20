import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import Home_Mobile from './Home.Mobile'
/**Components */
import Header from '../components/header/Header'
/**Hooks */
import Transition from '../hooks/useTransition'
import useWindowSize from '../hooks/useWindowSize'

function Home() {
  const { isMobile } = useWindowSize()
  const { state } = useContext(ThemeContext)
  const darkMode = state.darkMode

  /** Navigation */
  const navigate = useNavigate()

  if (isMobile) return <Home_Mobile />

  return (
    <div className="home-container">
      <div className={`${darkMode ? 'home-bg-dark' : 'home-bg-light'} home-bg-container`} />
      <article className="home-article">
        {/** Navigation */}
        <Header />
        <div className={`${darkMode ? 'home-outlet-dark' : 'home-outlet-light'} home-outlet`}>
          <div className={`${darkMode ? '' : ''} `}>
            <Outlet />
          </div>
          <aside className={`${darkMode ? '' : ''} `}>{''}</aside>
        </div>
        {/**Footer */}
        <footer className={`${darkMode ? 'home-footer-dark' : 'home-footer-light'} home-footer `}>
          <Transition>
            <a href="https://github.com/jazicorn" className="tw-pr-2">
              created by Jazicorn
            </a>
          </Transition>
        </footer>
      </article>
    </div>
  )
}

export default Home
