/**React */
import { useContext, useState } from 'react'
/** Custom State Components*/
import { LoadingDashboardXL } from '../../components/dashboard/loading'
//import ErrorDashboard from '../../components/dashboard/error';
/**Custom Hooks */
import { ThemeContext } from '../../context/ThemeContext'
import useWindowSize from '../../hooks/useWindowSize'
/**Custom Components*/
import D_Docs from '../../components/dashboard/dashboard-docs/D_Docs'

const Layout_D_Docs = () => {
  /**Custom Hooks */
  const { isDesktopMDXL, isDesktopXL } = useWindowSize()
  const { state } = useContext(ThemeContext)
  const darkMode = state.darkMode

  /**Loading Screen */
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, '600')

  if (loading) {
    return (
      <div
        className={`${darkMode ? '[&>*]:tw-bg-neutral-700/50' : '[&>*]:tw-bg-neutral-300/50'}
      tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center`}
      >
        <LoadingDashboardXL />
      </div>
    )
  }

  if (!loading) {
    return (
      <div className="tw-h-full">
        {/**Page Content | Position: Relative */}
        {isDesktopMDXL || isDesktopXL ? (
          <main
            className={`${darkMode ? '[&>*]:tw-bg-neutral-700/50' : '[&>*]:tw-bg-neutral-300/50'} 
          tw-bg-transparent tw-w-full tw-h-full [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-docs tw-grid-cols-layout-dashboard-docs tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}
          >
            <section className="tw-h-full">
              <D_Docs />
            </section>
          </main>
        ) : (
          <main
            className={`${darkMode ? '[&>*]:tw-bg-neutral-700/50' : '[&>*]:tw-bg-neutral-300/50'} 
          tw-bg-transparent tw-pb-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-docs-mobile tw-grid-cols-layout-dashboard-docs-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}
          >
            <section className="tw-h-full">
              <D_Docs />
            </section>
          </main>
        )}
      </div>
    )
  }
}

export default Layout_D_Docs
