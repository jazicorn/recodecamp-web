import { useContext } from 'react'
import { Link } from 'react-router-dom'
/**Hooks */
import { ThemeContext } from '../../context/ThemeContext'
import useWindowSize from '../../hooks/useWindowSize'
import Transition from '../../hooks/useTransition'
/**Images */
import { ReactComponent as Student } from '../../assets/drawings/undraw/undraw_remotely_-2-j6y.svg'
import { ReactComponent as JS } from '../../assets/tech/javascript/javascript-original.svg';
import { ReactComponent as Java } from '../../assets/tech/java/java-original.svg';
import { ReactComponent as Python } from '../../assets/tech/python/python-original.svg';
/**Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const HomeBanner = () => {
    const { isMobile, isDesktopMDXL, isDesktopXL } = useWindowSize();
    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;

    return (
        <section
          className={`${darkMode ? 'tw-backdrop-opacity-70 tw-bg-black/70 [&_h1]:tw-text-campfire-neutral-200' : ' tw-backdrop-opacity-70 tw-bg-white/50'} ${isMobile ? 'tw-flex-col tw-pb-4' : 'tw-flex-row-reverse tw-min-w-[800px] tw-min-h-[450px]'}
          tw-flex tw-place-items-center tw-place-content-center tw-h-full tw-w-full tw-font-space_mono`}
        >
          {/** Stock Picture */}
          <div className={`${darkMode ? "custom-bg-shape-darkest" : "custom-bg-shape-lighest"}  tw-h-full tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-basis-1/2 pr-20 tw-mr-4`}>
            <div className={`${darkMode ? "" : ""} tw-mx-4`}>
            <Transition>
              {isMobile && (<Student style={{ height: 210, width: 210, padding: 0, margin: 0 }} />)}
              {isDesktopMDXL && (<Student style={{ height: 280, width: 280, padding: 0, margin: 0 }} />)}
              {isDesktopXL && (<Student style={{ height: 330, width: 330, padding: 0, margin: 0 }} />)}
            </Transition>
            </div>
          </div>
          {/** Welcome Statement */}
          <div className="tw-basis-1/2 tw-pl-4 tw-w-full tw-flex tw-flex-col tw-place-content-center tw-place-items-center">
            <Transition>
            {isMobile && (
              <div className={`${darkMode ? "border-gradient-dark" : "border-gradient"} tw-flex tw-flex-col tw-h-full tw-pb-8`}>
                <h1 className="tw-text-3xl tw-text-center tw-flex tw-flex-row tw-place-content-center tw-font-space_grotesk_medium">
                  <span className="tw-pl-3 tw-pr-2">Re-code Makes Perfect</span>
                </h1>
                <p
                  className={`${
                    darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-500'
                  } tw-pt-5 tw-text-lg tw-text-center tw-w-[22em]`}
                >
                  Build your programming skills by reproducing&nbsp;
                  <span className="tw-text-campfire-blue">arrays, functions, objects,</span> and other programming fundamentals
                </p>
                {/**Link to dashboard */}
                <Link
                  to={`/learn`} id="banner-dashboard-link"
                  className={`${
                    darkMode ? "hover:tw-text-campfire-neutral-300 tw-text-campfire-purple-light hover:tw-decoration-campfire-blue" : 
                    "tw-text-campfire-purple hover:tw-text-campfire-blue "} 
                    tw-w-42 tw-my-2  tw-py-1 tw-flex tw-flex-row tw-place-self-center `}>
                  <span className={`${darkMode ? "hover:tw-decoration-campfire-blue" : "hover:tw-decoration-campfire-neutral-500"} tw-font-space_mono_bold
                  tw-text-xl tw-text-center tw-pr-2 hover:tw-underline hover:tw-decoration-2`}>
                    Lets's Get Started 
                    
                  </span>
                  <span className={`tw-float-top`}>
                    {darkMode ?  
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#d4d4d4',}} /> :
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#404040',}} />
                    }
                  </span>
                </Link>
                <ul className={`${darkMode ? "tw-text-campfire-neutral-400" : ""} tw-flex tw-flex-row tw-place-content-center
                [&>li]:tw-flex [&>li]:tw-flex-row [&>li]:tw-items-center 
                tw-mt-2 tw-gap-4`}>
                  <li className="">
                    <JS style={{ height: 20, width: 20 }}/>&nbsp;Javascript
                  </li>
                  <li>
                    <Java style={{ height: 20, width: 20 }}/>&nbsp;Java
                  </li>
                  <li><Python style={{ height: 20, width: 20 }}/>&nbsp;Python
                  </li>
                </ul>
              </div>
            )}
            {isDesktopMDXL && (
              <div className={`${darkMode ? "border-gradient-dark" : "border-gradient"} tw-flex tw-flex-col tw-w-full tw-pl-10 tw-pr-4 `}>
                <div className={`${darkMode ? "" : ""} tw-px-2 tw-py-4`}> 
                  <h1 className="tw-w-[8em] tw-text-5xl tw-flex tw-flex-row tw-font-space_grotesk_medium">
                    Re-Code Makes Perfect
                  </h1>
                  <p
                    className={`${
                      darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-500'
                    } tw-pt-5 tw-text-lg tw-text-left tw-w-[22em] `}
                  >
                    Build your programming skills by reproducing&nbsp;
                    <span className="tw-text-campfire-blue">arrays, functions, objects,</span> and other programming fundamentals
                  </p>
                  <Link
                    to={`/learn`} id="banner-dashboard-link"
                    className={`${
                      darkMode ? "hover:tw-text-campfire-neutral-300 tw-text-campfire-purple-light hover:tw-decoration-campfire-blue" : 
                      "tw-text-campfire-purple hover:tw-text-campfire-blue "} 
                      tw-w-42 tw-my-2  tw-py-1 tw-flex tw-flex-row tw-place-self-left `}>
                    <span className={`${darkMode ? "hover:tw-decoration-campfire-blue" : "hover:tw-decoration-campfire-neutral-500"} tw-font-space_mono_bold
                    tw-text-xl tw-text-left tw-pr-2 hover:tw-underline hover:tw-decoration-2`}>
                      Lets's Get Started 
                    </span>
                    <span className={`tw-float-top`}>
                      {darkMode ?  
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#d4d4d4',}} /> :
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#404040',}} />
                      }
                    </span>
                  </Link>
                  <ul className={`${darkMode ? "tw-text-campfire-neutral-400" : ""} tw-flex tw-flex-row tw-place-content-start
                  [&>li]:tw-flex [&>li]:tw-flex-row [&>li]:tw-items-center
                  tw-mt-2 tw-gap-4`}>
                    <li className="">
                      <JS style={{ height: 20, width: 20 }}/>&nbsp;Javascript
                    </li>
                    <li>
                      <Java style={{ height: 20, width: 20 }}/>&nbsp;Java
                    </li>
                    <li><Python style={{ height: 20, width: 20 }}/>&nbsp;Python
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {isDesktopXL && (
              <div className={`${darkMode ? "border-gradient-dark" : "border-gradient"} tw-flex tw-flex-col tw-w-full tw-pl-20 tw-p-5`}> 
                <h1 className="tw-w-[8em] tw-text-6xl tw-flex tw-flex-row tw-text-left tw-font-space_grotesk_medium">
                  Re-Code Makes Perfect
                </h1>
                <p 
                  className={`${
                    darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-500'
                  } tw-pt-5 tw-text-lg tw-text-left tw-w-[22em]`}
                >
                  Build your programming skills by reproducing&nbsp;
                  <span className="tw-text-campfire-blue">arrays, functions, objects,</span> and other programming fundamentals
                </p>
                <Link
                  to={`/learn`} id="banner-dashboard-link"
                  className={`${
                    darkMode ? "hover:tw-text-campfire-neutral-300 tw-text-campfire-purple hover:tw-decoration-campfire-blue" : 
                    "tw-text-campfire-purple hover:tw-text-campfire-blue "} tw-font-space_mono_bold
                    tw-w-42 tw-my-2  tw-py-1 tw-flex tw-flex-row tw-place-self-left`}>
                  <span className={`${darkMode ? "hover:tw-decoration-campfire-blue" : "hover:tw-decoration-campfire-neutral-500"} 
                  tw-text-xl tw-text-left tw-pr-2 hover:tw-underline hover:tw-decoration-2`}>
                    Lets's Get Started 
                  </span>
                  <span className={`tw-float-top`}>
                    {darkMode ?  
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#d4d4d4',}} /> :
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#404040',}} />
                    }
                  </span>
                </Link>
                <ul className={`${darkMode ? "tw-text-campfire-neutral-400" : ""} tw-flex tw-flex-row tw-place-content-start
                [&>li]:tw-flex [&>li]:tw-flex-row [&>li]:tw-items-center
                tw-mt-2 tw-gap-4`}>
                  <li className="">
                    <JS style={{ height: 20, width: 20 }}/>&nbsp;Javascript
                  </li>
                  <li>
                    <Java style={{ height: 20, width: 20 }}/>&nbsp;Java
                  </li>
                  <li><Python style={{ height: 20, width: 20 }}/>&nbsp;Python
                  </li>
                </ul>
              </div>
            )}
          </Transition>
        </div>
      </section>
    )
}

export default HomeBanner