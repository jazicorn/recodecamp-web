// Dashboard Menu
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import lightTheme from '../../styles/style.codemirror.light';
import darkTheme from '../../styles/style.codemirror.dark';
//import { useAppSelector } from '../../redux/reduxHooks.ts';

const extensions = [ javascript({ jsx: true })];

const D_Editor = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const newLines = "\n".repeat(11);
  const code = `console.log('hello world!');${newLines}`;

  const [editor, setEditor] = useState(code);

  const onChange = React.useCallback((value) => {
    setEditor(value);
  }, []);

  //const getMenuQuestion = useAppSelector((state:RootState) => state?.dashboard?.question);

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
          <div className={`${darkMode ? '' : ''} tw-flex tw-flex-col tw-h-full`}>
          <CodeMirror
            value={editor}
            height="300px"
            maxHeight="100%"
            theme={darkMode ? darkTheme : lightTheme}
            extensions={extensions}
            onChange={onChange}
          />
          </div>
          <div className={`${darkMode ? '' : ''} tw-flex tw-flex-row tw-justify-between tw-content-center`}>
            <button 
              className={`${darkMode ? '' : ''} tw-border-campfire-purple-light
              tw-border-t tw-h-[36px] tw-font-gro tw-w-full`}
            >
              Submit Answer
            </button>
          </div>
      </div>
    </div>
  )
}

export default D_Editor