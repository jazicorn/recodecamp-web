// Page: Dashboard Settings
/**React */
//import { useContext } from 'react';
import { 
  useContext, 
  useState, 
  useEffect 
} from 'react';
//import { useContext, useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../../context/ThemeContext';
/**Custom Hooks */
//import useWindowSize from '../../../../hooks/useWindowSize';
import Transition from '../../../../hooks/useTransition';
/**Redux Hooks */
import { 
  useAppDispatch, 
  useAppSelector 
} from '../../../../redux/reduxHooks.ts';
import type { RootState } from '../../../../redux/store.ts';
import { 
  validUser, 
  fetchUser, 
  fetchUserAuth, 
  fetchUserStatus 
} from '../../../../redux/slices/authSlice.ts';
/**Constants */
import { _DEFAULT_USER } from '../../../../utils/constants/constantsUser';
/** Components */
import LoadingDashboard from '../../../../components/dashboard/learn/L_Loading';

const L_Settings = () => {
  /** Custom Hooks | Screen Size*/
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();

  /** Custom Hooks | Dark Mode */
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Redux Store: User */
  const getUser = useAppSelector(fetchUser);
  const authenticated = useAppSelector(fetchUserAuth);
  const status = useAppSelector(fetchUserStatus);

  /** User State */
  const [user, setUser] = useState(getUser);

  useEffect(() => {
    setUser(getUser);
  }, [getUser]);

  useEffect(() => {
    dispatch(validUser());
  });

  if (status !== 'succeeded') {
    return (
      <div
        className={`${
          darkMode ? '[&>*]:tw-bg-neutral-900/80' : '[&>*]:tw-bg-neutral-300/80'
        } tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-screen tw-place-self-center tw-place-content-center tw-place-items-center`}
      >
        <LoadingDashboard />
      </div>
    );
  }

  return (
    <div className={`${darkMode ? '' : ''} layout-template-container`}>
      <div className={`${darkMode ? 'layout-template-dark' : 'layout-template-light'} layout-template`}>
        <article className={`${darkMode ? '' : ''}`}>
          <Transition>
            <h3 className={`${darkMode ? '' : ''} layout-template-header`}>Dashboard Settings</h3>
          </Transition>
          {!authenticated ? (
            <Transition>
              <main className={`${darkMode ? '' : ''} tw-pl-2.5`}>
                <p>
                  Want to save your progress?
                  <span id="dashboard-template-call-to-action" className={`${darkMode ? '' : ''}`}>
                    <Link to="/auth/guest/login">Login</Link>
                  </span>
                  or
                  <span id="dashboard-template-call-to-action" className={`${darkMode ? '' : ''}`}>
                    <Link to="/auth/guest/signup">Register</Link>
                  </span>
                </p>
              </main>
            </Transition>
          ) : (
            <main className="tw-px-4">
              <h4 id="dashboard-template-coming-soon" className="">
                🏗️&nbsp;Coming Soon...
              </h4>
            </main>
          )}
        </article>
      </div>
    </div>
  );
};

export default L_Settings;
