import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Auth_Mobile from './Auth.Mobile';
/**Hooks */
import Transition from '../hooks/useTransition';
import useWindowSize from '../hooks/useWindowSize';
/** Images */
import { ReactComponent as Logo } from '../assets/icons/logos/campfire-2-svgrepo-com.svg';
import { ReactComponent as Moon } from '../assets/icons/settings/moon-cloudy-svgrepo-com.svg';
import { ReactComponent as Sun } from '../assets/icons/settings/sun-svgrepo-com.svg';

const Auth = () => {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const theme = useContext(ThemeContext);
  const darkMode = state.darkMode;
  //turn darkmode on and off
  const toggleTheme = () => {
    if (darkMode) {
      theme.dispatch({ type: 'LIGHTMODE', darkMode: false });
      localStorage.theme = 'light';
    } else {
      theme.dispatch({ type: 'DARKMODE', darkMode: true });
      localStorage.theme = 'dark';
    }
  };

  if (isMobile) return <Auth_Mobile />;

  return (
    <div className="tw-dark tw-font-roboto_mono tw-min-h-[40em]">
      <div className={`${darkMode ? 'tw-bg-campfire-dark' : 'tw-bg-campfire-light'} tw-bg-campfire-container`} />
      <article className="tw-relative tw-bg-transparent tw-h-screen tw-w-screen tw-flex tw-flex-col tw-place-content-between tw-min-h-[40em]">
        <div
          className={`${darkMode ? 'tw-border-neutral-500' : 'tw-border-neutral-800'} 
        tw-border tw-h-full tw-flex tw-flex-row `}
        >
          <aside
            className={`${
              darkMode
                ? 'tw-bg-neutral-700 tw-border-neutral-500 custom-bg-pattern-darker'
                : 'tw-bg-neutral-50 tw-border-neutral-800 custom-bg-pattern-lightest'
            } tw-border-r-2 tw-flex tw-basis-6/12`}
          >
            {''}
          </aside>
          <div className={`${darkMode ? '' : ''} tw-basis-6/12 tw-flex tw-flex-col`}>
            <Transition>
              <header
                className={`${
                  darkMode
                    ? 'tw-border-campfire-neutral-700 tw-bg-campfire-neutral-700/70 '
                    : 'tw-bg-campfire-neutral-50/70 tw-border-campfire-neutral-100'
                } tw-pr-4 tw-h-[3em] tw-w-full tw-flex tw-items-center tw-justify-between tw-w-full tw-h-[3em] tw-pl-4 tw-border-b
                `}
              >
                <div className="tw-font-space_mono tw-flex tw-flex-row tw-items-center tw-justify-start">
                  <Transition>
                    <span className="tw-pt-1 ">
                      <Logo style={{ height: 24, width: 24 }} />
                    </span>
                  </Transition>
                  <Transition>
                    <Link
                      to={'/'}
                      className={`tw-text-lg tw-px-2 tw-pt-1 ${
                        darkMode
                          ? 'tw-text-neutral-100 hover:tw-text-campfire-neutral-300'
                          : 'hover:tw-text-campfire-blue'
                      }`}
                    >
                      ReCodeCamp
                    </Link>
                  </Transition>
                </div>
                <ul className="tw-flex tw-flex-row tw-items-center ">
                  {!darkMode ? (
                    <li>
                      <button className="tw-pt-1 tw-place-self-center" onClick={toggleTheme}>
                        <Transition>
                          <Sun style={{ height: 26, width: 26 }} />
                        </Transition>
                      </button>
                    </li>
                  ) : (
                    <li>
                      <button className="tw-pt-1 tw-place-self-center" onClick={toggleTheme}>
                        <Transition>
                          <Moon style={{ height: 26, width: 26 }} />
                        </Transition>
                      </button>
                    </li>
                  )}
                </ul>
              </header>
            </Transition>
            <Outlet />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Auth;
