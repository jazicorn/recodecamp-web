import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import useWindowSize from "../hooks/use-window-size";
import Header from "../components/Header";
import { ReactComponent as Plane } from "../assets/icons/homepage/airplane-svgrepo-com.svg";
import { ReactComponent as Medal } from "../assets/icons/homepage/medal-svgrepo-com.svg";
import { ReactComponent as Student } from "../assets/drawings/undraw/undraw_remotely_-2-j6y.svg";
import { ReactComponent as Progress } from "../assets/drawings/undraw/undraw_progress_tracking_re_ulfg.svg";
import { ReactComponent as Javascript } from "../assets/drawings/undraw/undraw_programming_re_kg9v.svg";
import { ReactComponent as Customize } from "../assets/drawings/undraw/undraw_create_re_57a3.svg";

function App() {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();

  return (
    <div className="tw-dark tw-font-mono tw-h-screen tw-w-full tw-flex tw-flex-col tw-place-items-center">
      {/** Navigation */}
      <Header />
      {/** Banner */}
      <section
        className={`bg ${
          darkMode
            ? "tw-bg-campfire-gray-dark tw-text-campfire-blue-light"
            : "tw-bg-campfire-blue-light"
        } tw-flex tw-flex-col tw-place-items-center tw-place-content-start tw-w-screen`}
      >
        {/** Stock Picture */}
        <div className="tw-flex tw-flex-col">
          <Student style={{ height: 200, width: 200, padding: 0, margin: 0 }} />
        </div>
        {/** Welcome Statement */}
        <div className="tw-w-full tw-flex tw-flex-col tw-place-content-center tw-place-items-center">
          {isMobile && (
            <div className="tw-flex tw-flex-col tw-h-full">
              <h1 className="tw-text-2xl tw-text-center tw-flex tw-flex-row tw-place-content-center">
                <span className="tw-pl-3 tw-pr-2">Re-code Makes Perfect</span>
                <Medal style={{ height: 30, width: 25 }} />
              </h1>
              <p
                className={`${
                  darkMode
                    ? "tw-text-campfire-blue "
                    : "tw-text-campfire-gray-bold"
                } tw-text-base tw-text-center !dark:tw-text-campfire-blue`}
              >
                Practice leads to understanding...
              </p>
              <p className="tw-text-sm tw-flex tw-flex-col tw-place-items-center">
                <button className="tw-w-32 tw-m-2 tw-p-2 tw-font-mono tw-border tw-border-campfire-blue tw-rounded">
                  Get Started
                </button>
              </p>
            </div>
          )}
          {isDesktopMDLG && (
            <div className="tw-flex tw-flex-col">
              <h1 className="tw-text-5xl tw-flex tw-flex-row tw-place-content-center tw-items-end">
                <span className="tw-pl-3 tw-pr-2">Re-Code Makes Perfect</span>
                <Medal style={{ height: 40, width: 40 }} />
              </h1>
              <p
                className={`${
                  darkMode
                    ? "tw-text-campfire-blue "
                    : "tw-text-campfire-gray-bold"
                } tw-text-lg tw-text-center !dark:tw-text-campfire-blue`}
              >
                Practice leads to understanding...
              </p>
              <Link
                to={`/learn`}
                className="tw-text-base tw-font-mono tw-w-42 tw-m-2 tw-py-1 tw-px-2 tw-flex tw-flex-row tw-place-self-center hover:tw-bg-campfire-gray tw-border-b hover:tw-border-none tw-border-campfire-blue tw-rounded-t-xl hover:tw-rounded-b-xl"
              >
                <span className="tw-pr-2">Get Started</span>
                <Plane style={{ height: 25, width: 25 }} />
              </Link>
            </div>
          )}
          {isDesktopXL && (
            <div className="tw-flex tw-flex-col">
              <h1 className="tw-text-6xl tw-flex tw-flex-row tw-place-content-center tw-items-end">
                <span className="tw-pl-3 tw-pr-2">
                  <span className="tw-italic">Re-code</span> Makes Perfect
                </span>
                <Medal style={{ height: 45, width: 55 }} />
              </h1>
              <p
                className={`${
                  darkMode
                    ? "tw-text-campfire-blue "
                    : "tw-text-campfire-gray-bold"
                } tw-text-xl tw-text-center !dark:tw-text-campfire-blue`}
              >
                Practice leads to understanding...
              </p>
              <Link
                to={`/learn`}
                className="tw-text-base tw-font-mono tw-w-42 tw-m-2 tw-py-1 tw-px-2 tw-flex tw-flex-row tw-place-self-center hover:tw-bg-campfire-gray tw-border-b hover:tw-border-none tw-border-campfire-blue tw-rounded-t-xl hover:tw-rounded-b-xl"
              >
                <span className="tw-pr-2">Get Started</span>
                <Plane style={{ height: 25, width: 25 }} />
              </Link>
            </div>
          )}
        </div>
      </section>
      {/**More Information */}
      <section
        className={`tw-grow bg ${
          darkMode
            ? "tw-bg-campfire-gray-light [&_h3]:tw-text-campfire-blue-darker child:tw-text-campfire-blue child:tw-border-x child:tw-border-campfire-blue-dark child:tw-rounded"
            : "tw-bg-white h3:tw-text-campfire-blue child:tw-text-campfire-gray-darker child:tw-border-x child:tw-border-campfire-blue child:tw-rounded"
        } 
      tw-flex tw-flex-col tw-place-items-center tw-space-y-5 tw-p-10
      md:tw-space-y-0 md:tw-flex-row md:tw-space-x-10  md:tw-w-full md:tw-px-32 [&>*]:tw-h-full 
      [&>*]:tw-place-items-center [&>*]:tw-w-1/3 [&>*]:tw-flex [&>*]:flex-col
      [&>*]:tw-text-center [&_h3]:tw-text-xl [&>*]:tw-text-base [&>*]:tw-min-h-[228px] [&>*]:tw-min-w-[288px]`}
      >
        <div className={`${darkMode ? " " : ""} tw-flex tw-flex-col`}>
          <h3>Learn Javascript</h3>
          <Javascript
            style={{ height: 125, width: 125, padding: 0, margin: 0 }}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sollicitudin erat elit, sed sodales enim posuere sit
            amet. In hendrerit dignissim vestibulum.{" "}
          </p>
        </div>
        <div className="tw-flex tw-flex-col">
          <h3>Track Your Progress</h3>
          <Progress
            style={{ height: 125, width: 125, padding: 0, margin: 0 }}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sollicitudin erat elit, sed sodales enim posuere sit
            amet. In hendrerit dignissim vestibulum.{" "}
          </p>
        </div>
        <div className="tw-flex tw-flex-col">
          <h3>Customize Questions</h3>
          <Customize
            style={{ height: 125, width: 125, padding: 0, margin: 0 }}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sollicitudin erat elit, sed sodales enim posuere sit
            amet. In hendrerit dignissim vestibulum.{" "}
          </p>
        </div>
      </section>
      {/**Footer */}
      <footer className="tw-bg-campfire-gray tw-flex tw-flex-col tw-place-items-center tw-w-full tw-h-[28px]">
        <p className="">created by Jazicorn</p>
      </footer>
    </div>
  );
}

export default App;
