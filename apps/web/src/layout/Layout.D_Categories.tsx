// Categories
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
// hooks
import Transition from '../hooks/useTransition';
import useWindowSize from '../hooks/useWindowSize';
// components
import ErrorDashboard from '../components/dashboard/error';
import LoadingDashboard from '../components/dashboard/loading';
// components
import D_Category from '../components/dashboard-categories/D_Category';
import D_Category_Menu from '../components/dashboard-categories/D_Category_Menu';
// import D_Languages from '../components/dashboard-categories/D_Languages';
/**React Query */
import { useQuery, QueryCache, } from "@tanstack/react-query";
/** React Redux Hooks */
import { useAppSelector, useAppDispatch } from '../redux/reduxHooks.ts';
import { 
  menuLanguage,
} from '../redux/slices/dashboardSlice.ts';
/** Icons */
import JS_Icon from "../assets/tech/javascript/javascript-original.svg";
import JAVA_Icon from "../assets/tech/java/java-original.svg";
import PY_Icon from "../assets/tech/python/python-original.svg";

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
      //setStuff(resJSON);
      return resJSON;
    } catch(error) {
      console.log(error);
    }
  };

  const queryCache = new QueryCache();

  /** Generate Categories */
  const { isLoading, isError, error, data} = useQuery(['categoriesData'], getCategories, {
    refetchOnWindowFocus: false,
    cache: queryCache
  });

  if (isLoading) return ( <LoadingDashboard size={'xl'}/> )

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
                <Transition>
                  <div className={`${darkMode ? "" : ""} tw-py-2 tw-h-full`}>
                    <h4 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} tw-border-campfire-purple-light tw-border-b tw-text-xl tw-h-[36px] tw-w-full tw-pl-2 
                    tw-font-space_mono tw-justify-items-start`}>
                    <div className="tw-flex tw-flex-row tw-items-end tw-text-xl">
                      Language:
                        <button className={`${darkMode ? '' : 'tw-text-campfire-neutral-600'} tw-px-2  tw-w-fit tw-flex tw-flex-row tw-font-space_mono tw-bg-transparent hover:tw-text-campfire-purple-light tw-text-base 
                        `}>
                          {getMenuLanguage === "Javascript" &&
                            <div className="tw-flex tw-flex-row tw-bg-transparent"> 
                              <img src={JS_Icon} alt="Javascript" style={{ height: 21, width: 21 }}></img>
                              &nbsp;{getMenuLanguage}
                            </div>
                          }
                          {getMenuLanguage === "Java" &&
                            <div className="tw-flex tw-flex-row tw-bg-transparent"> 
                              <img src={Java_Icon} alt="Java" style={{ height: 21, width: 21 }}></img>
                              &nbsp;{getMenuLanguage}
                            </div>
                          }
                          {getMenuLanguage === "Python" &&
                            <div className="tw-flex tw-flex-row tw-bg-transparent"> 
                              <img src={Py_Icon} alt="Python" style={{ height: 21, width: 21 }}></img>
                              &nbsp;{getMenuLanguage}
                            </div>
                          }
                        </button>
                      </div>
                    </h4>
                  </div>
                </Transition>
                <Transition>
                  <h5 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} 
                  tw-text-lg tw-h-[36px] tw-w-full tw-pl-2 tw-font-space_mono`}>
                    Categories:&nbsp;
                  </h5>
                </Transition>
                {
                  data.data !== undefined && data?.data.map((category, i) => {
                    return (<section key={i} className=''><D_Category_Menu category={category}/></section>)
                  })
                }
              </section>
              <section className='tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1'>
                {
                  data.data !== undefined && data?.data.map((category, i) => {
                    return (<section key={i} className=''><D_Category category={category}/></section>)
                  })
                }
              </section>
            </div>
        </main>
        :
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-categories-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            {
              data.data !== undefined && data?.data.map((category, i) => {
                return (<section key={i} className=''><D_Category  category={category}/></section>)
              })
            }
        </main>
        }
    </div>
  )
}

export default Layout_D_Categories
 