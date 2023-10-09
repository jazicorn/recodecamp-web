import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
/**Hooks */
import Transition from '../hooks/useTransition';
//import useWindowSize from '../hooks/useWindowSize';
/** Images */
import { ReactComponent as Logo } from '../assets/icons/logos/campfire-2-svgrepo-com.svg';
import { ReactComponent as Moon } from '../assets/icons/settings/moon-cloudy-svgrepo-com.svg';
import { ReactComponent as Sun } from '../assets/icons/settings/sun-svgrepo-com.svg';

const Auth = () => {
  //const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const theme = useContext(ThemeContext);
  const darkMode = state.darkMode;
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
    <div className='tw-dark tw-font-roboto_mono tw-min-h-[40em]'>
      <div className={`${darkMode ? 'tw-bg-campfire-dark': 
      'tw-bg-campfire-light' } tw-bg-campfire-container` }/>
      <article className="tw-relative tw-h-screen tw-w-screen tw-flex tw-flex-col tw-min-h-[40em]">
        <div className={`${darkMode ? "tw-bg-neutral-700 tw-border-neutral-500 custom-bg-pattern-darker" : "tw-bg-neutral-50 tw-border-neutral-800 custom-bg-pattern-lightest"} tw-basis-1/6`}>
          <div to={`/`} className={`${darkMode ? "tw-border-neutral-700 tw-bg-campfire-neutral-700/70 " : "tw-bg-campfire-neutral-50/70 tw-border-campfire-neutral-100"} tw-w-full tw-h-[3em] tw-pl-4 tw-flex tw-flex-row tw-items-center tw-justify-between tw-font-space_mono tw-border-b`}> 
                <Transition>
                  <div className="tw-flex tw-flex-row tw-w-full">
                    <span className="tw-pt-1 ">
                        <Logo style={{ height: 24, width: 24 }} />
                    </span>
                     <Link to={'/'} className={`tw-text-lg tw-px-2 tw-pt-1 
                     ${darkMode ? 'tw-text-neutral-100 hover:tw-text-campfire-neutral-300' : 'hover:tw-text-campfire-blue'}`}>
                        ReCodeCamp
                    </Link>
                   </div>
                </Transition>
               <Transition>
                <header className="tw-pr-4 tw-pt-1 tw-h-[3em] tw-w-full tw-flex tw-items-center tw-justify-end">
                    <ul className="tw-flex tw-flex-row tw-items-center ">
                        {!darkMode ? (
                        <li>
                            <button className="tw-pt-1 tw-place-self-center" onClick={toggleTheme}>
                            <Transition><Sun style={{ height: 24, width: 24 }} /></Transition>
                            </button>
                        </li>
                        ) : (
                        <li>
                            <button className="tw-pt-1 tw-place-self-center" onClick={toggleTheme}>
                            <Transition><Moon style={{ height: 24, width: 24 }} /></Transition>
                            </button>
                        </li>
                        )}
                    </ul>
                </header>
            </Transition>
            </div>
        </div>
        <div className={`${darkMode ? "tw-border-neutral-500" : "tw-border-neutral-800"} 
        tw-border-y-2 tw-h-full tw-w-full tw-flex tw-flex-col tw-basis-4/6`}>
          
          <Outlet/>
        </div>
        <div className={`${darkMode ? "tw-bg-neutral-700 tw-border-neutral-500 custom-bg-pattern-darker" : "tw-bg-neutral-50 tw-border-neutral-800 custom-bg-pattern-lightest"} tw-basis-1/6`}/>
      </article>
    </div>
  )
}

export default Auth