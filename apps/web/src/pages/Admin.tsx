import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/header/Header';
// hooks
import useWindowSize from '../hooks/useWindowSize';
import Transition from '../hooks/useTransition';

const prodURL = import.meta.env.PROD;

function Home() {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div className='tw-dark'>
    {prodURL ? 
       <Navigate to="/" replace={true} />
      :
      <span> 
        <div className={`${darkMode ? 'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-bg-blend-darken tw-brightness-60': 
        'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-opacity-50' } tw-fixed tw-absolute tw-bg-cover tw-bg-center tw-bg-no-repeat tw-h-full tw-w-full` }/>
        <article className="tw-relative tw-z-100 tw-bg-transparent tw-dark tw-font-mono tw-h-screen tw-w-screen tw-flex tw-flex-col tw-place-content-between ">
          {/** Navigation */}
          <Header />
          <Transition>
            <div className={`${darkMode ? '' : ''} tw-flex tw-flex-col tw-place-content-center tw-place-items-center`}>
              <div className={` ${isMobile ? '' : 'tw-w-[30em]'} tw-py-6 [&>div]:tw-h-[3em] [&>div]:tw-flex [&>div]:tw-place-content-center
              [&>div]:tw-py-2 [&>div>input]:tw-h-[1.6em] [&>div>input]:tw-self-center [&>div>label]:tw-px-1 [&>div>label]:tw-self-center
              [&>div>label]:tw-w-[10em] [&>div>label]:tw-bg-neutral-100 [&>div>label]:tw-border [&>div>label]:tw-border-campfire-blue-200
              tw-bg-gray-200 tw-border tw-border-campfire-blue-200`}>
                 <h4 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} 
                 tw-border-campfire-purple-light tw-border-b tw-text-2xl tw-h-[36px] tw-w-full tw-pl-2 tw-mb-4`}>
                  Admin Login
                </h4>
                <div className="">
                  <label>Email:</label>
                  <input/>
                </div> 
                <div>
                  <label>Password:</label>
                  <input/>
                </div>
              </div>
            </div>
          </Transition>
          {/**Footer */}
          <footer className={`${darkMode ? 'tw-bg-campfire-neutral-800 tw-text-campfire-neutral-200' : 'tw-bg-campfire-blue-100'} tw-bg-campfire-gray tw-flex tw-flex-col tw-place-items-center tw-w-full tw-h-[28px] tw-pr-3`}>
            <a href="https://github.com/jazicorn"className="tw-pr-2">created by Jazicorn</a>
          </footer>
        </article>
      </span>
    }
    </div>
  )
}

export default Home
