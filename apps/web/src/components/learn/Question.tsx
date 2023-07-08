//import { useState, useEffect } from "react";
//import { useForm, SubmitHandler } from "react-hook-form";

// const getQuestion = async function (id: string) {
//   const res = await fetch(`/api/str/q/${id}`);
//   const resJSON = res.json();
//   return await resJSON;
// };

// type Inputs = {
//   answer: number;
// };

const Question = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // const [question, setQuestion] = useState(getInitialQuestion());

  // function getInitialQuestion() {
  //   const temp = localStorage.getItem("question");
  //   if (temp !== null) {
  //     const savedQuestion = JSON.parse(temp);
  //     return savedQuestion || "";
  //   } else {
  //     return "";
  //   }
  // }

  // useEffect(() => {
  //   if (question === null || question === "") {
  //     newQuestion();
  //   }
  //   const temp = JSON.stringify(question);
  //   localStorage.setItem("question", temp);
  // }, [question]);

  // const newQuestion = () => {
  //   getQuestion().then((res) => setQuestion(res));
  // };

  return (
    <div>
      {/* <button onClick={() => newQuestion()} className="">
        Click: New Question
      </button>
      <p>Javascript Exercise: {question.title}</p>
      <div className="my-2 p-4 bg-campfire-zinc flex flex-row">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>
            <input {...register("answer", { required: true })} />
            <input type="submit" />
          </p>
          <p>{errors.answer && <span>This field is required</span>}</p>
        </form>
      </div> */}
      <h1>Question Goes Here</h1>
    </div>
  );
};

export default Question;
