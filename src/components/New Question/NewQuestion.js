import React from 'react';
import { useState } from 'react';
import Styles from './NewQuestion.module.css';
import Radio from './Radio';
import TextInput from './TextInput';

const questionCategories = [
    {
        id: new Date().toISOString() + Math.random(),
        category:'radio/equation',
        label: 'Radio/Equation'
    },
    {
        id: new Date().toISOString() + Math.random(),
        category:'mcq',
        label: 'Multiple Choice'
    },
    {
        id: new Date().toISOString() + Math.random(),
        category:'sft',
        label: 'Short Free Text'
    },
    {
        id: new Date().toISOString() + Math.random(),
        category:'array',
        label: 'Array'
    },
    {
        id: new Date().toISOString() + Math.random(),
        category:'customcode',
        label: 'Custom Code'
    },
    {
        id: new Date().toISOString() + Math.random(),
        category:'midfieldchange',
        label: 'Midfield Change'
    }
];

const textInputs = [
    {
        id: new Date().toISOString() + Math.random(),
        category:'qcode',
        label:'Question Code:',
        placeholder: 'Enter the q-code',
        asterick:true
    },
    {
        id: new Date().toISOString() + Math.random(),
        category:'aoptions',
        label:'Answer Options:',
        placeholder: 'Enter the ans option(s)',
        asterick:true
    },
    {
        id: new Date().toISOString() + Math.random(),
        category:'slogic',
        label:'Skip Logic:',
        placeholder: 'Enter the Skip Logic',
        asterick:false
    },
    {
        id: new Date().toISOString() + Math.random(),
        category:'other',
        label:'Other Code:',
        placeholder: 'Enter the Other code',
        asterick:false
    }
]

const Question = (props) => {

    const [questionType,updateQuestionType] = useState('');
    const [questionCode, updateQuestionCode] = useState('');
    const [answerOptions, updateAnswerOptions] = useState('');
    const [subQuestions, updatesubQuestions] = useState('');
    const [skipLogic, updateSkipLogic] = useState('');
    const [otherCode, updateOtherCode] = useState('');
    const [customCode, updateCustomCode] = useState('');
    const [exclusiveOption, updateExclusiveOption] = useState('');
    const [minMax, updateminMax] = useState('');
    const [oldLogic, updateoldLogic] = useState('');
    const [newLogic, updatenewLogic] = useState('');
    const [changeDate, updatechangeDate] = useState('');

    let qcIndex = textInputs.findIndex(obj => obj.category==='qcode');
    if(qcIndex!=-1){
        textInputs[qcIndex].value=questionCode;
    }

    let aoIndex = textInputs.findIndex(obj => obj.category==='aoptions');
    if(aoIndex!=-1){
        textInputs[aoIndex].value=answerOptions;
    }

    let slIndex = textInputs.findIndex(obj => obj.category==='slogic');
    if(slIndex!=-1){
        textInputs[slIndex].value=skipLogic;
    }

    let exIndex = textInputs.findIndex(obj => obj.category==='exclusive');
    if(exIndex!=-1){
        textInputs[exIndex].value=exclusiveOption;
    }

    let otIndex = textInputs.findIndex(obj => obj.category==='other');
    if(otIndex!=-1){
        textInputs[otIndex].value=otherCode;
    }

    let sqIndex = textInputs.findIndex(obj => obj.category==='subquestions');
    if(sqIndex!=-1){
        textInputs[sqIndex].value=subQuestions;
    }

    let cusIndex = textInputs.findIndex(obj => obj.category==='custom');
    if(cusIndex!=-1){
        textInputs[cusIndex].value=customCode;
    }

    let minMaxIndex = textInputs.findIndex(obj => obj.category==='minMax');
    if(minMaxIndex!=-1){
        textInputs[minMaxIndex].value=minMax;
    }

    let oLIndex = textInputs.findIndex(obj => obj.category==='oldLogic');
    if(oLIndex!=-1){
        textInputs[oLIndex].value=oldLogic;
    }

    let nLIndex = textInputs.findIndex(obj => obj.category==='newLogic');
    if(nLIndex!=-1){
        textInputs[nLIndex].value=newLogic;
    }

    let cngIndex = textInputs.findIndex(obj => obj.category==='changeDate');
    if(cngIndex!=-1){
        textInputs[cngIndex].value=changeDate;
    }

    const radioChangeHandler = (e) => {
        if (e.target.value==="radio/equation"){
            exIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='exclusive'),1);
            sqIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='subquestions'),1);
            cusIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='custom'),1);
            minMaxIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='minMax'),1);
            oLIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='oldLogic'),1);
            nLIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='newLogic'),1);
            cngIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='changeDate'),1);

            if(qcIndex==-1){
                textInputs.push({
                    id: new Date().toISOString() + Math.random(),
                    category:'qcode',
                    label:'Question Code:',
                    placeholder: 'Enter the q-code',
                    asterick:true,
                    value:questionCode
                });
            }else{
                textInputs[qcIndex].asterick=true;
            }
            if(aoIndex==-1){
                textInputs.splice(1,0 ,{
                    id: new Date().toISOString() + Math.random(),
                    category:'aoptions',
                    label:'Answer Options:',
                    placeholder: 'Enter the ans option(s)',
                    asterick:true,
                    value:answerOptions
                })
            }
            if(slIndex==-1){
                textInputs.push(
                    {
                        id: new Date().toISOString() + Math.random(),
                        category:'slogic',
                        label:'Skip Logic:',
                        placeholder: 'Enter the Skip Logic',
                        asterick:false,
                        value:skipLogic
                    }
                );
            }
            if(otIndex==-1){
                textInputs.push(
                    {
                        id: new Date().toISOString() + Math.random(),
                        category:'other',
                        label:'Other Code:',
                        placeholder: 'Enter the Other code',
                        asterick:false,
                        value:otherCode
                    }
                );
            }
        }

        if (e.target.value==="mcq"){
            aoIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(aoIndex,1);
            cusIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='custom'),1);
            oLIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='oldLogic'),1);
            nLIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='newLogic'),1);
            cngIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='changeDate'),1);
            if(qcIndex==-1){
                textInputs.push({
                    id: new Date().toISOString() + Math.random(),
                    category:'qcode',
                    label:'Question Code:',
                    placeholder: 'Enter the q-code',
                    asterick:true,
                    value:questionCode
                });
            }else{
                textInputs[qcIndex].asterick=true;
            }
            if(slIndex==-1){
                textInputs.push(
                    {
                        id: new Date().toISOString() + Math.random(),
                        category:'slogic',
                        label:'Skip Logic:',
                        placeholder: 'Enter the Skip Logic',
                        asterick:false,
                        value:skipLogic
                    }
                );
            }
            if(otIndex==-1){
                textInputs.push(
                    {
                        id: new Date().toISOString() + Math.random(),
                        category:'other',
                        label:'Other Code:',
                        placeholder: 'Enter the Other code',
                        asterick:false,
                        value:otherCode
                    }
                );
            }
            if(sqIndex==-1){
                textInputs.splice(2,0,
                    {
                        id: new Date().toISOString() + Math.random(),
                        category:'subquestions',
                        label:'Sub-q Code(s):',
                        placeholder: 'Enter the sub-question code(s)',
                        asterick:true,
                        value:subQuestions
                    }
                );
            }
            if(exIndex==-1){
                textInputs.push({
                    id: new Date().toISOString() + Math.random(),
                    category:'exclusive',
                    label:'Exc. Option(s):',
                    placeholder: 'Enter the exclusive code(s)',
                    value:exclusiveOption,
                    asterick:false
                });
            }
            if(minMaxIndex==-1){
                textInputs.push(
                    {
                        id: new Date().toISOString() + Math.random(),
                        category:'minMax',
                        label:'Min,Max:',
                        placeholder: 'Enter the Min,Max choices',
                        asterick:false,
                        value:minMax
                    }
                );
            }
            let thesqIndex = textInputs.findIndex(obj => obj.category==='subquestions');
            if (thesqIndex!=2){
                let b = textInputs[thesqIndex];
                textInputs[thesqIndex] = textInputs[2];
                textInputs[2] = b;
            }
        }
        if(e.target.value==="sft"){
            cusIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='custom'),1);
            exIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='exclusive'),1);
            sqIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='subquestions'),1);
            aoIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='aoptions'),1);
            otIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='other'),1);
            minMaxIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='minMax'),1);
            oLIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='oldLogic'),1);
            nLIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='newLogic'),1);
            cngIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='changeDate'),1);
            if(qcIndex==-1){
                textInputs.push({
                    id: new Date().toISOString() + Math.random(),
                    category:'qcode',
                    label:'Question Code:',
                    placeholder: 'Enter the q-code',
                    asterick:true,
                    value:questionCode
                });
            }else{
                textInputs[qcIndex].asterick=true;
            }
            if(slIndex==-1){
                textInputs.push(
                    {
                        id: new Date().toISOString() + Math.random(),
                        category:'slogic',
                        label:'Skip Logic:',
                        placeholder: 'Enter the Skip Logic',
                        asterick:false,
                        value:skipLogic
                    }
                );
            }
        } 
        if(e.target.value==="customcode"){
            exIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='exclusive'),1);
            sqIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='subquestions'),1);
            aoIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='aoptions'),1);
            otIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='other'),1);
            slIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='slogic'),1);
            minMaxIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='minMax'),1);
            oLIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='oldLogic'),1);
            nLIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='newLogic'),1);
            cngIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='changeDate'),1);
            if(qcIndex==-1){
                textInputs.push({
                    id: new Date().toISOString() + Math.random(),
                    category:'qcode',
                    label:'Question Code:',
                    placeholder: 'Enter the q-code',
                    asterick:false,
                    value:questionCode
                });
            }else{
                textInputs[qcIndex].asterick=false;
            }

            if(cusIndex==-1){
                textInputs.push({
                    id: new Date().toISOString() + Math.random(),
                    category:'custom',
                    label:'Custom SAS Code:',
                    placeholder: 'Enter the code you want to include',
                    value:exclusiveOption,
                    asterick:true
                });
            }
        } 
        if(e.target.value==="array"){
            exIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='exclusive'),1);
            otIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='other'),1);
            cusIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='custom'),1);
            minMaxIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='minMax'),1);
            oLIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='oldLogic'),1);
            nLIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='newLogic'),1);
            cngIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='changeDate'),1);
            if(qcIndex==-1){
                textInputs.push({
                    id: new Date().toISOString() + Math.random(),
                    category:'qcode',
                    label:'Question Code:',
                    placeholder: 'Enter the q-code',
                    asterick:true,
                    value:questionCode
                });
            }else{
                textInputs[qcIndex].asterick=true;
            }
            if(aoIndex==-1){
                textInputs.splice(1,0 ,{
                    id: new Date().toISOString() + Math.random(),
                    category:'aoptions',
                    label:'Answer Options:',
                    placeholder: 'Enter the ans option(s)',
                    asterick:true,
                    value:answerOptions
                })
            }
            if(sqIndex==-1){
                textInputs.splice(2,0,
                    {
                        id: new Date().toISOString() + Math.random(),
                        category:'subquestions',
                        label:'Sub-q Code(s):',
                        placeholder: 'Enter the sub-question code(s)',
                        asterick:true,
                        value:subQuestions
                    }
                );
            }
            let thesqIndex = textInputs.findIndex(obj => obj.category==='subquestions');
            if (thesqIndex!=2){
                let b = textInputs[thesqIndex];
                textInputs[thesqIndex] = textInputs[2];
                textInputs[2] = b;
            }
            if(slIndex==-1){
                textInputs.push(
                    {
                        id: new Date().toISOString() + Math.random(),
                        category:'slogic',
                        label:'Skip Logic:',
                        placeholder: 'Enter the Skip Logic',
                        asterick:false,
                        value:skipLogic
                    }
                );
            }
        }
        if(e.target.value==="midfieldchange"){
            exIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='exclusive'),1);
            sqIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='subquestions'),1);
            aoIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='aoptions'),1);
            otIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='other'),1);
            slIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='slogic'),1);
            minMaxIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='minMax'),1);
            cusIndex===-1 ? textInputs.splice(0,0) : textInputs.splice(textInputs.findIndex(obj => obj.category==='custom'),1);
            if(qcIndex!=-1){
                textInputs[qcIndex].asterick=true;
            }
            if(cngIndex==-1){
                textInputs.push(
                    {
                        id: new Date().toISOString() + Math.random(),
                        category:'changeDate',
                        label:'Change Date:',
                        placeholder: 'Enter the Change Date',
                        asterick:true,
                        value:changeDate
                    }
                );
            }
            if(oLIndex==-1){
                textInputs.push(
                    {
                        id: new Date().toISOString() + Math.random(),
                        category:'oldLogic',
                        label:'Old Logic:',
                        placeholder: 'Enter the Old Logic',
                        asterick:true,
                        value:oldLogic
                    }
                );
            }
            if(nLIndex==-1){
                textInputs.push(
                    {
                        id: new Date().toISOString() + Math.random(),
                        category:'newLogic',
                        label:'New Logic:',
                        placeholder: 'Enter the New Logic',
                        asterick:true,
                        value:newLogic
                    }
                );
            }
        }
        updateQuestionType((state) => {
            return e.target.value;
        });
     }

    const textChangeHandler = (e) => {
        if(e.target.id === 'qcode'){
            updateQuestionCode(e.target.value);
        }
        if(e.target.id === 'aoptions'){
            updateAnswerOptions(e.target.value);
        }
        if(e.target.id === 'slogic'){
            updateSkipLogic(e.target.value);
        }
        if(e.target.id === 'other'){
            updateOtherCode(e.target.value);
        }
        if(e.target.id === 'exclusive'){
            updateExclusiveOption(e.target.value);
        }
        if(e.target.id === 'subquestions'){
            updatesubQuestions(e.target.value);
        }               
        if(e.target.id === 'custom'){
            updateCustomCode(e.target.value);
        }
        if(e.target.id === 'minMax'){
            updateminMax(e.target.value);
        }
        if(e.target.id === 'oldLogic'){
            updateoldLogic(e.target.value);
        }
        if(e.target.id === 'newLogic'){
            updatenewLogic(e.target.value);
        }
        if(e.target.id === 'changeDate'){
            updatechangeDate(e.target.value);
        }
    }

    const onAddQuestionHandler = (e) => {
        if((questionType=='customcode' && customCode) || (questionType=='midfieldchange' && changeDate && oldLogic && newLogic && questionCode) ||(questionType=='mcq' && questionCode && subQuestions) || (questionType==='sft' && questionCode) || (questionType=='array' && questionCode && subQuestions && answerOptions) || (questionType=='radio/equation' && questionCode && answerOptions)){
            const newQuestion = {
                id: new Date().toISOString() + Math.random(),
                questionType,
                questionCode,
                answerOptions,
                skipLogic,
                otherCode,
                exclusiveOption,
                subQuestions,
                customCode,
                minMax,
                oldLogic,
                newLogic,
                changeDate
            }
            props.addQuestion(newQuestion);
            updateQuestionCode('');
            updateAnswerOptions('');
            updateSkipLogic('');
            updateOtherCode('');
            updateExclusiveOption('');
            updatesubQuestions('');
            updateCustomCode('');
            updateminMax('');
            updatenewLogic('');
            updateoldLogic('');
            updatechangeDate('');
        }
    }
    return(
        <section className={Styles.NewQuestionSection} >
            <h4 className={Styles.RadioSpan}>Question Type:<span className='required'>*</span></h4>
            <div className={Styles.RadioContainer}>
                {questionCategories.map(category => <Radio key={category.id} category={category.category} clicked={radioChangeHandler} label={category.label}/>)}
            </div>
            <div className={Styles.TextInputContainer}>
                {textInputs.map((input,index) => <TextInput key={input.id} asterick={input.asterick} value={input.value} category={input.category} changed={textChangeHandler} groupClass={'Group-'+ (index+1)} label={input.label} placeholder={input.placeholder}/>)}
            </div>
            <div className={Styles.ButtonContainer}>
                <button onClick={onAddQuestionHandler} className={Styles.AddButton}>Add Question</button>
            </div>
        </section >
    );
}

export default Question;