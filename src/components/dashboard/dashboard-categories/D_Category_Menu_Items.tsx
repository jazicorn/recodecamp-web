// Category
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
/** React Redux Hooks */
import { useAppDispatch } from '../../../redux/reduxHooks.ts';
import { menuCategory } from '../../../redux/slices/dashboardSlice.ts';
// hooks
import Transition from '../../../hooks/useTransition';

const D_Category_Menu_Items = ({ category }) => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const title = category.category;

  const dispatch = useAppDispatch();
  //const getMenuCategoryInfo = useAppSelector((state:RootState) => state?.dashboard?.categoryInfo);

  const setCategoryInfo = (title) => {
    dispatch(menuCategory(title));
  };

  return (
    <>
      <Transition>
        <div
          className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'}
           tw-h-[36px] tw-w-full tw-flex tw-flex-row`}
        >
          {title !== undefined && (
            <button
              onClick={() => setCategoryInfo(title[0])}
              className={`${
                darkMode ? '' : ''
              } tw-font-space_mono tw-text-xl hover:tw-text-campfire-purple-light tw-text-campfire-blue tw-px-1 tw-underline tw-decoration-dashed`}
            >
              {title[0]}
            </button>
          )}
        </div>
      </Transition>
    </>
  );
};

export default D_Category_Menu_Items;
