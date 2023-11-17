/**React */
import { useContext, useState } from 'react';
/**Custom Hooks */
import { ThemeContext } from '../../../context/ThemeContext';
import useWindowSize from '../../../hooks/useWindowSize';
/**Custom Components*/
import { LoadingDashboardXL } from '../../../components/dashboard/learn/L_Loading';
import L_User_Landing from '../../../components/dashboard/learn/learn-home/L_User_Landing';
import L_Home_Navigation from '../../../components/dashboard/learn/learn-home/L_Home_Navigation';
import L_Home_Navigation_Mobile from '../../../components/dashboard/learn/learn-home/L_Home_Navigation_Mobile';
import L_Home_Header from '../../../components/dashboard/learn/learn-home/L_Home_Header';

const Layout_L_Home = () => {
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  /**Loading Screen */
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, '1400');

  if (loading) {
    return (
      <div
        className={`${
          darkMode ? '[&>*]:tw-bg-neutral-900/80' : '[&>*]:tw-bg-neutral-300/80'
        } tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-screen tw-place-self-center tw-place-content-center tw-place-items-center`}
      >
        <LoadingDashboardXL />
      </div>
    );
  }

  return (
    <div className="tw-h-full">
      {/**Page Content | Position: Relative */}
      {isDesktopMDXL || isDesktopXL ? (
        <main
          className={`${darkMode ? 'layout-learn-home-dark' : 'layout-learn-home-light'} 
            layout-learn-home`}
        >
          <section className="tw-col-start-1 tw-col-end-3 tw-row-start-1 tw-row-end-1">
            <L_Home_Header />
          </section>
          <section className="tw-col-start-1 tw-col-end-2 tw-row-start-2 tw-row-end-2">
            <L_Home_Navigation />
          </section>
          <section className="tw-col-start-2 tw-col-end-3 tw-row-start-2 tw-row-end-2">
            <L_User_Landing />
          </section>
        </main>
      ) : (
        <main
          className={`${darkMode ? 'layout-learn-home-dark' : 'layout-learn-home-light'} 
          layout-learn-home-mobile tw-px-2`}
        >
          <section className="tw-row-start-1 tw-row-end-1">
            <L_Home_Header />
          </section>
          <section className="tw-row-start-2 tw-row-end-2">
            <L_Home_Navigation_Mobile />
          </section>
          <section className="tw-row-start-3 tw-row-end-3">
            <L_User_Landing />
          </section>
        </main>
      )}
    </div>
  );
};

export default Layout_L_Home;
