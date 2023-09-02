import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/header/Header';
// hooks
import useWindowSize from '../hooks/useWindowSize';
import Transition from '../hooks/useTransition';
// images
import { ReactComponent as Logo } from '../assets/icons/logos/campfire-2-svgrepo-com.svg';

const prodURL = import.meta.env.PROD;

const Admin_Login = () => {
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
              tw-bg-gray-200 tw-border tw-border-campfire-blue-200`}>
                <div to={`/`} className="tw-flex tw-flex-row tw-place-content-center tw-font-space_mono">
                  <span className="tw-pt-1 ">
                      <Logo style={{ height: 28, width: 28 }} />
                  </span>
                  <h5 className={`tw-text-2xl tw-px-2 tw-pt-1 ${darkMode ? 'hover:tw-text-white' : 'hover:tw-text-campfire-blue'}`}>
                      ReCodeCamp
                  </h5>
                </div>
                <h4 className={`${darkMode ? 'tw-text-campfire-neutral-700' : 'tw-text-campfire-neutral-500'} 
                 tw-border-campfire-purple-light tw-border-b tw-text-2xl tw-h-[52px] tw-w-full tw-pt-4 tw-pl-2 tw-mb-4`}>
                  Register
                </h4>
                <ul className={`${darkMode ? '' : ''} [&>li]:tw-flex [&>li]:tw-flex-col 
                [&>li]:tw-p-2 [&>li>input]:tw-h-[1.6em]
                [&>li>label]:tw-px-1 [&>li>label]:tw-w-full [&>li>label]:tw-border-campfire-blue-200
                [&>li>label]:tw-w-[10em] [&>li>label]:tw-bg-neutral-100 [&>li>label]:tw-border-y `}>
                  <li className="">
                    <label>Email:</label>
                    <input/>
                  </li> 
                  <li>
                    <label>Password:</label>
                    <input/>
                  </li>
                </ul>
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

export default Admin_Login
