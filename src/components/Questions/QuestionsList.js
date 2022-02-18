import QuestionCard from './QuestionCard';
import Styles from './QuestionsList.module.css';

const QuestionsList = (props) => {
    return(
        <section className={Styles.QuestionsListSection}>
            {props.questionsList.length==0 ? <div>No questions added yet &#128533;</div> : props.questionsList.map((qObject) => <QuestionCard crossClicked={props.crossClicked} key={qObject.id} qObject={qObject}/>)}
        </section>
    );
}

export default QuestionsList;