import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
/**Components */
import Header from '../components/header/Header';
import HomeBanner from '../components/home/Home.Banner';
/**Hooks */
import Transition from '../hooks/useTransition';
/**Icons */

function Home() {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div className='tw-dark tw-font-space_mono'>
      <div className={`${darkMode ? 'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-bg-blend-darken tw-brightness-60': 
      'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-opacity-50' }  tw-absolute tw-bg-cover tw-bg-center tw-bg-no-repeat tw-h-full tw-w-full` }/>
      <article className="tw-relative tw-z-100 tw-bg-transparent tw-h-screen tw-w-screen tw-flex tw-flex-col tw-place-content-between">
        {/** Navigation */}
        <Header />
        <div className={`${darkMode ? "tw-border-neutral-500" : "tw-border-neutral-800"} 
        tw-border-y-2 tw-h-full tw-flex tw-flex-row `}>
          <div className={`${darkMode ? "" : ""} tw-basis-9/12 tw-flex tw-flex-col`}>
            <div className="tw-basis-8/12">
              {/** Banner */}
              <HomeBanner/>
            </div>
            <div className={`${darkMode ? " tw-border-neutral-500 custom-bg-waves-neutral-darkest-inverse  tw-bg-blend-overlay tw-opacity-90 tw-text-campfire-neutral-200" 
            : "tw-text-campfire-blue tw-border-neutral-800 custom-bg-waves-neutral-lighest tw-bg-blend-overlay tw-opacity-80"} tw-border-t tw-basis-1/12 tw-text-2xl tw-h-full tw-w-full tw-text-center tw-flex tw-flex-row tw-items-center tw-pl-2`}>
            {/* <Transition>Features:</Transition> */}
            </div>
            <ul className={`${darkMode ? "[&>li]:tw-bg-neutral-700/80 tw-border-neutral-500 tw-text-neutral-300" 
            : "[&>li]:tw-bg-neutral-100/80 tw-border-neutral-800"}  
            tw-border-t tw-basis-3/12 tw-flex tw-flex-row tw-w-full tw-justify-between
            [&>li]:tw-basis-1/3 [&>li]:tw-px-2 [&>li]:tw-pt-0.5`}>
              <li>
                <Transition>
                  <h6 className={`${darkMode ? "" : ""} `}>
                    1.
                    <span className={`${darkMode ? "" : ""} tw-decoration-campfire-purple-light tw-underline 
                    tw-decoration-solid tw-decoration-1 tw-underline-offset-2`}>Practice</span>
                  </h6>
                  <p className={`${darkMode ? "" : ""} tw-ml-1 tw-mt-2 tw-pl-4  tw-pl-2 tw-leading-5`}>
                    Hone your programming fundamentals by practicing a variety of skills and concepts
                  </p>
                </Transition>
              </li>
              <li className={`${darkMode ? "tw-border-neutral-500" : "tw-border-neutral-800"} tw-border-x`}>
                <Transition>
                  <h6 className={`${darkMode ? "" : ""} `}>
                    2.
                    <span className={`${darkMode ? "" : ""} tw-decoration-campfire-purple-light tw-underline 
                    tw-decoration-solid tw-decoration-1 tw-underline-offset-2`}>References</span>
                  </h6>
                  <p className={`${darkMode ? "" : ""} tw-ml-1 tw-mt-2 tw-pl-4  tw-pl-2 tw-leading-5`}>
                    Each question comes with reference links to building upon your programming comprehension
                  </p>
                </Transition>
              </li>
              <li className="">
                <Transition>
                  <h6 className={`${darkMode ? "" : ""} `}>
                    3. 
                    <span className={`${darkMode ? "" : ""} tw-decoration-campfire-purple-light tw-underline 
                      tw-decoration-solid tw-decoration-1 tw-underline-offset-2`}>
                      Languages
                    </span>
                  </h6>
                  <p className={`${darkMode ? "" : ""} tw-ml-1 tw-mt-2 tw-pl-4  tw-pl-2 tw-leading-5`}>
                    Learn programming in different programming languages
                  </p>
                </Transition>
              </li>
            </ul>
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
