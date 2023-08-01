// Category
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
// hooks
//import useWindowSize from '../hooks/useWindowSize';
// components
import D_SubCategory from './D_SubCategory';

const D_Category = ({category}) => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  // const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();

  const title = category.category;
  const subs = category.subCategories;

  return (
    <div className={`${darkMode ? '[&>*]:tw-bg-[#525252] tw-text-campfire-blue' : '[&>*]:tw-bg-campfire-neutral-300'} 
    tw-w-full tw-h-full tw-flex tw-flex-col tw-p-2`}>
      <article className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} tw-py-2 tw-px-4 tw-h-full`}>
        <h4 className="tw-text-[22px] tw-underline">{title !== undefined && title}</h4>
        {
          subs !== undefined ? Object.entries(subs).map((sub, i) => {
            return (
              <section className=''>
                <D_SubCategory key={i} subCategory={sub}/>
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
