import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList, editAnswer }) {
  return (
    <ul>
      {answersList.map((answerItem, i) => ( console.log(i),
        <AnswersItem 
          answerItem={answerItem} 
          editAnswer={editAnswer} 
          index={i} 
          key={i} 
          />
      ))}
    </ul>
  );
}
