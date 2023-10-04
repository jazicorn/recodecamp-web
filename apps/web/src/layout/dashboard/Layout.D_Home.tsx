/**React */
import { useContext, useState } from 'react';
/** Custom State Components*/
import {LoadingDashboardXL} from '../../components/dashboard/loading';
//import ErrorDashboard from '../../components/dashboard/error';
/**Custom Hooks */
import { ThemeContext } from '../../context/ThemeContext';
import useWindowSize from '../../hooks/useWindowSize';
/**Custom Components*/
import D_User_Landing from '../../components/dashboard/dashboard-home/D_User_Landing';
import D_Home_Navigation from '../../components/dashboard/dashboard-home/D_Home_Navigation';
import D_Home_Navigation_Mobile from '../../components/dashboard/dashboard-home/D_Home_Navigation_Mobile';
import D_Home_Header from '../../components/dashboard/dashboard-home/D_Home_Header';

const Layout_D_Home = () => {
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  /**Loading Screen */
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, "600");

  if(loading) {
    return (
      <div className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-85'} ${darkMode ? '[&>*]:tw-bg-neutral-700/50' : '[&>*]:tw-bg-neutral-300/50'} tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-screen tw-place-self-center tw-place-content-center tw-place-items-center`}>
        <LoadingDashboardXL />
      </div>
    )
  }

  return (
    <div className="tw-h-full">
      {/**Page Content | Position: Relative */}
        {isDesktopMDXL || isDesktopXL ?
          <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-85'} 
            tw-bg-transparent tw-w-full tw-h-full [&>*]:tw-backdrop-blur-sm
            tw-grid tw-grid-rows-layout-dashboard-home tw-grid-cols-layout-dashboard-home tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className='tw-col-start-1 tw-col-end-3 tw-row-start-1 tw-row-end-1'>
                <D_Home_Header/>
              </section>
              <section className='tw-col-start-1 tw-col-end-2 tw-row-start-2 tw-row-end-2'>
                <D_Home_Navigation/>
              </section>
              <section className='tw-col-start-2 tw-col-end-3 tw-row-start-2 tw-row-end-2'>
                <D_User_Landing/>
              </section>
          </main>
        :
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-85'} 
          tw-bg-transparent tw-pb-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-home-mobile tw-grid-cols-layout-dashboard-home-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <section className='tw-row-start-1 tw-row-end-1'>
              <D_Home_Header/>
              </section>
            <section className='tw-row-start-2 tw-row-end-2'>
              <D_Home_Navigation_Mobile/>
            </section>
            <section className='tw-row-start-3 tw-row-end-3'>
              <D_User_Landing/>
            </section>
        </main>
        }
    </div>
  )
}

export default Layout_D_Home
 