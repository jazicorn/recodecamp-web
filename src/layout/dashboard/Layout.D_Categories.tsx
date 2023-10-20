// Page: Dashboard Categories
/**React */
import { useContext, useEffect, useState, useCallback } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
/*Custom Hooks*/
import Transition from '../../hooks/useTransition'
import useWindowSize from '../../hooks/useWindowSize'
/*Constants*/
import { _LANGUAGES_SHORTHAND } from '../../utils/constants'
/**Custom Components */
import ErrorDashboard from '../../components/dashboard/error'
import { LoadingDashboardXL } from '../../components/dashboard/loading'
import D_Category from '../../components/dashboard/dashboard-categories/D_Category'
import D_Category_Menu from '../../components/dashboard/dashboard-categories/D_Category_Menu'
import D_Route from '../../components/dashboard/D_Route'
// import D_Languages from '../../components/dashboard/dashboard-categories/D_Languages';
/**React Query */
import { useQuery } from '@tanstack/react-query'
/** React Redux Hooks */
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks.ts'
import type { RootState } from '../../redux/store.ts'
import { menuLanguage, menuCategoryInfo } from '../../redux/slices/dashboardSlice.ts'
/** API url | Custom env mandatory to begin with VITE
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL

const Layout_D_Categories = () => {
  /** Custom Hooks */
  const { isDesktopLGXL, isDesktopXL } = useWindowSize()
  const { state } = useContext(ThemeContext)
  const darkMode = state.darkMode

  const dispatch = useAppDispatch()
  /** Retrieve Category From Redux State */
  const getMenuRoute = useAppSelector((state: RootState) => state?.dashboard?.categoryRoute)
  const getMenuLanguageDefault = useAppSelector((state: RootState) => state?.dashboard?.languageDefault)
  const getMenuLanguage = useAppSelector((state: RootState) => state?.dashboard?.language)
  const getMenuCategory = useAppSelector((state: RootState) => state?.dashboard?.category)
  const getMenuCategoryInfo = useAppSelector((state: RootState) => state?.dashboard?.categoryInfo)
  const getMenuUser = useAppSelector((state: RootState) => state?.dashboard?.user)

  const currentLanguage = _LANGUAGES_SHORTHAND[getMenuLanguage.toLowerCase()]

  /**Get question url */
  let url
  if (import.meta.env.PROD) {
    url = `${baseURL}/${currentLanguage}/${getMenuRoute}`
  } else {
    url = `/api/${currentLanguage}/${getMenuRoute}`
    //console.log(url)
  }

  /** Retrieve Category Based Question */
  const getQuestion = useCallback(async (url) => {
    /** Retrieve Question from API */
    try {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const resJSON = await result.json()
      //console.log("resJSON",resJSON);
      return resJSON
    } catch (error) {
      console.log(error)
    }
  }, [])

  /** Generate Question */
  const { refetch } = useQuery({
    queryKey: ['questionData', url],
    queryFn: () => getQuestion(url),
    refetchOnWindowFocus: false,
    staleTime: 100 * (60 * 1000),
    cacheTime: 100 * (60 * 1000),
  })

  async function setLanguage() {
    if (getMenuLanguage === undefined || getMenuLanguage.length === 0) {
      if (getMenuUser._DEFAULT_LANGUAGE === undefined || getMenuUser._DEFAULT_LANGUAGE.length === 0) {
        await dispatch(menuLanguage(getMenuLanguageDefault))
        await refetch()
      } else {
        //console.log("getMenuUser._DEFAULT_LANGUAGE",getMenuUser._DEFAULT_LANGUAGE)
        await dispatch(menuLanguage(getMenuUser._DEFAULT_LANGUAGE))
        await refetch()
      }
    }
  }

  async function getCategories() {
    try {
      await setLanguage()
      let res
      if (import.meta.env.PROD) {
        res = await fetch(`${baseURL}/categories/${currentLanguage}`)
      } else {
        res = await fetch(`api/categories/${currentLanguage}`)
      }
      const resJSON = res.json()
      return resJSON
    } catch (error) {
      console.log(error)
    }
  }

  /** Generate Categories */
  const { isFetching, isLoading, isError, error, isSuccess, data } = useQuery({
    queryKey: ['categoriesData'],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
    staleTime: 100 * (60 * 1000),
    cacheTime: 100 * (60 * 1000),
  })

  const fetchCategoryInfo = useCallback(async () => {
    let results
    data?.data.find((item) => {
      if (item.category[0] === getMenuCategory) {
        results = item
      }
    })
    await dispatch(menuCategoryInfo(results))
    await refetch()
  }, [data?.data, dispatch, getMenuCategory, refetch])

  useEffect(() => {
    fetchCategoryInfo()
  }, [data, dispatch, fetchCategoryInfo, getMenuCategory, getMenuCategoryInfo])

  /**Delay Loading Screen */
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, '600')

  /** Render if Loading */
  if (isFetching || isLoading)
    return (
      <div
        className={`${
          darkMode ? '[&>*]:tw-bg-neutral-700/50' : '[&>*]:tw-bg-neutral-300/50'
        } tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center`}
      >
        <LoadingDashboardXL />
      </div>
    )

  if (isError) return <ErrorDashboard error={error.message} />

  if (isSuccess && loading) {
    return (
      <div
        className={`${
          darkMode ? '[&>*]:tw-bg-neutral-700/50' : '[&>*]:tw-bg-neutral-300/50'
        } tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center`}
      >
        <LoadingDashboardXL />
      </div>
    )
  }

  if (isSuccess && !loading) {
    return (
      <>
        {/**Page Content | Position: Relative */}
        {isDesktopLGXL || isDesktopXL ? (
          <main
            className={`${darkMode ? '[&>*]:tw-bg-neutral-700/50' : '[&>*]:tw-bg-neutral-300/50'} 
            [&>*]:tw-backdrop-blur-sm [&>*]:tw-rounded tw-border tw-border-transparent tw-w-full tw-h-full tw-p-2
            tw-grid tw-grid-rows-layout-dashboard-categories-container tw-gap-1`}
          >
            <div
              className={`${
                darkMode ? 'tw-divide-campfire-neutral-500 ' : 'tw-divide-campfire-neutral-200 '
              } tw-w-full tw-h-full tw-grid tw-grid-rows-layout-dashboard-categories tw-grid-cols-layout-dashboard-categories tw-p-2`}
            >
              <section
                className={`${darkMode ? '' : ''} 
                tw-col-start-1 tw-col-end-3 tw-row-start-1 tw-row-end-1 `}
              >
                <Transition>
                  <D_Route />
                </Transition>
              </section>
              <section
                className={`${darkMode ? '' : ''}
                tw-col-start-1 tw-col-end-1 tw-row-start-2 tw-row-end-2 tw-p-2`}
              >
                <Transition>
                  <D_Category_Menu menuData={data} />
                </Transition>
              </section>
              <section className="tw-col-start-2 tw-col-end-3 tw-row-start-2 tw-row-end-2">
                <Transition>
                  <D_Category />
                </Transition>
              </section>
            </div>
          </main>
        ) : (
          <Transition>
            <main
              className={`${darkMode ? '[&>*]:tw-bg-neutral-700/50' : '[&>*]:tw-bg-neutral-300/50'} 
            tw-bg-transparent tw-pb-1 tw-w-full tw-h-fit tw-grow [&>*]:tw-backdrop-blur-sm
            tw-grid tw-grid-rows-layout-dashboard-categories-mobile tw-grid-col-layout-dashboard-categories-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent tw-gap-y-3 tw-pt-2`}
            >
              <section
                className={`${darkMode ? 'tw-bg-campfire-neutral-500/50' : 'tw-bg-campfire-neutral-300/50'} 
                tw-col-start-1 tw-col-end-1 tw-row-start-1 tw-row-end-1 tw-p-2 `}
              >
                <D_Route />
              </section>
              <section
                className={`${darkMode ? '[&>*]:tw-bg-campfire-neutral-700/50' : '[&>*]:tw-bg-campfire-neutral-200/50'} 
              tw-col-start-1 tw-col-end-1 tw-row-start-2 tw-row-end-2 tw-p-2`}
              >
                <D_Category_Menu menuData={data} />
              </section>
              <section className="tw-col-start-1 tw-col-end-1 tw-row-start-3 tw-row-end-3">
                <D_Category />
              </section>
            </main>
          </Transition>
        )}
      </>
    )
  }
}

export default Layout_D_Categories
