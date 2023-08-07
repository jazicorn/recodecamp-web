// Category
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
// redux hooks
import { useAppDispatch } from '../../redux/reduxHooks.ts';
import { menuCategoryRoute } from '../../redux/slices/dashboardSlice.ts';

const D_SubCategory = (subCategory) => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  // const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const dispatch = useAppDispatch();

  const sub = subCategory.subCategory;
  const routes = sub[1];

  function setCategory(route) {
    dispatch(menuCategoryRoute(route))
  }

  return (
    <div className={`${darkMode ? '[&>*]:tw-bg-[#525252] tw-text-campfire-neutral-100' : '[&>*]:tw-bg-campfire-neutral-300'} 
    tw-w-full tw-h-full tw-flex tw-flex-col tw-p-2`}>
      <ul className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} tw-h-full tw-flex tw-flex-row`}>
        {routes === undefined ?
          <div/>
          :
          <div className="tw-flex tw-flex-col">
            <h6 className={`${darkMode ? "" :"" } tw-pb-1`}>{sub[0]}:</h6>
            <div className="tw-flex tw-flex-row tw-gap-1 tw-place-content-left">
            {
              routes.map((route, i) => {
                const strRoute = route.split('/').slice(-1);
                return (
                  <li key={i} className={`${darkMode ? "hover:tw-bg-campfire-neutral-200 tw-text-campfire-blue" 
                                        : "hover:tw-bg-campfire-neutral-400 tw-text-campfire-neutral-900 tw-border-campfire-blue" } tw-border`}>
                    <button 
                      onClick={() => setCategory(route)} 
                      className="tw-px-2">
                        {strRoute}
                    </button>
                  </li>
                )
              })
            }
            </div>
          </div>
        }
      </ul>
    </div>
  )
}

export default D_SubCategory
