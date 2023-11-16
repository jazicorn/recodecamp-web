import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
/**Components */
/**Hooks */
import Transition from '../hooks/useTransition';
import useWindowSize from '../hooks/useWindowSize';

const Layout_H_Banner = () => {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  if (isMobile) {
    return <div />;
  }

  return (
    <>
    <div/>
    </>
  );
};

export default Layout_H_Banner;
