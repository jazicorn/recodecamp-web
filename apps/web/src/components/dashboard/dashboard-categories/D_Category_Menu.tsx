// Category
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
// redux hooks
// import { useAppDispatch } from '../../../redux/reduxHooks.ts';
// import { menuCategoryRoute } from '../../../redux/slices/dashboardSlice.ts';
// hooks
import Transition from '../../../hooks/useTransition';

const D_Category_Menu = ({i, category}) => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const title = category.category;

  return (
    <div key={i} className={`${darkMode ? ' tw-text-campfire-blue' : ''} 
    tw-w-full tw-h-full tw-flex tw-flex-col`}>
      <ul className={`${darkMode ? ' ' : 
      ''} tw-h-full`}>
        <Transition>
          <li className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'}
           tw-h-[36px] tw-w-full tw-pl-6 `}>
            <button className={`${darkMode ? '' : ''} tw-font-space_mono tw-text-xl hover:tw-text-campfire-purple-light tw-text-campfire-blue tw-px-2`}>
              {title[0] !== undefined && title[0]}
            </button>
          </li>
        </Transition>
      </ul>
    </div>
  )
}

export default D_Category_Menu