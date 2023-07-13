import { useContext } from 'react'
//import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
//import useWindowSize from '../hooks/useWindowSize'
//import { ReactComponent as Plane } from '../assets/icons/homepage/airplane-svgrepo-com.svg'
//import { ReactComponent as Medal } from '../assets/icons/homepage/medal-svgrepo-com.svg'
//import { ReactComponent as Student } from '../assets/drawings/undraw/undraw_remotely_-2-j6y.svg'
import { ReactComponent as Progress } from '../assets/drawings/undraw/undraw_progress_tracking_re_ulfg.svg'
import { ReactComponent as Javascript } from '../assets/drawings/undraw/undraw_programming_re_kg9v.svg'
import { ReactComponent as Customize } from '../assets/drawings/undraw/undraw_create_re_57a3.svg'

const About = () => {
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div>
        <section
          className={`tw-grow bg ${
            darkMode
              ? ' [&_h3]:tw-text-campfire-blue child:tw-text-campfire-neutral-300 child:tw-border-x child:tw-border-campfire-cyan-dark child:tw-rounded-3xl'
              : ' h3:tw-text-campfire-blue child:tw-text-campfire-gray-darker child:tw-border-x child:tw-border-campfire-blue child:tw-rounded-3xl'
          } 
        tw-flex tw-flex-col tw-place-items-center tw-space-y-5 tw-p-5 [&_p]:tw-text-lg
        md:tw-space-y-0 md:tw-flex-row md:tw-space-x-10 md:tw-w-full md:tw-px-32 [&>*]:tw-h-fit 
        [&>*]:tw-place-items-center [&>*]:tw-w-1/3 [&>*]:tw-flex [&>*]:tw-flex-col 
        [&>*]:tw-text-center [&_h3]:tw-text-3xl [&>*]:tw-text-base [&>*]:tw-min-h-[228px] [&>*]:tw-min-w-[288px]
        `}
        >
        <div className={`${darkMode ? ' ' : ''} tw-flex tw-flex-col`}>
            <h3>Learn Javascript</h3>
            <Javascript style={{ height: 125, width: 125, padding: 0, margin: 0 }} />
            <p>
              Practice Javascript Fundamentals
            </p>
          </div>
          <div className={`${darkMode ? '' : ''} tw-flex tw-flex-col`}>
            <h3>Track Your Progress</h3>
            <Progress style={{ height: 125, width: 125, padding: 0, margin: 0 }} />
            <p>
              Earn points towards completed questions
            </p>
          </div>
          <div className={`${darkMode ? '' : ''}`}>
            <h3>Customize Questions</h3>
            <Customize style={{ height: 125, width: 125, padding: 0, margin: 0 }} />
            <p>
              Create your own questions to practice
            </p>
          </div>
        </section>
        {/**Footer */}
        <footer className={`${darkMode ? 'tw-bg-campfire-blue' : 'tw-bg-campfire-blue-100'} tw-bg-campfire-gray tw-flex tw-flex-col tw-place-items-center tw-w-full tw-h-[28px]`}>
          <a href="https://github.com/jazicorn"className="">created by Jazicorn</a>
        </footer>
    </div>
  )
}

export default About