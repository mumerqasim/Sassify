import './App.css';
import NewQuestion from './components/New Question/NewQuestion';
import Output from './components/Output/Output';
import QuestionsList from './components/Questions/QuestionsList';
import { useState } from 'react';

function App() {
  const [questionsList, updateQuestionsList] = useState([]);

  const addQuestionHandler = (question) => {
      updateQuestionsList((state => {
        state.push(question);
        const arr = [...state];
        return arr;
      }));
  } 

  const crossClickedHandler = (e,key) => {
      const copylist = [...questionsList];
      const qIndex= copylist.findIndex((obj)=>obj.id===key);
      copylist.splice(qIndex,1);
      updateQuestionsList(copylist);
  }

  return (
    <div className="App">
      <NewQuestion addQuestion={addQuestionHandler}/>
      <QuestionsList questionsList={[...questionsList]} crossClicked={crossClickedHandler}/>
      <Output questionsList={questionsList}/>
    </div>
  );
}

export default App;