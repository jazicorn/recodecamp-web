// Categories
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
// hooks
import useWindowSize from '../hooks/useWindowSize';
// components
import ErrorDashboard from '../components/dashboard/error';
import LoadingDashboard from '../components/dashboard/loading';
// components
import D_Category from '../components/dashboard-categories/D_Category';
// import D_Languages from '../components/dashboard-categories/D_Languages';
// /**React Query */
import { useQuery, QueryCache, } from "@tanstack/react-query";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const Layout_D_Categories = () => {
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  async function getCategories() {
    try {
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

  if (isLoading) return <LoadingDashboard/>

  if (isError) return <ErrorDashboard error={error.message}/>

  return (
    <div className="tw-h-full">
      {/**Page Content | Position: Relative */}
        {isDesktopMDXL || isDesktopXL ? 
        <main className={`${darkMode ? '[&>*]:tw-bg-neutral-700/80' : '[&>*]:tw-bg-neutral-400/80'} 
          [&>*]:tw-backdrop-blur-sm [&>*]:tw-rounded tw-border tw-border-transparent tw-w-full tw-h-full 
          tw-grid tw-grid-rows-layout-dashboard-categories tw-gap-1  `}>
            <div>
              {
                data.data !== undefined && data?.data.map((category, i) => {
                  return (<section key={i} className=''><D_Category category={category}/></section>)
                })
              }
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
 