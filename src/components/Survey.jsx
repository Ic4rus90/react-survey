import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([]);
  const [editForm, setEditForm] = useState(null);

  const addAnswer = (form, index = null) => {
    /*
      By using the implemented syntax below instead of 
      setAnswers([...answers, form]), we ensure that we 
      are working with the latest state. 

      If an index is provided, create a new array with updated answers,
      with the same index as the answer previously held.
    */
    if (index !== null) {
      setAnswers((lastAnswers) => {
        const newAnswers = [...lastAnswers];
        newAnswers[index] = form;
        return newAnswers;
      }); 
      // Reset the edit form
      setEditForm(null); 
    } else {
    setAnswers(() => [...answers, form]);
    }
  };

  const editAnswer = (index) => {
    const answerToEdit = answers[index];
    // Verify that answer exists to avoid spreding undefined.
    if (answerToEdit) {
      setEditForm({ ...answerToEdit, index });
    } else {
      console.error(`No answer found at index ${index}`);
    }
  };
  

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} editAnswer={editAnswer}/>
      </section>
      <section className="survey__form"><Form addAnswer={addAnswer} editForm={editForm}/></section>
    </main>
  );
}

export default Survey;
