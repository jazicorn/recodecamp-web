import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Header from '../components/header/Header'
import HomeBanner from '../components/home/H_Banner'

function HomeMobile() {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div className='tw-dark'>
      <div className={`${darkMode ? 'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-bg-blend-darken tw-brightness-60': 
      'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-opacity-50' } tw-fixed tw-bg-cover tw-bg-center tw-bg-no-repeat tw-h-full tw-w-full` }/>
      <article className={`${darkMode ? '' : ''} tw-relative tw-z-100 tw-bg-transparent tw-h-screen tw-w-screen tw-flex tw-flex-col tw-place-content-between`}>
        {/** Navigation */}
        <Header />
        <div className={`${darkMode ? 'tw-border-neutral-500' : 'tw-border-neutral-800'} tw-border-y-2 tw-h-full`}>
        {/** Banner */}
        <HomeBanner/>
        </div>
        {/**Footer */}
        <footer className={`${darkMode ? 'tw-bg-campfire-neutral-800 tw-text-campfire-neutral-200' : 'tw-bg-campfire-blue-100'} tw-bg-campfire-gray tw-flex tw-flex-col tw-place-items-center tw-w-full tw-h-[28px] tw-pr-3 tw-font-space_mono`}>
          <a href="https://github.com/jazicorn" className="tw-pr-2">created by Jazicorn</a>
        </footer>
      </article>
    </div>
  )
}

export default HomeMobile
