import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// hooks
import useWindowSize from '../hooks/useWindowSize';
import Transition from '../hooks/useTransition';
// components
import D_Calendar from '../components/dashboard-calender/D_Calendar';

const Layout_D_Calender = () => {
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div className="tw-h-full">
      {/**Page Content | Position: Relative */}
        {isDesktopMDXL || isDesktopXL ? 
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-w-full tw-h-full [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-calender tw-grid-cols-layout-dashboard-calender tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <Transition>
            <section className='tw-h-full'>
              <D_Calendar/>
            </section>
            </Transition>
        </main>
        :
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-calender-mobile tw-grid-cols-layout-dashboard-calender-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <Transition>
            <section className='tw-h-full'>
              <D_Calendar/>
            </section>
            </Transition>
        </main>
        }
    </div>
  )
}

export default Layout_D_Calender
 