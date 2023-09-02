// Category
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
// components
import D_SubCategory from './D_SubCategory';
// redux hooks
import { useAppDispatch } from '../../redux/reduxHooks.ts';
import { menuCategoryRoute } from '../../redux/slices/dashboardSlice.ts';
// hooks
import Transition from '../../hooks/useTransition';

const D_Category = ({i, category}) => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const dispatch = useAppDispatch();

  const title = category.category;
  const subs = category.subCategories;

  function setCategory(route) {
    dispatch(menuCategoryRoute(route))
  };

  return (
    <div key={i} className={`${darkMode ? '[&>*]:tw-bg-[#525252] tw-text-campfire-blue' : '[&>*]:tw-bg-campfire-neutral-300'} 
    tw-w-full tw-h-full tw-flex tw-flex-col tw-p-2`}>
      <article className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} tw-py-2 tw-h-full`}>
        <Transition>
          <h4 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} tw-border-campfire-purple-light
          tw-border-b tw-text-xl tw-h-[36px] tw-w-full tw-pl-2 tw-mb-4 tw-font-space_mono`}>
           <button className="tw-font-space_mono" onClick={() => setCategory(title[1])}>
            Category:&nbsp;
              <span className={`${darkMode ? 'tw-bg-campfire-neutral-500' : 'tw-bg-campfire-neutral-100'} hover:tw-text-campfire-purple-light tw-text-campfire-blue tw-px-2`}>{title[0] !== undefined && title[0]}
              </span>
            </button>
          </h4>
        </Transition>
        <Transition>
          <h5 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} 
          tw-text-lg tw-font-space_mono tw-px-2`}>
            Subcategories (Optional):
          </h5>
        </Transition>
        {
          subs !== undefined ? Object.entries(subs).map((sub, i) => {
            return (
              <section key={i} className='tw-px-4'>
                 <D_SubCategory subCategory={sub}/>
              </section>
            )
          }) :
          <div/>
        }
      </article>
    </div>
  )
}

export default D_Category
