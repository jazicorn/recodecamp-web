// Category
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
// redux hooks
import { useAppDispatch } from '../../../redux/reduxHooks.ts';
import { menuCategoryRoute } from '../../../redux/slices/dashboardSlice.ts';
//hooks
import Transition from '../../../hooks/useTransition';

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
    <div className={`${darkMode ? '[&>*]:tw-bg-campfire-neutral-600 tw-text-campfire-neutral-100' : '[&>*]:tw-bg-campfire-neutral-300'} 
    tw-w-full tw-h-full tw-flex tw-flex-row tw-p-2`}>
      <ul className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} tw-h-full tw-flex tw-flex-row`}>
        {routes === undefined ?
          <div/>
          :
          <div className="tw-flex tw-flex-row tw-flex-wrap ">
            <Transition>
              <h6 className={`${darkMode ? "tw-bg-campfire-neutral-500" :"tw-border-campfire-neutral-500 tw-bg-campfire-neutral-100" } tw-mb-1 tw-min-w-[8em] tw-mr-1 tw-px-1 tw-pb-1 tw-text-base tw-border-b`}>{sub[0]}:</h6>
            </Transition>
            <div className="tw-flex tw-flex-row tw-gap-1 tw-place-content-left">
            {
              routes.map((route, i) => {
                const strRoute = route.split('/').slice(-1);
                return (
                  <li key={i} 
                  className={`${darkMode ? "hover:tw-bg-campfire-neutral-200 tw-text-campfire-blue" 
                  : "hover:tw-bg-campfire-neutral-400 tw-text-campfire-neutral-900 tw-border-campfire-blue" } 
                  tw-min-w-[5em] tw-border tw-rounded tw-flex tw-flex-wrap tw-mb-1`}>
                    <Transition>
                      <button 
                      onClick={() => setCategory(route)} 
                      className="tw-px-2 tw-text-sm tw-font-space_grotesk_bold">
                          {strRoute}
                      </button>
                    </Transition>
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
