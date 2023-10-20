import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
// hooks
import useWindowSize from '../../hooks/useWindowSize'
// redux hooks
import { useAppSelector } from '../../redux/reduxHooks.ts'
import type { RootState } from '../../redux/store.ts'
import { IconArrowBadgeRightFilled } from '@tabler/icons-react'
/**Constants */
import { _LANGUAGES_ALL } from '../../utils/constants'
/** Custom State Components*/
import { LoadingDashboardXS } from '../../components/dashboard/loading'

const D_Header = () => {
  const { state } = useContext(ThemeContext)
  const darkMode = state.darkMode
  const { isMobile } = useWindowSize()
  const menuItem = useAppSelector((state: RootState) => state?.dashboard?.categoryRoute)
  const routeEmpty = menuItem.length === 0
  const routeArr = menuItem.split('/').filter((route) => route !== 'random')

  /**Language Menu */
  const getMenuLanguage = useAppSelector((state: RootState) => state?.dashboard?.language)
  const transformLanguage = getMenuLanguage[0].toUpperCase() + getMenuLanguage.slice(1).toLowerCase()
  //console.log("transformLanguage", transformLanguage);
  const picture = _LANGUAGES_ALL[getMenuLanguage.toLowerCase()]
  //console.log(picture);

  /**Loading Screen */
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, '600')

  if (loading) {
    return (
      <div
        className={`${darkMode ? '[&>*]:tw-bg-neutral-700/70' : '[&>*]:tw-bg-neutral-300/70'}
      tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center`}
      >
        <LoadingDashboardXS />
      </div>
    )
  }

  return (
    <menu
      className={`${
        darkMode ? 'tw-text-campfire-neutral-400 tw-border-campfire-neutral-400' : 'tw-text-campfire-neutral-600'
      } tw-border-b
    tw-shrink-0 tw-flex tw-flex-row tw-h-full tw-w-full tw-font-roboto_mono_medium tw-text-sm tw-items-center tw-place-content-between tw-pr-3`}
    >
      {isMobile ? (
        <ul>
          <ul className="tw-flex tw-flex-row tw-items-center">
            <li className="tw-pl-4">
              <img src={picture} alt={transformLanguage} style={{ height: 20, width: 20 }}></img>
            </li>
            {!routeEmpty ? (
              routeArr.map((route, i) => (
                <li key={i} className="tw-flex tw-flex-row tw-pt-1">
                  <span
                    className={`${
                      darkMode ? '' : ''
                    } tw-text-campfire-blue tw-flex tw-flex-row tw-items-center tw-pt-0.5 tw-px-1`}
                  >
                    <IconArrowBadgeRightFilled size={20} color="#2ca9bc" />
                  </span>
                  <span className="">{route}</span>
                </li>
              ))
            ) : (
              <div>
                <span className="">{transformLanguage}</span>
              </div>
            )}
          </ul>
        </ul>
      ) : (
        <ul className="tw-flex tw-flex-row tw-items-center tw-h-full tw-py-2">
          <li className="tw-flex tw-flex-row tw-items-center tw-h-full tw-pl-4">
            <img src={picture} alt={transformLanguage} style={{ height: 20, width: 20 }}></img>
          </li>
          <li className="tw-flex tw-flex-row tw-items-center tw-h-full tw-pl-2 tw-pr-0.5 ">
            <span className="">{transformLanguage}</span>
          </li>
          {!routeEmpty ? (
            routeArr.map((route, i) => (
              <li key={i} className="tw-flex tw-flex-row tw-h-full">
                <span className={`${darkMode ? '' : ''} tw-text-campfire-blue tw-flex tw-flex-row tw-items-center `}>
                  <IconArrowBadgeRightFilled size={20} color="#2ca9bc" />
                </span>
                <span className="tw-flex tw-flex-row tw-items-center">{route}</span>
              </li>
            ))
          ) : (
            <div />
          )}
        </ul>
      )}
    </menu>
  )
}

export default D_Header
