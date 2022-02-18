import { useState,useRef } from 'react/cjs/react.development';
import Styles from './Output.module.css';


// questionType,
// questionCode,
// answerOptions,
// skipLogic,
// otherCode,
// exclusiveOption,
// subQuestions

const codeTemplate = {
    true: 'T    ',
    false: 'WRONG',
    initialProcs:`proc import datafile="replace with path/ddfilename.csv"\n   out=data\n   dbms=csv\n   replace;\nrun;\n\ndata data; set data;\n\n`,
    endProcs:`\n\nproc export data=data\n   outfile="replace with path/outfilename.xlsx"\n   dbms=xlsx\n   replace;\nrun;`,
    midProcs1:`\n\nproc sql;\n`,
    midProcs3:`\nfrom data;\nquit;`
}

const Output = (props) => {
    const [finalCode, updateFinalCode] = useState(codeTemplate.initialProcs);
    const ref = useRef(null);
    let code='';
    codeTemplate.midProcs2=`select distinct `;

    for(let key in Object.keys(props.questionsList)){
        let {questionType, questionCode,answerOptions,skipLogic,otherCode,exclusiveOption,subQuestions,customCode} = props.questionsList[key];
        questionCode = questionCode.trim();
        answerOptions = answerOptions.trim();
        skipLogic = skipLogic.trim();
        otherCode = Number(otherCode.trim());
        exclusiveOption = exclusiveOption.trim();
        subQuestions = subQuestions.trim();
        let modeOptions = answerOptions.split('|');
        let modeSwitch = modeOptions.length > 1;
        switch(questionType){
            case('radio/equation'):
                if(!skipLogic){
                    if(otherCode){
                        if(modeSwitch){
                            code=code+`if (pMode=1 & ((${questionCode}_other~="" & ${questionCode}=${otherCode}) OR (${questionCode} in (${modeOptions[0]}) & ${questionCode}_other=""))) then ${questionCode}_final="${codeTemplate.true}";\nelse if (pMode~=1 & ((${questionCode}_other~="" & ${questionCode}=${otherCode}) OR (${questionCode} in (${modeOptions[1]}) & ${questionCode}_other=""))) then ${questionCode}_final="${codeTemplate.true}";\nelse ${questionCode}_final="${codeTemplate.false}";\n\n`;
                        }else{
                            code=code+`if (${questionCode}_other~="" & ${questionCode}=${otherCode}) OR (${questionCode} in (${answerOptions}) & ${questionCode}_other="") then ${questionCode}_final="${codeTemplate.true}"; \nelse ${questionCode}_final="${codeTemplate.false}";\n\n`;
                        }
                        codeTemplate.midProcs2+=`, ${questionCode}_final`;
                    }else{
                        if(modeSwitch){
                            code=code+`if ((pMode=1 & ${questionCode} in (${modeOptions[0]})) OR (pMode~=1 & ${questionCode} in (${modeOptions[1]}))) then ${questionCode}_final="${codeTemplate.true}"; \nelse ${questionCode}_final="${codeTemplate.false}";\n\n`;
                        }else{
                            code=code+`if ${questionCode} in (${answerOptions}) then ${questionCode}_final="${codeTemplate.true}"; \nelse ${questionCode}_final="${codeTemplate.false}";\n\n`;
                        }
                        codeTemplate.midProcs2+=`, ${questionCode}_final`;
                    }
                }else{
                    if(otherCode){
                        if(modeSwitch){
                            code=code+`if (${skipLogic}) & ((pMode=1 & ((${questionCode}_other~="" & ${questionCode}=${otherCode}) OR (${questionCode} in (${modeOptions[0]}) & ${questionCode}_other=""))) OR (pMode~=1 & ((${questionCode}_other~="" & ${questionCode}=${otherCode}) OR (${questionCode} in (${modeOptions[1]}) & ${questionCode}_other="")))) then ${questionCode}_final="${codeTemplate.true}"; \nelse if ~(${skipLogic}) & ${questionCode}="" & ${questionCode}_other="" then ${questionCode}_final="${codeTemplate.true}";\nelse ${questionCode}_final="${codeTemplate.false}";\n\n`;
                        }else{
                            code=code+`if (${skipLogic}) & ((${questionCode}_other~="" & ${questionCode}=${otherCode}) OR (${questionCode} in (${answerOptions}) & ${questionCode}_other="")) then ${questionCode}_final="${codeTemplate.true}"; \nelse if ~(${skipLogic}) & ${questionCode}="" & ${questionCode}_other="" then ${questionCode}_final="${codeTemplate.true}";\nelse ${questionCode}_final="${codeTemplate.false}";\n\n`;
                        }
                        codeTemplate.midProcs2+=`${questionCode}_final,`;
                    }else{
                        if(modeSwitch){
                            code=code+`if (${skipLogic}) & ((pMode=1 & ${questionCode} in (${modeOptions[0]})) OR (pMode~=1 & ${questionCode} in (${modeOptions[1]}))) then ${questionCode}_final="${codeTemplate.true}"; \nelse if ~(${skipLogic}) & ${questionCode}="" then ${questionCode}_final="${codeTemplate.true}";\nelse ${questionCode}_final="${codeTemplate.false}";\n\n`;
                        }else{
                            code=code+`if (${skipLogic}) & ${questionCode} in (${answerOptions}) then ${questionCode}_final="${codeTemplate.true}"; \nelse if ~(${skipLogic}) & ${questionCode}="" then ${questionCode}_final="${codeTemplate.true}";\nelse ${questionCode}_final="${codeTemplate.false}";\n\n`;
                        }
                        codeTemplate.midProcs2+=`, ${questionCode}_final`;
                    }    
                }
            break;
            case('sft'):
                if(!skipLogic){
                    code=code+`if ${questionCode}~="" then ${questionCode}_final="${codeTemplate.true}"; \nelse ${questionCode}_final="${codeTemplate.false}";\n\n`;
                    codeTemplate.midProcs2+=`, ${questionCode}_final`;
                }else{
                    code=code+`if (${skipLogic}) & ${questionCode}~="" then ${questionCode}_final="${codeTemplate.true}"; \nelse if ~(${skipLogic}) & ${questionCode}="" then ${questionCode}_final="${codeTemplate.true}";\nelse ${questionCode}_final="${codeTemplate.false}";\n\n`;
                    codeTemplate.midProcs2+=`, ${questionCode}_final`;
                }   
            break;
            case('mcq'):
                let subqstr=subQuestions;
                let parsedsubQ=subqstr.split(',');
                let subqarr=[];
                for(let i=0; i<parsedsubQ.length; i++){
                    if(parsedsubQ[i].includes(':')){
                        let values=parsedsubQ[i].trim().split(':');
                        let startVal=Number(values[0]);
                        let endVal=Number(values[1]);
                        for(let itr=startVal; itr<=endVal; itr++){
                            subqarr.push(itr);
                        }
                    } else {
                        !(subqarr.includes(Number(parsedsubQ[i].trim()))) && subqarr.push(Number(parsedsubQ[i].trim()));
                    }
                }

                if(otherCode){
                    !(subqarr.includes(otherCode)) && subqarr.push(otherCode);
                    code=code+`if ${questionCode}_other~="" then ${questionCode}_${otherCode}=1; \nif ${questionCode}_other="" then ${questionCode}_${otherCode}="";\n\n`
                }

                let excArr = exclusiveOption.split(',');
                if(exclusiveOption){
                    for(let i=0; i<excArr.length; i++){
                        excArr[i] = Number(excArr[i].trim());
                    }
                    subqarr=[...subqarr,...excArr];
                }
                let sumstr=`sum${questionCode}=sum(`;
                let checkstr='';
                for(let i=0; i<subqarr.length; i++){
                    sumstr=sumstr+`${questionCode}_${subqarr[i]}`;
                    checkstr+=`if (${questionCode}_${subqarr[i]}="" OR ${questionCode}_${subqarr[i]}=1) then ${questionCode}_${subqarr[i]}_final="${codeTemplate.true}";\nelse ${questionCode}_${subqarr[i]}_final="${codeTemplate.false}";\n\n`;
                    codeTemplate.midProcs2+=`, ${questionCode}_${subqarr[i]}_final`;
                    if(i<subqarr.length-1){
                        sumstr=sumstr+',';
                    }else{
                        sumstr=sumstr+`);\n\n`;
                    }
                }
                code=code+checkstr;
                code=code+sumstr;
                if(skipLogic){
                    let expression='';
                    if(exclusiveOption){
                        let firstexpression='';
                        expression='('
                        for(let i=0; i<excArr.length; i++){
                            if(i<excArr.length-1){
                                firstexpression+=`(${questionCode}_${excArr[i]}=1 & sum${questionCode}=1) OR `;
                                expression+=`${questionCode}_${excArr[i]}~=1 & `
                            }else{
                                firstexpression+=`(${questionCode}_${excArr[i]}=1 & sum${questionCode}=1) OR `;
                                expression+=`${questionCode}_${excArr[i]}~=1 & sum${questionCode}>=1)`;
                            }
                        }
                        expression=firstexpression+expression;
                    }else{
                        expression=`sum${questionCode}>=1`;
                    }
                    codeTemplate.midProcs2+=`, ${questionCode}_final`;
                    code=code+`if (${skipLogic}) & (${expression}) then ${questionCode}_final="${codeTemplate.true}";\nelse if ~(${skipLogic}) & sum${questionCode}="" then ${questionCode}_final="${codeTemplate.true}";\nelse ${questionCode}_final="${codeTemplate.false}";\n\n`
                }else{
                    let expression='';
                    if(exclusiveOption){
                        let firstexpression='';
                        expression='('
                        for(let i=0; i<excArr.length; i++){
                            if(i<excArr.length-1){
                                firstexpression+=`(${questionCode}_${excArr[i]}=1 & sum${questionCode}=1) OR `;
                                expression+=`${questionCode}_${excArr[i]}~=1 & `
                            }else{
                                firstexpression+=`(${questionCode}_${excArr[i]}=1 & sum${questionCode}=1) OR `;
                                expression+=`${questionCode}_${excArr[i]}~=1 & sum${questionCode}>=1)`;
                            }
                        }
                        expression=firstexpression+expression;
                    }else{
                        expression=`sum${questionCode}>=1`;
                    }
                    codeTemplate.midProcs2+=`, ${questionCode}_final`;
                    code=code+`if (${expression}) then ${questionCode}_final="${codeTemplate.true}";\nelse ${questionCode}_final="${codeTemplate.false}";\n\n`
                }
            break;
            case('array'):
                let subqstrArr=subQuestions;
                let parsedsubQArr=subqstrArr.split(',');
                let subqarrArr=[];
                for(let i=0; i<parsedsubQArr.length; i++){
                    if(parsedsubQArr[i].includes(':')){
                        let values=parsedsubQArr[i].trim().split(':');
                        let startVal=null;
                        let endVal=null;
                        if(values[0].length === 1 && values[0].toLowerCase().match(/[a-z]/i) && values[1].length === 1 && values[1].toLowerCase().match(/[a-z]/i)){
                            startVal=values[0].toLowerCase().charCodeAt(0);
                            endVal=values[1].toLowerCase().charCodeAt(0);
                            for(let itr=startVal; itr<=endVal; itr++){
                                subqarrArr.push(String.fromCharCode(itr));
                            }
                        }else{
                             startVal=Number(values[0]);
                             endVal=Number(values[1]);
                             for(let itr=startVal; itr<=endVal; itr++){
                                subqarrArr.push(itr.toString());
                            }
                        }
                    } else {
                         subqarrArr.push(parsedsubQArr[i].toLowerCase().trim());
                    }
                }
                if(skipLogic){
                    for(let i=0; i<subqarrArr.length; i++){
                        if(subqarrArr[i].includes('[')){
                            let parsedQcode = subqarrArr[i].split('[');
                            let qcode = parsedQcode[0].trim();
                            let skLogic = parsedQcode[1].split(']')[0].trim();
                            if(modeSwitch){
                                code=code+`if (${skipLogic} & ${skLogic}) & ((pMode=1 & ${questionCode+qcode} in (${modeOptions[0]})) OR (pMode~=1 & ${questionCode+qcode} in (${modeOptions[1]}))) then ${questionCode+qcode}_final="${codeTemplate.true}"; \nelse if ~(${skipLogic} & ${skLogic}) & ${questionCode+qcode}="" then ${questionCode+qcode}_final="${codeTemplate.true}";\nelse ${questionCode+qcode}_final="${codeTemplate.false}";\n\n`;
                            }else{
                                code=code+`if (${skipLogic} & ${skLogic}) & ${questionCode+qcode} in (${answerOptions}) then ${questionCode+qcode}_final="${codeTemplate.true}"; \nelse if ~(${skipLogic} & ${skLogic}) & ${questionCode+qcode}="" then ${questionCode+qcode}_final="${codeTemplate.true}";\nelse ${questionCode+qcode}_final="${codeTemplate.false}";\n\n`;
                            }
                            codeTemplate.midProcs2+=`, ${questionCode}_final`;
                        }else{
                            if(modeSwitch){
                                code=code+`if (${skipLogic}) & ((pMode=1 & ${questionCode+subqarrArr[i]} in (${modeOptions[0]})) OR (pMode~=1 & ${questionCode+subqarrArr[i]} in (${modeOptions[1]}))) then ${questionCode+subqarrArr[i]}_final="${codeTemplate.true}"; \nelse if ~(${skipLogic}) & ${questionCode+subqarrArr[i]}="" then ${questionCode+subqarrArr[i]}_final="${codeTemplate.true}";\nelse ${questionCode+subqarrArr[i]}_final="${codeTemplate.false}";\n\n`;
                            }else{
                                code=code+`if (${skipLogic}) & ${questionCode+subqarrArr[i]} in (${answerOptions}) then ${questionCode+subqarrArr[i]}_final="${codeTemplate.true}"; \nelse if ~(${skipLogic}) & ${questionCode+subqarrArr[i]}="" then ${questionCode+subqarrArr[i]}_final="${codeTemplate.true}";\nelse ${questionCode+subqarrArr[i]}_final="${codeTemplate.false}";\n\n`;
                            }
                            codeTemplate.midProcs2+=`, ${questionCode+subqarrArr[i]}_final`;
                        }
                    }
                }else{
                    for(let i=0; i<subqarrArr.length; i++){
                        if(subqarrArr[i].includes('[')){
                            let parsedQcode = subqarrArr[i].split('[');
                            let qcode = parsedQcode[0].trim();
                            let skLogic = parsedQcode[1].split(']')[0].trim();
                            if(modeSwitch){
                                code=code+`if (${skLogic}) & ((pMode=1 & ${questionCode+qcode} in (${modeOptions[0]})) OR (pMode~=1 & ${questionCode+qcode} in (${modeOptions[1]}))) then ${questionCode+qcode}_final="${codeTemplate.true}"; \nelse if ~(${skLogic}) & ${questionCode+qcode}="" then ${questionCode+qcode}_final="${codeTemplate.true}";\nelse ${questionCode+qcode}_final="${codeTemplate.false}";\n\n`;
                            }else{
                                code=code+`if (${skLogic}) & ${questionCode+qcode} in (${answerOptions}) then ${questionCode+qcode}_final="${codeTemplate.true}"; \nelse if ~(${skLogic}) & ${questionCode+qcode}="" then ${questionCode+qcode}_final="${codeTemplate.true}";\nelse ${questionCode+qcode}_final="${codeTemplate.false}";\n\n`;
                            }
                            codeTemplate.midProcs2+=`, ${questionCode}_final`;
                        }else{
                            if(modeSwitch){
                                code=code+`if ((pMode=1 & ${questionCode+subqarrArr[i]} in (${modeOptions[0]})) OR (pMode~=1 & ${questionCode+subqarrArr[i]} in (${modeOptions[1]}))) then ${questionCode+subqarrArr[i]}_final="${codeTemplate.true}";\nelse ${questionCode+subqarrArr[i]}_final="${codeTemplate.false}";\n\n`;
                            }else{
                                code=code+`if ${questionCode+subqarrArr[i]} in (${answerOptions}) then ${questionCode+subqarrArr[i]}_final="${codeTemplate.true}";\nelse ${questionCode+subqarrArr[i]}_final="${codeTemplate.false}";\n\n`;
                            }
                            codeTemplate.midProcs2+=`, ${questionCode+subqarrArr[i]}_final`;
                        }
                    }
                }
            break;
            case('customcode'):
                code=code+customCode.trim()+`\n\n`;
                if(questionCode){
                    let qcodes = questionCode.split(',');
                    if(qcodes.length>=1){
                        for(let i=0; i<qcodes.length; i++){
                            codeTemplate.midProcs2+=`, ${qcodes[i].trim()}_final`;
                        }
                    }
                }
            break;
            default:
            break;
        }
    }
    if(codeTemplate.midProcs2.length>25){
        codeTemplate.midProcs2=codeTemplate.midProcs2.replace(',','');
    }
    codeTemplate.midprocs=codeTemplate.midProcs1+codeTemplate.midProcs2+codeTemplate.midProcs3;
    return(
        <div className={Styles.OutputContainer}>
            <span className={Styles.OutputSpan}>SAS Code:</span>
            <textarea ref={ref} className={Styles.OutputTextArea} value={finalCode+code+codeTemplate.midprocs+codeTemplate.endProcs}>
            </textarea>
        </div>
    );
}

export default Output;