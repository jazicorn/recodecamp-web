// Page: Dashboard Documentation
/**React */
//import { useContext } from 'react';
import { useContext, useState, useEffect } from 'react';
//import { useContext, useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
/**Custom Hooks */
//import useWindowSize from '../../../hooks/useWindowSize';
import Transition from '../../../hooks/useTransition';
/**Redux Hooks */
import { useAppSelector } from '../../../redux/reduxHooks.ts';
import type { RootState } from '../../../redux/store.ts';
/**Constants */
import { DEFAULT_USER } from '../../../utils/constants';

const D_Plans = () => {
  /**Custom Hooks */
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  /** Redux Store: User */
  const getUser = useAppSelector((state:RootState) => state?.dashboard?.user) || DEFAULT_USER;

  /**Detect Auth */
  const [ auth, setAuth ] = useState(false);
  
  useEffect(() => {
    if(getUser !== undefined || Object.keys(getUser).length > 0) {
      if(getUser._ID.trim() === '123-456-789') {
        setAuth(false);
      } else {
        setAuth(true);
      }
    }
  },[getUser]);
  
  return (
    <div className={`${darkMode ? '' : ''} layout-template-container`}>
      <div className={`${darkMode ? 'layout-template-dark' : 'layout-template-light'} layout-template`}>
      <article className={`${darkMode ? '': ''}`}>
        <Transition>
          <h3 className={`${darkMode ? '' : ''} layout-template-header`}>
            Search
          </h3>
        </Transition>
        {!auth ?
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

export default D_Plans
