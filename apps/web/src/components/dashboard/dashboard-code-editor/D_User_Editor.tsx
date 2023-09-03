// Dashboard Menu
import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
// hooks
import useWindowSize from '../../../hooks/useWindowSize';
// codemirror
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import lightTheme from '../../../styles/style.codemirror.light';
import darkTheme from '../../../styles/style.codemirror.dark';

const extensions = [ javascript({ jsx: true })];

const D_User_Editor = () => {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const code = '\n\n\n\n';

  const [editor, setEditor] = useState();

  useEffect(() => {
    setEditor(code);
  },[code]);

  const onChange = React.useCallback((value) => {
    setEditor(value);
  }, []);

  return (
    <div className={`${darkMode ? '' : ''} tw-text-campfire-blue tw-flex tw-flex-col tw-h-full tw-p-2`}>
     <div className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 'tw-bg-campfire-neutral-300 tw-opacity-70 '} 
      tw-w-full tw-h-full tw-flex tw-flex-col tw-items-between`}>
          <header className={`${darkMode ? '' : ''} 
            tw-flex tw-flex-row tw-justify-between tw-content-center tw-pb-2`}>
            <h5 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} tw-border-campfire-purple-light
            tw-border-b tw-border-r tw-text-2xl tw-h-[36px] tw-w-5/6 tw-pl-2`}>
              Editor
            </h5>
            <button 
              className={`${darkMode ? '' : ''} tw-border-campfire-purple-light
              tw-border-b tw-h-[36px] tw-font-gro tw-px-2 tw-w-1/6`}
              onClick={() => setEditor(code)}
            >
              Reset
            </button>
          </header>
          {code  === undefined ?
            "loading"
            :
            <div className={`${darkMode ? '' : ''} tw-flex tw-flex-col tw-h-full`}>
            <CodeMirror
              value={editor}
              height={isMobile ? "250px" : "300px"}
              maxHeight="100%"
              theme={darkMode ? darkTheme : lightTheme}
              extensions={extensions}
              onChange={onChange}
            />
          </div>
          }
          <div className={`${darkMode ? '' : ''} tw-flex tw-flex-row tw-justify-between tw-content-center`}>
            <button 
              className={`${darkMode ? '' : ''} tw-border-campfire-purple-light
              tw-border-t tw-h-[36px] tw-font-gro tw-w-full`}
            >
              Compile & Execute
            </button>
          </div>
      </div>
    </div>
  )
}

export default D_User_Editor