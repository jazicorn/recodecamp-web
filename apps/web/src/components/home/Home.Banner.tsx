import { useContext } from 'react'
import { Link } from 'react-router-dom'
/**Page Transitions */
import { ThemeContext } from '../../context/ThemeContext'
import useWindowSize from '../../hooks/useWindowSize'
import { ReactComponent as Plane } from '../../assets/icons/homepage/airplane-svgrepo-com.svg'
import { ReactComponent as Medal } from '../../assets/icons/homepage/medal-svgrepo-com.svg'
import { ReactComponent as Student } from '../../assets/drawings/undraw/undraw_remotely_-2-j6y.svg'


const HomeBanner = () => {
    const { isMobile, isDesktopMDXL, isDesktopXL } = useWindowSize();
    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;

    return (
        <section
          className={`bg ${
            darkMode ? 'tw-backdrop-opacity-70 tw-bg-black/70 [&_h1]:tw-text-campfire-neutral-300' : ' tw-backdrop-opacity-70 tw-bg-white/50 '
          } tw-flex tw-flex-col tw-place-items-center tw-w-screen tw-w-full `}
        >
          {/** Stock Picture */}
          <div className="tw-flex tw-flex-col">
            <Student style={{ height: 200, width: 200, padding: 0, margin: 0 }} />
          </div>
          {/** Welcome Statement */}
          <div className="tw-w-full tw-flex tw-flex-col tw-place-content-center tw-place-items-center">
            {isMobile && (
              <div className="tw-flex tw-flex-col tw-h-full">
                <h1 className="tw-text-2xl tw-text-center tw-flex tw-flex-row tw-place-content-center">
                  <span className="tw-pl-3 tw-pr-2">Re-code Makes Perfect</span>
                  <Medal style={{ height: 35, width: 30 }} />
                </h1>
                  <p
                  className={`${
                    darkMode ? 'tw-text-campfire-purple' : 'tw-text-campfire-neutral-500'
                  } tw-text-xl tw-text-center`}
                  >
                  Practice leads to understanding...
                </p>
                {/**Link to dashboard */}
                <Link
                  to={`/learn`}
                  className={`${
                    darkMode ? "hover:tw-text-campfire-neutral-300 tw-text-campfire-blue hover:tw-decoration-campfire-blue" : 
                    "tw-text-campfire-purple hover:tw-text-campfire-blue "} 
                    tw-w-42 tw-m-2 tw-py-1 tw-pl-1 tw-flex tw-flex-row tw-place-self-center `}>
                  <span className={`${darkMode ? "hover:tw-decoration-campfire-blue" : "hover:tw-decoration-campfire-neutral-500"} 
                  tw-text-xl tw-text-center tw-pr-2 hover:tw-underline hover:tw-decoration-2`}>
                    Let's Get Started
                    </span>
                  <Plane style={{ height: 30, width: 30 }} />
                </Link>
              </div>
            )}
            {isDesktopMDXL && (
              <div className="tw-flex tw-flex-col tw-min-h-[15em]">
                <h1 className="tw-text-5xl tw-flex tw-flex-row tw-place-content-center tw-items-end">
                  <span className="tw-pl-3 tw-pr-2">
                    <span className="tw-italic">Re-Code</span> Makes Perfect
                  </span>
                  <Medal style={{ height: 40, width: 40 }} />
                </h1>
                <p
                  className={`${
                    darkMode ? 'tw-text-campfire-purple' : 'tw-text-campfire-neutral-500'
                  } tw-text-xl tw-text-center`}
                >
                  Practice leads to understanding...
                </p>
                <Link
                  to={`/learn`}
                  className={`${
                    darkMode ? "hover:tw-text-campfire-neutral-300 tw-text-campfire-blue hover:tw-decoration-campfire-blue" : 
                    "tw-text-campfire-purple hover:tw-text-campfire-blue "} 
                    tw-w-42 tw-m-2 tw-py-1 tw-pl-1 tw-flex tw-flex-row tw-place-self-center `}>
                  <span className={`${darkMode ? "hover:tw-decoration-campfire-blue" : "hover:tw-decoration-campfire-neutral-500"} 
                  tw-text-2xl tw-text-center tw-pr-2 hover:tw-underline hover:tw-decoration-2`}>
                    Let's Get Started
                    </span>
                  <Plane style={{ height: 35, width: 40 }} />
                </Link>
              </div>
            )}
            {isDesktopXL && (
              <div className="tw-flex tw-flex-col tw-min-h-[15em]">
                <h1 className="tw-text-6xl tw-flex tw-flex-row tw-place-content-center tw-items-end">
                  <span className="tw-pl-3 tw-pr-2">
                    <span className="tw-italic">Re-Code</span> Makes Perfect
                  </span>
                  <Medal style={{ height: 45, width: 55 }} />
                </h1>
                <p
                  className={`${
                    darkMode ? 'tw-text-campfire-purple' : 'tw-text-campfire-neutral-500'
                  } tw-text-xl tw-text-center`}
                >
                  Practice leads to understanding...
                </p>
                <Link
                  to={`/learn`}
                  className={`${
                    darkMode ? "hover:tw-text-campfire-neutral-300 tw-text-campfire-blue hover:tw-decoration-campfire-blue" : 
                    "tw-text-campfire-purple hover:tw-text-campfire-blue "} 
                    tw-w-42 tw-m-2 tw-py-1 tw-pl-1 tw-flex tw-flex-row tw-place-self-center `}>
                  <span className={`${darkMode ? "hover:tw-decoration-campfire-blue" : "hover:tw-decoration-campfire-neutral-500"} 
                  tw-text-2xl tw-text-center tw-pr-2 hover:tw-underline hover:tw-decoration-2`}>
                    Lets's Get Started
                  </span>
                  <Plane style={{ height: 35, width: 40 }} />
                </Link>
              </div>
            )}
          </div>
        </section>
    )
}

export default HomeBanner