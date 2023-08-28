// Category
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
// components
import D_SubCategory from './D_SubCategory';
// redux hooks
import { useAppDispatch } from '../../redux/reduxHooks.ts';
import { menuCategoryRoute } from '../../redux/slices/dashboardSlice.ts';

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
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} tw-py-2 tw-px-4 tw-h-full`}>
        <h4 className="tw-text-[22px] tw-underline">
          <button className="tw-font-mono" onClick={() => setCategory(title[1])}>{title[0] !== undefined && title[0]}</button>
        </h4>
        {
          subs !== undefined ? Object.entries(subs).map((sub, i) => {
            return (
              <section key={i} className=''>
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
