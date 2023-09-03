import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
// hooks
import useWindowSize from '../hooks/useWindowSize';
// components
import D_User_Editor from '../components/dashboard/dashboard-code-editor/D_User_Editor';
import D_User_Files from '../components/dashboard/dashboard-code-editor/D_User_Editor_Files';
import D_User_Console from '../components/dashboard/dashboard-code-editor/D_User_Editor_Console';

const Layout_D_CodeEditor = () => {
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div className="tw-h-full">
      {/**Page Content | Position: Relative */}
        {isDesktopMDXL || isDesktopXL ? 
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-w-full tw-h-[85vh] [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-code-editor tw-grid-cols-layout-dashboard-code-editor tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <section className='tw-col-start-1 tw-col-end-1 tw-row-start-1 tw-row-end-3'>
                <D_User_Files/>
            </section>
            <section className='tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1'>
                <D_User_Editor/>
            </section>
            <section className='tw-col-start-2 tw-col-end-3 tw-row-start-2 tw-row-end-3'>
                <D_User_Console/>
            </section>
        </main>
        :
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-code-editor-mobile tw-grid-cols-layout-dashboard-code-editor-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <section className='tw-row-start-1 tw-row-end-1'>
                <D_User_Files/>
            </section>
             <section className='tw-row-start-2 tw-row-end-2'>
                <D_User_Editor/>
            </section>
            <section className='tw-row-start-3 tw-row-end-3'>
                <D_User_Console/>
            </section>
        </main>
        }
    </div>
  )
}

export default Layout_D_CodeEditor
 