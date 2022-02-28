import Styles from './QuestionCard.module.css';

const QuestionCard = (props) => {
    return(
        <div className={Styles.QCardContainer}>
            <div className={Styles.Cross} onClick={(e)=>props.crossClicked(e,props.qObject.id)}><span>x</span></div>
            {props.qObject.questionCode ? <div className={Styles.CardGroup}>
                <label htmlFor='qcode'>Question Code:</label>
                <input type="text" id='qcode' defaultValue={props.qObject.questionCode} readOnly/>
            </div>:null
            }
            <div className={Styles.CardGroup}>
               <label htmlFor='qtype'>Question Type:</label>
               <input type="text" id='qtype' defaultValue={props.qObject.questionType} readOnly/>
            </div>
            {props.qObject.answerOptions ? <div className={Styles.CardGroup}>
                <label htmlFor='aoptions'>Answer Options:</label>
                <input type="text" id='aoptions' defaultValue={props.qObject.answerOptions} readOnly/>
            </div> : null
            }
            {props.qObject.subQuestions ? <div className={Styles.CardGroup}>
                <label htmlFor='subquestion'>Sub Questions:</label>
                <input type="text" id='subquestions' defaultValue={props.qObject.subQuestions} readOnly/>
            </div> : null
            }
            {props.qObject.skipLogic ? <div className={Styles.CardGroup}>
                <label htmlFor='slogic'>Skip Logic:</label>
                <input type="text" id='slogic' defaultValue={props.qObject.skipLogic} readOnly/>
             </div> : null
            }
            {props.qObject.otherCode ? <div className={Styles.CardGroup}>
                <label htmlFor='slogic'>Other Code:</label>
                <input type="text" id='slogic' defaultValue={props.qObject.otherCode} readOnly/>
             </div> : null
            }
            {props.qObject.exclusiveOption ? <div className={Styles.CardGroup}>
                <label htmlFor='slogic'>Exclusive:</label>
                <input type="text" id='slogic' defaultValue={props.qObject.exclusiveOption} readOnly/>
             </div> : null
            }
            {props.qObject.minMax ? <div className={Styles.CardGroup}>
                <label htmlFor='slogic'>Min,Max:</label>
                <input type="text" id='slogic' defaultValue={props.qObject.minMax} readOnly/>
             </div> : null
            }
            {props.qObject.oldLogic ? <div className={Styles.CardGroup}>
                <label htmlFor='slogic'>Old Logic:</label>
                <input type="text" id='slogic' defaultValue={props.qObject.oldLogic} readOnly/>
             </div> : null
            }
            {props.qObject.newLogic ? <div className={Styles.CardGroup}>
                <label htmlFor='slogic'>New Logic:</label>
                <input type="text" id='slogic' defaultValue={props.qObject.newLogic} readOnly/>
             </div> : null
            }
            {props.qObject.changeDate ? <div className={Styles.CardGroup}>
                <label htmlFor='slogic'>Change Date:</label>
                <input type="text" id='slogic' defaultValue={props.qObject.changeDate} readOnly/>
             </div> : null
            }
        </div>
    );
}

export default QuestionCard;