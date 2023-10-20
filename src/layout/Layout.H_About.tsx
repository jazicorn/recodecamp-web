import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
/**Hooks */
import Transition from '../hooks/useTransition';
//import useWindowSize from '../hooks/useWindowSize';

const H_About = () => {
  //const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const [subject, setSubject] = useState('Practice');

  function getSubject(useSubject) {
    setSubject(useSubject);
  }

  return (
    <>
      <div
        className={`${
          darkMode
            ? ' tw-border-neutral-500 custom-bg-waves-neutral-darkest-inverse  tw-bg-blend-overlay tw-opacity-90 tw-text-campfire-neutral-200'
            : 'tw-text-campfire-blue tw-border-neutral-800 custom-bg-waves-neutral-lighest tw-bg-blend-overlay tw-opacity-80'
        } tw-border-t tw-basis-1/12 tw-text-2xl tw-h-full tw-w-full tw-text-center tw-flex tw-flex-row tw-items-center tw-pl-2`}
      >
        {/* <Transition>Features:</Transition> */}
      </div>
      <div
        className={`${
          darkMode
            ? 'tw-border-neutral-500 tw-text-campfire-purple-light tw-bg-campfire-neutral-700'
            : 'tw-text-campfire-purple-300 tw-border-neutral-800 tw-bg-campfire-blue-100 '
        } tw-border-t tw-basis-1/12 tw-text-2xl tw-h-full tw-w-full tw-text-center tw-flex tw-flex-row tw-items-center tw-pl-2`}
      >
        <Transition>About:</Transition>
      </div>
      <ul
        className={`${
          darkMode
            ? '[&>li]:tw-bg-neutral-700/80 tw-border-neutral-500 tw-text-neutral-300'
            : '[&>li]:tw-bg-neutral-100/80 tw-border-neutral-800'
        }
        tw-border-y tw-basis-1/12 tw-flex tw-flex-row tw-w-full tw-justify-between
        [&>li]:tw-basis-1/3 [&>li]:tw-px-2 [&>li]:tw-pt-0.5`}
      >
        <li>
          <Transition>
            <button
              onClick={() => getSubject('Practice')}
              className={`${darkMode ? '' : ''}    
                [&>span]:focus:tw-text-campfire-blue tw-font-space_mono_bold`}
            >
              1.
              <span
                className={`${
                  darkMode ? '' : ''
                } hover:tw-text-campfire-blue  tw-decoration-campfire-purple-light tw-underline 
                tw-decoration-solid tw-decoration-1 tw-underline-offset-2`}
              >
                Practice
              </span>
            </button>
          </Transition>
        </li>
        <li className={`${darkMode ? 'tw-border-neutral-500' : 'tw-border-neutral-800'} tw-border-x `}>
          <Transition>
            <button
              onClick={() => getSubject('References')}
              className={`${darkMode ? '' : ''} [&>span]:focus:tw-text-campfire-blue tw-font-space_mono_bold`}
            >
              2.
              <span
                className={`${
                  darkMode ? '' : ''
                } hover:tw-text-campfire-blue tw-decoration-campfire-purple-light tw-underline 
                tw-decoration-solid tw-decoration-1 tw-underline-offset-2`}
              >
                References
              </span>
            </button>
          </Transition>
        </li>
        <li className={`${darkMode ? '' : ''} `}>
          <Transition>
            <button
              onClick={() => getSubject('Languages')}
              className={`${darkMode ? '' : ''} 
                [&>span]:focus:tw-text-campfire-blue tw-font-space_mono_bold`}
            >
              3.
              <span
                className={`${
                  darkMode ? '' : ''
                } hover:tw-text-campfire-blue tw-decoration-campfire-purple-light tw-underline 
                    tw-decoration-solid tw-decoration-1 tw-underline-offset-2`}
              >
                Languages
              </span>
            </button>
          </Transition>
        </li>
      </ul>
      <div
        className={`${
          darkMode
            ? 'tw-text-campfire-neutral-200 tw-bg-campfire-neutral-800/70'
            : 'tw-text-campfire-neutral-500 tw-bg-campfire-neutral-100/50 '
        } tw-basis-9/12 tw-text-2xl tw-h-full tw-w-full tw-text-center tw-flex tw-flex-row tw-items-start tw-pl-2 tw-overflow-y-auto
        [&>section]:tw-text-base [&>section]:tw-text-left [&>section]:tw-py-2
        [&>section>p]:tw-py-2`}
      >
        {subject === 'Practice' && (
          <section className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur ipsum nec elit consectetur,
              sed maximus ante efficitur. Quisque eu est non purus efficitur aliquam. Phasellus vitae porta mi. Aenean
              suscipit vestibulum augue. Nulla facilisi. Mauris mollis elit non fermentum feugiat. Integer sit amet
              vulputate metus. Nam luctus erat elit, ac egestas massa aliquam eget.{' '}
            </p>
            <p>
              Maecenas eu leo odio. Aliquam et interdum dolor, maximus faucibus nisi. Donec orci lectus, sagittis luctus
              faucibus sed, hendrerit id est. Aliquam euismod, odio at tristique dictum, magna urna tincidunt turpis,
              vel porta lorem risus id tellus. Integer aliquet dictum nibh at aliquam. Cras vitae convallis arcu, eget
              dictum nisl. Nullam quis viverra erat, at accumsan tortor. Morbi quis ultricies dolor, ac porttitor urna.
              Maecenas iaculis tempor magna, ut accumsan felis commodo nec. Aenean consectetur mi facilisis consectetur
              tempus.
            </p>
            <p>
              Duis placerat mollis orci a aliquam. Sed malesuada vehicula vulputate. Sed a nisl eu urna eleifend
              vulputate. Nullam pulvinar hendrerit enim quis porttitor. Etiam quis risus dolor. Curabitur id ante semper
              nulla maximus porttitor a id nisl. In egestas semper ante, et imperdiet diam luctus nec. Quisque fermentum
              maximus magna eu posuere. Quisque ut arcu quis diam maximus lacinia. Curabitur sit amet feugiat erat,
              vitae malesuada turpis. Integer eget dui facilisis, porta velit id, tristique orci. Proin vitae ex eu urna
              egestas euismod. Nunc lacinia porta ante quis dictum. Pellentesque pulvinar fringilla mauris sed semper.
            </p>
          </section>
        )}
        {subject === 'References' && (
          <section className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur ipsum nec elit consectetur,
              sed maximus ante efficitur. Quisque eu est non purus efficitur aliquam. Phasellus vitae porta mi. Aenean
              suscipit vestibulum augue. Nulla facilisi. Mauris mollis elit non fermentum feugiat. Integer sit amet
              vulputate metus. Nam luctus erat elit, ac egestas massa aliquam eget.{' '}
            </p>
            <p>
              Maecenas eu leo odio. Aliquam et interdum dolor, maximus faucibus nisi. Donec orci lectus, sagittis luctus
              faucibus sed, hendrerit id est. Aliquam euismod, odio at tristique dictum, magna urna tincidunt turpis,
              vel porta lorem risus id tellus. Integer aliquet dictum nibh at aliquam. Cras vitae convallis arcu, eget
              dictum nisl. Nullam quis viverra erat, at accumsan tortor. Morbi quis ultricies dolor, ac porttitor urna.
              Maecenas iaculis tempor magna, ut accumsan felis commodo nec. Aenean consectetur mi facilisis consectetur
              tempus.
            </p>
            <p>
              Duis placerat mollis orci a aliquam. Sed malesuada vehicula vulputate. Sed a nisl eu urna eleifend
              vulputate. Nullam pulvinar hendrerit enim quis porttitor. Etiam quis risus dolor. Curabitur id ante semper
              nulla maximus porttitor a id nisl. In egestas semper ante, et imperdiet diam luctus nec. Quisque fermentum
              maximus magna eu posuere. Quisque ut arcu quis diam maximus lacinia. Curabitur sit amet feugiat erat,
              vitae malesuada turpis. Integer eget dui facilisis, porta velit id, tristique orci. Proin vitae ex eu urna
              egestas euismod. Nunc lacinia porta ante quis dictum. Pellentesque pulvinar fringilla mauris sed semper.
            </p>
          </section>
        )}
        {subject === 'Languages' && (
          <section className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur ipsum nec elit consectetur,
              sed maximus ante efficitur. Quisque eu est non purus efficitur aliquam. Phasellus vitae porta mi. Aenean
              suscipit vestibulum augue. Nulla facilisi. Mauris mollis elit non fermentum feugiat. Integer sit amet
              vulputate metus. Nam luctus erat elit, ac egestas massa aliquam eget.{' '}
            </p>
            <p>
              Maecenas eu leo odio. Aliquam et interdum dolor, maximus faucibus nisi. Donec orci lectus, sagittis luctus
              faucibus sed, hendrerit id est. Aliquam euismod, odio at tristique dictum, magna urna tincidunt turpis,
              vel porta lorem risus id tellus. Integer aliquet dictum nibh at aliquam. Cras vitae convallis arcu, eget
              dictum nisl. Nullam quis viverra erat, at accumsan tortor. Morbi quis ultricies dolor, ac porttitor urna.
              Maecenas iaculis tempor magna, ut accumsan felis commodo nec. Aenean consectetur mi facilisis consectetur
              tempus.
            </p>
            <p>
              Duis placerat mollis orci a aliquam. Sed malesuada vehicula vulputate. Sed a nisl eu urna eleifend
              vulputate. Nullam pulvinar hendrerit enim quis porttitor. Etiam quis risus dolor. Curabitur id ante semper
              nulla maximus porttitor a id nisl. In egestas semper ante, et imperdiet diam luctus nec. Quisque fermentum
              maximus magna eu posuere. Quisque ut arcu quis diam maximus lacinia. Curabitur sit amet feugiat erat,
              vitae malesuada turpis. Integer eget dui facilisis, porta velit id, tristique orci. Proin vitae ex eu urna
              egestas euismod. Nunc lacinia porta ante quis dictum. Pellentesque pulvinar fringilla mauris sed semper.
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default H_About;
