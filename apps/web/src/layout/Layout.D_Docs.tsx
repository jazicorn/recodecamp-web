import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// hooks
import useWindowSize from '../hooks/useWindowSize';
//import Transition from '../hooks/useTransition';
// components
import D_Docs from '../components/dashboard/dashboard-docs/D_Docs';

const Layout_D_Docs = () => {
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div className="tw-h-full">
      {/**Page Content | Position: Relative */}
        {isDesktopMDXL || isDesktopXL ? 
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-85'} 
          tw-bg-transparent tw-w-full tw-h-full [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-docs tw-grid-cols-layout-dashboard-docs tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <section className='tw-h-full'>
              <D_Docs/>
            </section>
        </main>
        :
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-85'} 
          tw-bg-transparent tw-pb-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-docs-mobile tw-grid-cols-layout-dashboard-docs-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <section className='tw-h-full'>
              <D_Docs/>
            </section>
        </main>
        }
    </div>
  )
}

export default Layout_D_Docs
 