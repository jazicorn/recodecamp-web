import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Header from '../components/header/Header'
import HomeBanner from '../components/home/H_Banner'

function HomeMobile() {
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
        <div className={`${darkMode ? 'tw-border-neutral-500' : 'tw-border-neutral-800'} tw-border-y-2 tw-h-full`}>
          {/** Banner */}
          <HomeBanner />
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

export default HomeMobile
