// error screen
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const L_Error = (error) => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div className={`${darkMode ? 'tw-bg-neutral-700/50' : 'tw-bg-neutral-200/50'} tw-w-full tw-h-full`}>{error}</div>
  );
};

export default L_Error;
