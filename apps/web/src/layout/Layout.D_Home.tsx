import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// hooks
import useWindowSize from '../hooks/useWindowSize';
import Transition from '../hooks/useTransition';
// components
import D_Banner from '../components/dashboard-home/D_Banner';
import D_Banner_Mobile from '../components/dashboard-home/D_Banner_Mobile';

const Layout_D_Home = () => {
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div className="tw-h-full">
      {/**Page Content | Position: Relative */}
        {isDesktopMDXL || isDesktopXL ?
        <div> 
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-w-full tw-h-full [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-home tw-grid-cols-layout-dashboard-home tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <section className=''>
              <D_Banner/>
            </section>
        </main>
        </div>
        :
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-home-mobile tw-grid-cols-layout-dashboard-home-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            {/** z index can't go higher than 50 to work*/}
            <section className='tw-row-start-1 tw-row-end-1'>
              <D_Banner_Mobile/>
            </section>
        </main>
        }
    </div>
  )
}

export default Layout_D_Home
 