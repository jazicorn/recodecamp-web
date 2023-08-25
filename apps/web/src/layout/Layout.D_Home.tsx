import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// hooks
import useWindowSize from '../hooks/useWindowSize';
import Transition from '../hooks/useTransition';
// components
import D_Banner from '../components/dashboard-home/D_Banner';
import D_Banner_Mobile from '../components/dashboard-home/D_Banner_Mobile';
import D_User from '../components/dashboard-home/D_User';
import D_Support from '../components/dashboard-home/D_Support';


const Layout_D_Home = () => {
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div className="tw-h-full">
      <Transition>
      {/**Page Content | Position: Relative */}
        {isDesktopMDXL || isDesktopXL ? 
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-w-full tw-h-[85vh] [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-home tw-grid-cols-layout-dashboard-home tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <section className='tw-col-start-1 tw-col-end-2 tw-row-start-1 tw-row-end-1'>
              <D_Banner/>
            </section>
            <section className='tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1'>
              <D_User/>
            </section>
        </main>
        :
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-home-mobile tw-grid-cols-layout-dashboard-home-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            {/** z index can't go higher than 50 to work*/}
            <section className='tw-row-start-1 tw-row-end-1'>
              <D_Banner_Mobile/>
            </section>
            <section className='tw-row-start-2 tw-row-end-2'>
              <D_User/>
            </section>
            <section className='tw-row-start-3 tw-row-end-3'>
              <D_Support/>
            </section>
            <section className='tw-row-start-4 tw-row-end-4'>
              <D_Support/>
            </section>
        </main>
        }
      </Transition>
    </div>
  )
}

export default Layout_D_Home
 