import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import Question from "../components/learn/Question";

const Learn = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  return (
    <div className="dark font-mono h-screen w-full flex flex-col place-items-center">
      <Header />
      <div
        className={`bg ${
          darkMode ? "bg-black text-campfire-blue" : "bg-light"
        } grow h-full w-full flex flex-col place-content-center place-items-center`}
      >
        <h1>Learn</h1>
        <Question />
      </div>
    </div>
  );
};

export default Learn;
