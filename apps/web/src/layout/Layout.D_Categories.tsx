// Categories
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
// hooks
//import Transition from '../hooks/useTransition';
import useWindowSize from '../hooks/useWindowSize';
// components
import ErrorDashboard from '../components/dashboard/error';
import { LoadingDashboardXL } from '../components/dashboard/loading';
// components
import D_Category from '../components/dashboard/dashboard-categories/D_Category';
import D_Category_Menu from '../components/dashboard/dashboard-categories/D_Category_Menu';
// import D_Languages from '../components/dashboard/dashboard-categories/D_Languages';
/**React Query */
import { useQuery } from "@tanstack/react-query";
/** React Redux Hooks */
import { useAppSelector, useAppDispatch } from '../redux/reduxHooks.ts';
import { 
  menuLanguage, menuCategoryInfo
} from '../redux/slices/dashboardSlice.ts';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const Layout_D_Categories = () => {
  /** Custom Hooks */
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const dispatch = useAppDispatch();
  /** Retrieve Category From Redux State */
  const getMenuLanguageDefault = useAppSelector((state:RootState) => state?.dashboard?.languageDefault);
  const getMenuLanguage = useAppSelector((state:RootState) => state?.dashboard?.language);
  const getMenuCategory = useAppSelector((state:RootState) => state?.dashboard?.category);
  const getMenuCategoryInfo = useAppSelector((state:RootState) => state?.dashboard?.categoryInfo);

  async function setLanguage() {
    if(getMenuLanguage === undefined || getMenuLanguage === '') {
      dispatch(menuLanguage(getMenuLanguageDefault));
    }
  }

  async function getCategories() {
    try {
      await setLanguage();
      let res;
      if(import.meta.env.PROD) {
        res = await fetch(`${baseURL}/categories`);
      } else {
        res = await fetch(`api/categories`);
      }
      const resJSON = res.json();
      return resJSON;
    } catch(error) {
      console.log(error);
    }
  };

  /** Generate Categories */
  const { isLoading, isError, error, data} = useQuery({
    queryKey: ['categoriesData'], 
    queryFn: getCategories, 
    refetchOnWindowFocus: false,
    staleTime: 100 * (60 * 1000),
    cacheTime: 100 * (60 * 1000),
  });

  useEffect(() => {
    let results;
    data?.data.find((item) => {
      if(item.category[0] === getMenuCategory) {
        results = item;
      }
    });
    dispatch(menuCategoryInfo(results))
  },[data, dispatch, getMenuCategory, getMenuCategoryInfo]);

  if (isLoading) return ( <LoadingDashboardXL/> )

  if (isError) return <ErrorDashboard error={error.message}/>

  return (
    <div className="tw-h-full">
      {/**Page Content | Position: Relative */}
        {isDesktopMDXL || isDesktopXL ? 
        <main className={`${darkMode ? '[&>*]:tw-bg-neutral-700/90' : '[&>*]:tw-bg-neutral-300/90'} 
          [&>*]:tw-backdrop-blur-sm [&>*]:tw-rounded tw-border tw-border-transparent tw-w-full tw-h-full 
          tw-grid tw-grid-rows-layout-dashboard-categories-container tw-gap-1  `}>
            <div className={`${darkMode ? 'tw-divide-campfire-neutral-500 tw-bg-campfire-neutral-600' : 'tw-divide-campfire-neutral-200 '} tw-w-full tw-h-full tw-grid tw-grid-rows-layout-dashboard-categories tw-grid-cols-layout-dashboard-categories tw-divide-x-2 tw-p-2`}>
              <section className={`${darkMode ? "" : ""} tw-col-start-1 tw-col-end-1 tw-row-start-1 tw-row-end-1 tw-p-2`}>
                <D_Category_Menu data={data}/>
              </section>
              <section className='tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1'>
                <div className=''><D_Category /></div>
              </section>
            </div>
        </main>
        :
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-categories-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
          <section className={`${darkMode ? "tw-bg-campfire-neutral-600" : "[&>*]:tw-bg-campfire-neutral-300"} tw-col-start-1 tw-col-end-1 tw-row-start-1 tw-row-end-1 tw-p-2`}>
            <D_Category_Menu data={data}/>
          </section>
          <section className=''><D_Category/></section>
        </main>
        }
    </div>
  )
}

export default Layout_D_Categories
 