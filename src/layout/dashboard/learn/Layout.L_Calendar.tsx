/**React */
import { 
  useContext, 
  useState 
} from 'react';
/** Custom State Components*/
import { LoadingDashboardXL } from '../../../components/dashboard/learn/L_Loading';
//import ErrorDashboard from '../../components/dashboard/error';
/**Custom Hooks */
import { ThemeContext } from '../../../context/ThemeContext';
import useWindowSize from '../../../hooks/useWindowSize';
/**Custom Components */
import L_Calendar from '../../../components/dashboard/learn/learn-calendar/L_Calendar';

const Layout_L_Calender = () => {
  /**Custom Hooks */
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /**Loading Screen */
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, '1000');

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
          className={`
          tw-bg-transparent tw-w-full tw-h-full [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-calender tw-grid-cols-layout-dashboard-calender tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}
        >
          <section className="tw-h-full">
            <L_Calendar />
          </section>
        </main>
      ) : (
        <main
          className={`
          tw-bg-transparent tw-pb-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-calender-mobile tw-grid-cols-layout-dashboard-calender-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}
        >
          <section className="tw-h-full">
            <L_Calendar />
          </section>
        </main>
      )}
    </div>
  );
};

export default Layout_L_Calender;
