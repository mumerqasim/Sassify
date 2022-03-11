import './App.css';
import NewQuestion from './components/New Question/NewQuestion';
import EditQuestion from './components/EditQuestion/EditQuestion'
import Output from './components/Output/Output';
import QuestionsList from './components/Questions/QuestionsList';
import Header from './components/UI/Header';
import { useState } from 'react';

function App() {
  const [questionsList, updateQuestionsList] = useState([]);
  const [editModeQ, updateEditmodeQ] = useState(null);
  const [editMode, updateEditMode]=useState(false);
  const addQuestionHandler = (question) => {
      updateQuestionsList((state => {
        state.push(question);
        const arr = [...state];
        return arr;
      }));
  }

  const saveQuestionHandler = (question) => {
    updateQuestionsList((state => {
      state[question.index]=question;
      delete state[question.index].index;
      const arr = [...state];
      return arr;
    }));  
    updateEditMode(!editMode);
    updateEditmodeQ(null);
  }

  const crossClickedHandler = (e,key) => {
      const copylist = [...questionsList];
      const qIndex= copylist.findIndex((obj)=>obj.id===key);
      copylist.splice(qIndex,1);
      updateQuestionsList(copylist);
  }

  const editClickedHandler = (e,key) => {
    const copylist = [...questionsList];
    const qIndex= copylist.findIndex((obj)=>obj.id===key);
    console.log(key,qIndex);
    updateEditMode(!editMode);
    copylist[qIndex].index=qIndex;
    updateEditmodeQ(copylist[qIndex]);
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


  console.log('rerendered');
  return (
    <div className="App">
      <Header progressButton={questionsList.length>0} buttonClicked={buttonClickedHandler} restoreButton={!(localStorage.getItem("sascode") === null)}/>
      {editMode ? <EditQuestion addQuestion={saveQuestionHandler} editModeQ={editModeQ}/> : <NewQuestion addQuestion={addQuestionHandler} editModeQ={editModeQ}/>}
      <QuestionsList editMode={editMode} questionsList={[...questionsList]} crossClicked={crossClickedHandler} editClicked={editClickedHandler}/>
      <Output questionsList={questionsList}/>
    </div>
  );
}

export default App;