import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
/**Components */
import HomeBanner from '../components/home/Home.Banner';
/**Hooks */
import Transition from '../hooks/useTransition';
import useWindowSize from '../hooks/useWindowSize';

const H_Banner = () => {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  if(isMobile) {
    return (<div/>)
  }

  return (
    <>
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
                <h6 className={`${darkMode ? "" : ""} tw-font-space_mono_bold`}>
                1.
                <span className={`${darkMode ? "" : ""} tw-decoration-campfire-purple-light tw-underline 
                tw-decoration-solid tw-decoration-1 tw-underline-offset-2`}>Practice</span>
                </h6>
                <p className={`${darkMode ? "" : ""} tw-ml-1 tw-mt-2 tw-pl-4  tw-pl-2 tw-leading-5`}>
                Hone your programming fundamentals by practicing a variety of skills and concepts
                </p>
            </Transition>
            </li>
            <li className={`${darkMode ? "tw-border-neutral-500" : "tw-border-neutral-800"} tw-border-x `}>
            <Transition>
                <h6 className={`${darkMode ? "" : ""} tw-font-space_mono_bold`}>
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
                <h6 className={`${darkMode ? "" : ""} tw-font-space_mono_bold`}>
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
    </>
  )

}

export default H_Banner
