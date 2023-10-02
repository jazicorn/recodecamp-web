// Component Title: Dashboard Editor
/** React Hooks */
import { useContext, useState, useEffect, useCallback } from 'react';
/** React Redux */
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks.ts';
import type { RootState } from '../../../redux/store.ts';
import { menuQuestion, menuPoints, menuConsoleMessage } from '../../../redux/slices/dashboardSlice.ts';
/** React Query */
import { useQuery } from "@tanstack/react-query";
/** Custom Hooks */
import { ThemeContext } from '../../../context/ThemeContext';
import { Transition2 } from '../../../hooks/useTransition';
import useWindowSize from '../../../hooks/useWindowSize';
/** Custom State Components*/
//import ErrorDashboard from '../../dashboard/error';
//import {LoadingDashboardMD} from '../../dashboard/loading';
/** Notifications */
import { notifications } from '@mantine/notifications';
import { IconX, IconCheck } from '@tabler/icons-react';
/** Codemirror */
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from 'codemirror';

/**CodeMirror Languages */
//import lightTheme from '../../../styles/style.codemirror.light';
//import darkTheme from '../../../styles/style.codemirror.dark';
//const extensions = [ javascript({ jsx: true })];
import { _LANGUAGES_CODE_MIRROR,  _LANGUAGES_RAPID_API } from '../../../utils/constants';
//import { dracula } from '@uiw/codemirror-theme-dracula';
import { materialDark } from '@uiw/codemirror-theme-material';
import { githubLight } from '@uiw/codemirror-theme-github'
//import { quietlight } from '@uiw/codemirror-theme-quietlight';
//import { xcodeLight, xcodeLightInit, xcodeDark, xcodeDarkInit  } from '@uiw/codemirror-theme-xcode';


/** API url | Custom env mandatory to begin with VITE  
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL;
const consoleURL = import.meta.env.VITE_RAPIDAPI_KEY;

const D_Editor = () => {
  /** Custom Hooks */
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  
  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();
  
  /** Update User Points */
  const getMenuPoints = useAppSelector((state:RootState) => state?.dashboard?.points);

  const setPoints = useCallback((points: number) => {
    dispatch(menuPoints(points))
  },[dispatch]);

  /** Retrieve Category Route From Redux State */
  const getMenuRoute = useAppSelector((state:RootState) => state?.dashboard?.categoryRoute);
  const getMenuLanguage = useAppSelector((state:RootState) => state?.dashboard?.language);

  /**Get question url */
  let url;
  if(import.meta.env.PROD) {
    url = `${baseURL}/${getMenuLanguage}/${getMenuRoute}`
  } else {
    url = `/api/${getMenuLanguage}/${getMenuRoute}`
  }

  /** Retrieve Category Based Question */
  const getQuestion = useCallback(async (url) => {
    /** Retrieve Question from API */
   try {
      const result = await fetch(url, {
          method: 'GET',
          headers: {
              'Accept' : 'application/json',
              'Content-Type': 'application/json',
          },
        }
      );
      const resJSON = await result.json();
      //console.log("resjson", resJSON)
      return resJSON;
    } catch(error) {
      console.log(error);
    }
  },[]);

  /** Generate Question */
  const { isSuccess, data } = useQuery({ 
    queryKey: ['questionData', url], 
    queryFn: () => getQuestion(url),
    refetchOnWindowFocus: false,
    staleTime: 100 * (60 * 1000),
    cacheTime: 100 * (60 * 1000),
  });

  /** Save Question to Redux Store */
  useEffect(() => {
    if(data !== undefined) {
      dispatch(menuQuestion(data.data));
    }
  }, [dispatch, data]);

  /** Retrieve Menu Question From Redux State */
  const getMenuQuestion = useAppSelector((state:RootState) => state?.dashboard?.question);
  
  /** Set Editor Boilerplate */
  const getMenuQuestionBoilerplate = () => {
    const newLines = "\n".repeat(4);
    if( getMenuQuestion._QUESTION_BOILERPLATE === undefined) {
      return `${newLines}`
    } else {
      return  `${getMenuQuestion._QUESTION_BOILERPLATE}`
    }
  };

  const code = getMenuQuestionBoilerplate();

  /**Set User Editor Code */
  const [editor, setEditor] = useState();

  useEffect(() => {
    setEditor(code);
  },[code]);

  const onChange = useCallback((value) => {
    setEditor(value);
  }, []);

  /** Compile and Execute Code */

  // set message to state to render to console component
  const [consoleMessage, setConsoleMessage ] = useState();

  const consoleTest = useCallback( async (language_id, sourceInput, userInput) => {
    try {
      const response = await fetch(
        "https://judge0-ce.p.rapidapi.com/submissions",
        {
          method: "POST",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": consoleURL, // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
            "content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            source_code: sourceInput,
            stdin: userInput, 
            language_id: language_id,
          }),
        }
      );
      setConsoleMessage("Submission Created ...\n");
      const jsonResponse = await response.json();
      let jsonGetSolution = {
        status: { description: "Queue" },
        stderr: null,
        compile_output: null,
      };
      while (
        jsonGetSolution.status.description !== "Accepted" &&
        jsonGetSolution.stderr == null &&
        jsonGetSolution.compile_output == null
      ) {
        setConsoleMessage(`\nCreating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`);
        if (jsonResponse.token) {
          const url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
          const getSolution = await fetch(url, {
            method: "GET",
            headers: {
              "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
              "x-rapidapi-key": consoleURL, // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
              "content-type": "application/json",
            },
          });
          jsonGetSolution = await getSolution.json();
        }
      }
      if (jsonGetSolution.stdout) {
        const output = atob(jsonGetSolution.stdout);
        setConsoleMessage(`Results...\n---\n${output}\n---\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`);
        console.log("🥳 Compiled Successfully");
        setTimeout(() => {
          // Success Notification
          notifications.show({
            id: 'correct',
            withCloseButton: true,
            autoClose: 2000,
            title: "Answer Correct",
            message: '',
            color: 'green',
            icon: <IconCheck />,
            className: 'my-notification-class',
            style: { backgroundColor: 'white' },
            sx: { backgroundColor: 'green' },
            loading: false,
          });
        }, "1000");
      } else if (jsonGetSolution.stderr) {
        const error = atob(jsonGetSolution.stderr);
        setConsoleMessage(`\n Error :${error}`);
      } else {
        const compilation_error = atob(jsonGetSolution.compile_output);
        setConsoleMessage(`\n Error :${compilation_error}`);
      }
    } catch (e) {
      console.log(e)
    }
  },[]);
  
  /** Submit Code & Notify if Correct or Incorrect */
  const onSubmission = useCallback(async (e) => {
    e.preventDefault();

    const userCode = editor.replace(/\s+/g, '');
    const resultsStrip = getMenuQuestion._QUESTION_RESULT[1].answer.replace(/\s+/g, '');
    try {
      if( userCode === resultsStrip ) {
        const languageId = _LANGUAGES_RAPID_API[getMenuLanguage.toLowerCase()];
        consoleTest(languageId, editor, '');
        setPoints(getMenuPoints + getMenuQuestion._QUESTION_POINTS);
      }
    } catch (e) {
      // Failure Notification
      notifications.show({
        id: 'incorrect',
        withCloseButton: true,
        autoClose: 2000,
        title: "Answer Incorrect",
        message: '',
        color: 'red',
        icon: <IconX />,
        className: 'my-notification-class',
        style: { backgroundColor: 'white' },
        sx: { backgroundColor: 'red' },
        loading: false,
      });
    }
  }, [editor, getMenuQuestion._QUESTION_RESULT, getMenuQuestion._QUESTION_POINTS, getMenuLanguage, consoleTest, setPoints, getMenuPoints]);

  useEffect(() => {
    dispatch(menuConsoleMessage(consoleMessage));
  },[consoleMessage, dispatch]);

  /**Set Editor Language */
  const editorLanguage = _LANGUAGES_CODE_MIRROR[getMenuLanguage.toLowerCase()];
  //console.log(editorLanguage);

  const extensions = [EditorView.lineWrapping, editorLanguage];

  /** Render if Successful */
  if (isSuccess) return (
    <div className={`${darkMode ? '' : ''} tw-text-campfire-blue tw-flex tw-flex-col tw-h-full tw-p-2`}>
     <div className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 'tw-bg-campfire-neutral-300 tw-opacity-70 '} 
      tw-w-full tw-h-full tw-flex tw-flex-col tw-items-between`}>
        <Transition2>
          <header className={`${darkMode ? '' : ''} 
            tw-flex tw-flex-row tw-justify-between tw-content-center tw-pb-2`}>
            <h5 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} tw-border-campfire-purple-light
            tw-border-b tw-border-r tw-text-2xl tw-h-[36px] tw-w-5/6 tw-pl-2`}>
              Editor
            </h5>
            <button 
              className={`${darkMode ? 'hover:tw-bg-campfire-neutral-500' : 'hover:tw-bg-campfire-neutral-100'} tw-border-campfire-purple-light 
              tw-border-b tw-h-[36px] tw-font-gro tw-px-2 tw-w-1/6 hover:tw-text-campfire-purple-light`}
              onClick={() => setEditor(code)}
            >
              Reset
            </button>
          </header>
        </Transition2>
        <Transition2>
          {code  === undefined ?
            "loading"
            :
            <div className={`${darkMode ? '' : ''} tw-flex tw-flex-col tw-h-full`}>
            <CodeMirror
              value={editor}
              height={isMobile ? "250px" : "300px"}
              maxHeight="100%"
              theme={darkMode ? materialDark : githubLight }
              extensions={extensions}
              onChange={onChange}
            />
          </div>
          }
        </Transition2>
        <Transition2>
          <div className={`${darkMode ? '' : ''} tw-flex tw-flex-row tw-justify-between tw-content-center tw-h-[36px]`}>
            <button
              onClick={(e) => onSubmission(e)}
              className={`${darkMode ? 'hover:tw-bg-campfire-neutral-500' : 'hover:tw-bg-campfire-neutral-100'} tw-border-campfire-purple-light tw-border-t tw-font-gro tw-w-full tw-h-full hover:tw-text-campfire-purple-light hover:tw-border-b`}
            >
              Submit
            </button>
          </div>
        </Transition2>
      </div>
    </div>
  )
}

export default D_Editor