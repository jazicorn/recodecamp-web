// Dashboard Banner
/**React */
import { useContext } from 'react';
//import { useContext, useState, useEffect } from 'react';
// import { useContext, useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
/**Custom Hooks */
//import useWindowSize from '../../../hooks/useWindowSize';
import Transition from '../../../hooks/useTransition';
/**Redux Hooks */
//import { useAppSelector } from '../../../redux/reduxHooks.ts';
//import type { RootState } from '../../../redux/store.ts';
//import { DEFAULT_USER } from '../../../utils/constants';
/**Custom Helpers */
import { detectTokenFromLocalStorage } from '../../../utils/common';

const D_User = () => {
  /**Detect Auth */
  const detectUser = detectTokenFromLocalStorage();
  /**Custom Hooks */
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  /** Redux Store: User */
  // const getUser = useAppSelector((state:RootState) => state?.dashboard?.user);
  // const [ user, setUser ] = useState(DEFAULT_USER);
  
  // useEffect(() => {
  //   if(getUser !== undefined || Object.keys(getUser).length > 0) {
  //     setUser(getUser);
  //   }
  // },[getUser]);

  return (
    <div className={`${darkMode ? '' : ''} layout-template-container`}>
      <div className={`${darkMode ? 'layout-template-dark' : 'layout-template-light'} layout-template`}>
      <article className={`${darkMode ? '': ''}`}>
        <Transition>
          <h3 className={`${darkMode ? '' : ''} layout-template-header`}>
            Announcements
          </h3>
        </Transition>
        {!detectUser ?
          <Transition> 
          <main className={`${darkMode ? "" : ""} tw-pl-2.5`}>
            <p>Want to save your progress? 
              <span id="dashboard-template-call-to-action" className={`${darkMode ? "" : ""}`}>
                <Link to="/auth/guest/login">Login</Link>
              </span>
                or
              <span id="dashboard-template-call-to-action" className={`${darkMode ? "" : ""}`}>
                <Link to="/auth/guest/signup">Register</Link>
              </span>
            </p>
          </main>
          </Transition> 
          :
          <main className="tw-px-4">
            <h4 id="dashboard-template-coming-soon" className="">🏗️&nbsp;Coming Soon...</h4>
          </main>
        }
      </article>
      </div>
    </div>
  )
}

export default D_User
