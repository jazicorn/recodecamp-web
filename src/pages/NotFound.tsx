import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import Home_Mobile from './Home.Mobile'
/**Components */
import Header from '../components/header/Header'
/**Hooks */
import Transition from '../hooks/useTransition'
import useWindowSize from '../hooks/useWindowSize'

function NotFound() {
  const { state } = useContext(ThemeContext)
  const darkMode = state.darkMode

  return (
    <div className="tw-dark">
      <div className={`${darkMode ? 'tw-bg-campfire-dark' : 'tw-bg-campfire-light'} tw-bg-campfire-container`} />
      <article
        className={`${
          darkMode ? '' : ''
        } tw-relative tw-bg-transparent tw-h-screen tw-w-screen tw-flex tw-flex-col tw-place-content-between tw-min-h-[40em]`}
      >
        {/** Navigation */}
        <Header />
        <div
          className={`${
            darkMode
              ? 'tw-border-neutral-500 tw-text-campfire-neutral-100'
              : 'tw-border-neutral-800 tw-text-campfire-neutral-900'
          } tw-border-y-2 tw-h-full tw-w-full tw-flex tw-place-content-center tw-flex-col`}
        >
          {/** Banner */}
          <p className="tw-place-self-center tw-font-space_mono tw-text-6xl">404 Error</p>
          <p className="tw-place-self-center tw-font-space_mono tw-text-2xl">~Data Not Found~</p>
        </div>
        {/**Footer */}
        <footer
          className={`${
            darkMode ? 'tw-bg-campfire-neutral-800 tw-text-campfire-neutral-200' : 'tw-bg-campfire-blue-100'
          } tw-bg-campfire-gray tw-flex tw-flex-col tw-place-items-center tw-w-full tw-h-[28px] tw-pr-3 tw-font-space_mono`}
        >
          <a href="https://github.com/jazicorn" className="tw-pr-2">
            created by Jazicorn
          </a>
        </footer>
      </article>
    </div>
  )
}

export default NotFound
