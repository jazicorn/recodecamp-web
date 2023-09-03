import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
// hooks
import useWindowSize from '../../hooks/useWindowSize';
import Transition from '../../hooks/useTransition';
// images
import { ReactComponent as Logo } from '../../assets/icons/logos/campfire-2-svgrepo-com.svg';

//const prodURL = import.meta.env.PROD;

const SignIn = () => {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <>
      <div className={`${darkMode ? '' : ''} tw-h-full tw-w-full tw-px-6
      tw-flex tw-flex-col tw-place-items-center tw-place-content-center`}>
        <Transition>
          <div className={`${darkMode ? 'tw-bg-gray-400 tw-border-campfire-blue-600' : 'tw-bg-gray-200 tw-border-campfire-blue-200'} ${isMobile ? 'tw-w-[24em]' : 'tw-w-[30em]'} tw-py-6
          [&>div]:tw-h-[3em] [&>div]:tw-flex [&>div]:tw-place-content-center tw-h-full
           tw-border-2 `}>
            <div to={`/`} className="tw-flex tw-flex-row tw-place-content-center tw-font-space_mono">
                <span className="tw-pt-1 ">
                    <Logo style={{ height: 28, width: 28 }} />
                </span>
                <h5 className={`tw-text-2xl tw-px-2 tw-pt-1 ${darkMode ? 'hover:tw-text-campfire-neutral-300' : 'hover:tw-text-campfire-blue'}`}>
                    ReCodeCamp
                </h5>
            </div>
            <h4 className={`${darkMode ? 'tw-text-campfire-neutral-700' : 'tw-text-campfire-neutral-500'} 
              tw-border-campfire-purple-light tw-border-b tw-text-2xl tw-h-[52px] tw-w-full tw-pt-4 tw-pl-2 tw-mb-4`}>
              Guest Login
            </h4>
            <ul className={`${darkMode ? '[&>li>label]:tw-bg-campfire-neutral-300 [&>li>input]:tw-bg-campfire-neutral-200' : ''} [&>li]:tw-flex [&>li]:tw-flex-col 
            [&>li]:tw-p-2 [&>li>input]:tw-h-[1.6em]
            [&>li>label]:tw-px-1 [&>li>label]:tw-w-full [&>li>label]:tw-border-campfire-blue-200
            [&>li>label]:tw-w-[10em] [&>li>label]:tw-bg-neutral-100 [&>li>label]:tw-border-y `}>
              <li className="">
                <label>Email:</label>
                <input/>
              </li> 
            </ul>
          </div>
        </Transition>
      </div>
    </>
  )
}

export default SignIn
