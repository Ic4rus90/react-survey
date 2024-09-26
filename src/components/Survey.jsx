import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([]);

  const addAnswer = (form) => {
    /*
      By using the implemented syntax below instead of 
      setAnswers([...answers, form]), we ensure that we 
      are working with the latest state.
    */
    setAnswers(() => [...answers, form]);
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers}/>
      </section>
      <section className="survey__form"><Form addAnswer={addAnswer}/></section>
    </main>
  );
}

export default Survey;
