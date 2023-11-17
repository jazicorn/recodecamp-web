/**React */
import { useContext, useState } from 'react';
/** Custom State Components*/
import { LoadingDashboardXL } from '../../../components/dashboard/learn/L_Loading';
//import ErrorDashboard from '../../../components/dashboard/error';
/**Custom Hooks */
import { ThemeContext } from '../../../context/ThemeContext';
import useWindowSize from '../../../hooks/useWindowSize';
/**Custom Components */
import L_Notes from '../../../components/dashboard/learn/learn-notes/L_Notes';

const Layout_L_Notes = () => {
  /**Custom Hooks */
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /**Loading Screen */
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, '600');

  if (loading) {
    return (
      <div
        className={`${darkMode ? '[&>*]:tw-bg-neutral-700/50' : '[&>*]:tw-bg-neutral-300/50'}
      tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center`}
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
          className={`tw-bg-transparent tw-w-full tw-h-full [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-notes tw-grid-cols-layout-dashboard-notes tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}
        >
          <section className="tw-h-full">
            <L_Notes />
          </section>
        </main>
      ) : (
        <main
          className={`tw-bg-transparent tw-pb-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-notes-mobile tw-grid-cols-layout-dashboard-notes-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}
        >
          <section className="tw-h-full">
            <L_Notes />
          </section>
        </main>
      )}
    </div>
  );
};

export default Layout_L_Notes;
