import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Home_Mobile from './Home.Mobile';
/**Components */
import Header from '../components/header/Header';
/**Hooks */
import Transition from '../hooks/useTransition';
import useWindowSize from '../hooks/useWindowSize';

function Home() {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  
  if(isMobile) return ( <Home_Mobile/> )

  return (
    <div className='tw-dark tw-font-roboto_mono'>
      <div className={`${darkMode ? 'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-bg-blend-darken tw-brightness-60': 
      'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-opacity-50' }  tw-fixed tw-bg-cover tw-bg-center tw-bg-no-repeat tw-h-full tw-w-full` }/>
      <article className="tw-relative tw-z-100 tw-bg-transparent tw-h-screen tw-w-screen tw-flex tw-flex-col tw-place-content-between">
        {/** Navigation */}
        <Header />
        <div className={`${darkMode ? "tw-border-neutral-500" : "tw-border-neutral-800"} 
        tw-border-y-2 tw-h-full tw-flex tw-flex-row `}>
          <div className={`${darkMode ? "" : ""} tw-basis-9/12 tw-flex tw-flex-col`}>
            <Outlet/>
          </div>
          <aside className={`${darkMode ? "tw-bg-neutral-700 tw-border-neutral-500 custom-bg-pattern-darker" : "tw-bg-neutral-50 tw-border-neutral-800 custom-bg-pattern-lightest"} tw-border-l tw-flex tw-basis-3/12`}>
            {''}
          </aside>
        </div>
        {/**Footer */}
        <footer className={`${darkMode ? 'tw-bg-campfire-neutral-800 tw-text-campfire-neutral-200 hover:tw-text-campfire-blue' : 'tw-bg-campfire-blue-100 hover:tw-text-neutral-400'} tw-bg-campfire-gray tw-flex tw-flex-col tw-place-items-center tw-w-full tw-h-[28px] tw-pr-3 `}>
          <Transition>
            <a href="https://github.com/jazicorn"className="tw-pr-2">created by Jazicorn</a>
          </Transition>
        </footer>
      </article>
    </div>
  )
}

export default Home
