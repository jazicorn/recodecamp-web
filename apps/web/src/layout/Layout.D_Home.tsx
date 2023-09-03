import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// hooks
import useWindowSize from '../hooks/useWindowSize';
//import Transition from '../hooks/useTransition';
// components
import D_User_Landing from '../components/dashboard/dashboard-home/D_User_Landing';
import D_Home_Navigation from '../components/dashboard/dashboard-home/D_Home_Navigation';
import D_Home_Navigation_Mobile from '../components/dashboard/dashboard-home/D_Home_Navigation_Mobile';

const Layout_D_Home = () => {
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div className="tw-h-full">
      {/**Page Content | Position: Relative */}
        {isDesktopMDXL || isDesktopXL ?
          <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
            tw-bg-transparent tw-w-full tw-h-full [&>*]:tw-backdrop-blur-sm
            tw-grid tw-grid-rows-layout-dashboard-home tw-grid-cols-layout-dashboard-home tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className='tw-col-start-1 tw-col-end-2 tw-row-start-1 tw-row-end-1'>
                <D_Home_Navigation/>
              </section>
              <section className='tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1'>
                <D_User_Landing/>
              </section>
          </main>
        :
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-home-mobile tw-grid-cols-layout-dashboard-home-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <section className='tw-row-start-1 tw-row-end-1'>
              <D_Home_Navigation_Mobile/>
            </section>
            <section className='tw-row-start-2 tw-row-end-2'>
              <D_User_Landing/>
            </section>
        </main>
        }
    </div>
  )
}

export default Layout_D_Home
 