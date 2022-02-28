import './App.css';
import NewQuestion from './components/New Question/NewQuestion';
import Output from './components/Output/Output';
import QuestionsList from './components/Questions/QuestionsList';
import Header from './components/UI/Header';
import { useState } from 'react';

function App() {
  const [questionsList, updateQuestionsList] = useState([]);
  const [editModeQ, updateEditmodeQ] = useState(null);
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

  const buttonClickedHandler = (e) => {
    if(e.target.id==='saveprogress'){
      localStorage.setItem('sascode', JSON.stringify(questionsList));
    }
    if(e.target.id==='restore'){
      let retrieved = JSON.parse(localStorage.getItem('sascode'));
      updateQuestionsList(retrieved);
    }
  }

  return (
    <div className="App">
      <Header progressButton={questionsList.length>0} buttonClicked={buttonClickedHandler} restoreButton={!(localStorage.getItem("sascode") === null)}/>
      <NewQuestion addQuestion={addQuestionHandler}/>
      <QuestionsList questionsList={[...questionsList]} crossClicked={crossClickedHandler}/>
      <Output questionsList={questionsList}/>
    </div>
  );
}

export default App;