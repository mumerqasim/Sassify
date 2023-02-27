// const db = {
//     Default:[],
//     B1:[],
//     G1:[],
//     H1:[],
//     I1:[],
// }

// const questionCategories = [
//     {
//         id: new Date().toISOString() + Math.random(),
//         category:'radio/equation',
//         label: 'Radio/Equation'
//     },
//     {
//         id: new Date().toISOString() + Math.random(),
//         category:'mcq',
//         label: 'Multiple Choice'
//     },
//     {
//         id: new Date().toISOString() + Math.random(),
//         category:'sft',
//         label: 'Short Free Text'
//     },
//     {
//         id: new Date().toISOString() + Math.random(),
//         category:'array',
//         label: 'Array'
//     },
//     {
//         id: new Date().toISOString() + Math.random(),
//         category:'customcode',
//         label: 'Custom Code'
//     },
//     {
//         id: new Date().toISOString() + Math.random(),
//         category:'midfieldchange',
//         label: 'Midfield Change'
//     }
// ];
/*
             {
                title:'', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":``,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },

*/
const db = [
    {
        title:"default",
        label:"Generic Codes",
        codes:[
            {
                title:'Select Q', 
                question:{}
            },
            {
                title:'1st 2nd w Other', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QFirst, QSecond","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if (QFirst=11 & QFirst_other~="") OR (QFirst_other="" & QFirst in(1:10,12)) then QFirst_final="T    ";\nelse QFirst_final="WRONG";\n\nif QFirst~=12 & ((QSecond=11 & QSecond_other~="") OR (QSecond_other="" & QSecond in(1:10,12))) & QSecond~=QFirst then QSecond_final="T    ";\nelse if QFirst=12 & QSecond="" then QSecond_final="T    ";\nelse if QFirst=11 & QSecond=11 & QSecond_other~="" & QFirst_other~="" then QSecond_final="T    ";\nelse QSecond_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
            },
            {
                title:'1st 2nd', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QFirst, QSecond","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if QFirst in(1:9,10) then QFirst_final="T    ";\nelse QFirst_final="WRONG";\n\nif QFirst~=12 & QSecond in(1:9,10) & QSecond~=QFirst then QSecond_final="T    ";\nelse if QFirst=12 & QSecond="" then QSecond_final="T    ";\nelse QSecond_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
            },
            {
                title:'MCQ to Radio', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QMCQ","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if QMCQ_1=1 & QRadio in (1) then QRadio_final="T    ";\nelse if QMCQ_2=1 & QRadio in (2) then QRadio_final="T    ";\nelse if QMCQ_3=1 & QRadio in (3) then QRadio_final="T    ";\nelse if QMCQ_4=1 & QRadio in (4) then QRadio_final="T    ";\nelse if QMCQ_5=1 & QRadio in (5) then QRadio_final="T    ";\nelse if QMCQ_6=1 & QRadio in (6) then QRadio_final="T    ";\nelse if QMCQ_7=1 & QRadio in (7) then QRadio_final="T    ";\nelse if QMCQ_8=1 & QRadio in (8) then QRadio_final="T    ";\nelse if QMCQ_9=1 & QRadio in (9) then QRadio_final="T    ";\nelse if QMCQ_10=1 & QRadio in (10) then QRadio_final="T    ";\nelse if QMCQ_11=1 & QRadio in (11) then QRadio_final="T    ";\nelse QRadio_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'MSFT', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QMSFText","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if qMSFText_1~="" then qMSFText_1_check=1;\nelse qMSFText_1_check="";\n\nif qMSFText_2~="" then qMSFText_2_check=1;\nelse qMSFText_2_check="";\n\nif qMSFText_3~="" then qMSFText_3_check=1;\nelse qMSFText_3_check="";\n\nif sum(qMSFText_1_check,qMSFText_2_check,qMSFText_3_check)>=2 then qMSFText_final="T    ";\nelse qMSFText_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'Conditioned A Option', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QX","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if SplitAB=1 & QX in(1,3:5) then QX_final="T    ";\nelse if SplitAB=2 & QX in(1:2,4:5) then QX_final="T    ";\nelse QX_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
        ]
    },
    {
        title:"b1",
        label:"B1",
        codes:[
            {   
                title:'Select Q', 
                question:{}
            },
            {
                title:'PhoneMatch', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"PhoneMatch","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if AS1=1 & PhoneMatch in (1,2) then PhoneMatch_final="T    ";\nelse if AS1~=1 & PhoneMatch="" then PhoneMatch_final="T    ";\nelse PhoneMatch_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'AS2', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"AS2","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if (AS1=1 & AS2=PhoneMatch) OR (AS1=2 & AS2=2) OR (AS1=3 & AS2 in(1,2)) then AS2_final="T    ";\nelse AS2_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS3', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS3","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if (QS3_other~="" & QS3=98) OR (QS3_other="" & QS3 in (1,2,98)) then QS3_final="T    ";\nelse QS3_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS4', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS4","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if 18<=QS4<=150 OR (AS1=1 & QS4=999) then QS4_final="T    ";\nelse QS4_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'AS4', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"AS4","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if QS4<18 then AS4_check=1;\nelse if QS4<25 then AS4_check=2;\nelse if QS4<30 then AS4_check=3;\nelse if QS4<35 then AS4_check=4;\nelse if QS4<40 then AS4_check=5;\nelse if QS4<45 then AS4_check=6;\nelse if QS4<50 then AS4_check=7;\nelse if QS4<55 then AS4_check=8;\nelse if QS4<60 then AS4_check=9;\nelse if QS4<65 then AS4_check=10;\nelse if QS4<70 then AS4_check=11;\nelse if QS4<75 then AS4_check=12;\nelse if QS4<80 then AS4_check=13;\nelse if QS4<150 then AS4_check=14;\nelse AS4_check=99;\n\nif AS4=AS4_check then AS4_final="T    ";\nelse AS4_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS5', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS5","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if AS2=2 & (length(put(QS5,32. -l))=5) then QS5_final="T    ";\nelse if AS2~=2 & QS5="" then QS5_final="T    ";\nelse QS5_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS6', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS6","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if AS1=1 & ((QS6_1="" & QS6_2="" & QS6_3=1 & QS6_9="") OR (QS6_1="" & QS6_2="" & QS6_3="" & QS6_9=1)) then QS6_final="T    ";\nelse if AS1~=1 & (QS6_1="" & QS6_2="" & QS6_3=1 & QS6_9="") then QS6_final="T    ";\nelse QS6_final = "WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS7A', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS7A","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if (AS2=2) & QS7A in (1) then QS7A_final="T    ";\n else if ~(AS2=2) & QS7A="" then QS7A_final="T    ";\nelse QS7A_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS8', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS8","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if (AS2=2) & QS8 in (1:3) then QS8_final="T    ";\nelse if ~(AS2=2) & QS8="" then QS8_final="T    ";\nelse QS8_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS9A', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS9A","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if (QS9A_other~="" & QS9A=98) OR (QS9A in (1:5,99) & QS9A_other="") then QS9A_final="T    ";\nelse QS9A_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS9B', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS9B","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if QS9B in (1:5,9) then QS9B_final="T    ";\nelse QS9B_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS10', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS10","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if ((QS8=1 OR QS8=2) & (AS2=2)) & QS10 in(1,2,3,9) then QS10_final="T    ";\nelse if ~((QS8=1 OR QS8=2) & (AS2=2)) & QS10="" then QS10_final="T    ";\nelse QS10_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS12', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS12","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if QS8=1 & QS12 in(1:3,9) then QS12_final="T    ";\nelse if QS8~=1 & QS12="" then QS12_final="T    ";\nelse QS12_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS13', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS13","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if QS8=1 & QS13 in(1:3,9) then QS13_final="T    ";\nelse if QS8~=1 & QS13="" then QS13_final="T    ";\nelse QS13_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'aVHa', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"aVHa_1,aVHa_2,aVHa_3,aVHa_4","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if (AS2=1 & pG2018=1) OR (AS2=2 & QS12=1) & aVHa_1=1 then aVHa_1_final="T    ";\nelse if ~((AS2=1 & pG2018=1) OR (AS2=2 & QS12=1)) & aVHa_1="" then aVHa_1_final="T    ";\nelse aVHa_1_final="WRONG";\n\nif ((AS2=1 & pG2020=1 & pG2016=1) OR (AS2=2 & QS10=1 & QS13=1)) & aVHa_2=1 then aVHa_2_final="T    ";\nelse if ~((AS2=1 & pG2020=1 & pG2016=1) OR (AS2=2 & QS10=1 & QS13=1)) & aVHa_2="" then aVHa_2_final="T    ";\nelse aVHa_2_final="WRONG";\n\nif ((AS2=1 & pEREGDT2018=1 & pG2020=1) OR (AS2=2 & QS8=2 & QS10=1)) & aVHa_3=1 then aVHa_3_final="T    ";\nelse if ~((AS2=1 & pEREGDT2018=1 & pG2020=1) OR (AS2=2 & QS8=2 & QS10=1)) & aVHa_3="" then aVHa_3_final="T    ";\nelse aVHa_3_final="WRONG";\n\nif ((AS2=1 & pEREGDT2020=1) OR (AS2=2 & QS8=3)) & aVHa_4=1 then aVHa_4_final="T    ";\nelse if ~((AS2=1 & pEREGDT2020=1) OR (AS2=2 & QS8=3)) & aVHa_4="" then aVHa_4_final="T    ";\nelse aVHa_4_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS15 w A73', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS15","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if ((AS2=1 & A7Logic=3) or (AS2=2 & QS8=3)) & QS15 in(1,2,3,9) then QS15_final="T    ";\nelse if ~((AS2=1 & A7Logic=3) or (AS2=2 & QS8=3)) & QS15 in(1,2,3,4,9) then QS15_final="T    ";\nelse QS15_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS15', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS15","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if QS15 in (1:3,5,9) then QS15_final="T    ";\nelse QS15_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS19', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS19","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if AS2=2 & QS19 in(1:5,9) then QS19_final="T    ";\nelse if AS2~=2 & QS19="" then QS19_final="T    ";\nelse QS19_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS21', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS21_1_final, QS21_2_final, QS21_3_final, QS21_4_final, QS21_5_final, QS21_6_final, QS21_98_final, QS21_99_final, QS21_final","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if QS21_other~="" then QS21_98=1; if QS21_other="" then QS21_98="";\n\nif (QS21_1="" OR QS21_1=1) then QS21_1_final="T    ";\nelse QS21_1_final="WRONG";\n\nif (QS21_2="" OR QS21_2=1) then QS21_2_final="T    ";\nelse QS21_2_final="WRONG";\n\nif (QS21_3="" OR QS21_3=1) then QS21_3_final="T    ";\nelse QS21_3_final="WRONG";\n\nif (QS21_4="" OR QS21_4=1) then QS21_4_final="T    ";\nelse QS21_4_final="WRONG";\n\nif (QS21_5="" OR QS21_5=1) then QS21_5_final="T    ";\nelse QS21_5_final="WRONG";\n\nif (QS21_6="" OR QS21_6=1) then QS21_6_final="T    ";\nelse QS21_6_final="WRONG";\n\nif (QS21_98="" OR QS21_98=1) then QS21_98_final="T    ";\nelse QS21_98_final="WRONG";\n\nif (QS21_99="" OR QS21_99=1) then QS21_99_final="T    ";\nelse QS21_99_final="WRONG";\n\nsumQS21=sum(QS21_1,QS21_2,QS21_3,QS21_4,QS21_5,QS21_6,QS21_98,QS21_99);\n\nif ((QS21_99=1 & sumQS21=1) OR (QS21_99~=1 & sumQS21>=1)) then QS21_final="T    ";\nelse QS21_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS23A', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS23A","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if QS21_3=1 & (QS23A="" OR QS23A=1) then QS23A_final="T    ";\nelse if AS1~=1 & QS21_3~=1 & QS23A=2 then QS23A_final="T    ";\nelse if AS1=1 & QS21_3~=1 & QS23A in(2,9) then QS23A_final="T    ";\nelse QS23A_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'QS23B', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS23B","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if QS21_2=1 & (QS23B="" OR QS23B=1) then QS23B_final="T    ";\nelse if AS1~=1 & QS21_2~=1 & QS23B=2 then QS23B_final="T    ";\nelse if AS1=1 & QS21_2~=1 & QS23B in(2,9) then QS23B_final="T    ";\nelse QS23B_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },

        ]
    },
    {
        title:"d1",
        label:"D1",
        codes:[
            {   
                title:'Select Q', 
                question:{}
            },
        ]
    },
    {
        title:"f1",
        label:"F1",
        codes:[
            {   
                title:'Select Q', 
                question:{}
            },
        ]
    },
    {
        title:"f2",
        label:"F2",
        codes:[
            {   
                title:'Select Q', 
                question:{}
            },
        ]
    },
    {
        title:"g1",
        label:"G1",
        codes:[
            {   
                title:'Select Q', 
                question:{}
            },
            {
                title:'Mode Conversion', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if ModeType in (1,2) then pMode=1;\nelse pMode=3;`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'V1 2WAY', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"V1X, V1Y, V1","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if ModeType="" & pMode=1 & V1=V1p & V1 in(1:5) then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=1 & V1Y="" & V1=1 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=2 & V1Y="" & V1=3 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=3 & V1Y=1 & V1=2 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=3 & V1Y=2 & V1=4 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=3 & V1Y=3 & V1=5 then V1_final="T    ";\nelse if ModeType~="" & pMode>1 & V1 in(1:5) then V1_final="T    ";\nelse if ModeType~="" & pMode=1 & V1 in(1:5) then V1_final="T    ";\nelse V1_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'V1 3WAY', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"V1X, V1Y, V1","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if ModeType="" & pMode=1 & V1=V1p & V1 in(1:7) then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=1 & V1Y="" & V1=1 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=2 & V1Y="" & V1=3 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=3 & V1Y="" & V1=5 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=4 & V1Y=1 & V1=2 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=4 & V1Y=2 & V1=4 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=4 & V1Y=3 & V1=6 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=4 & V1Y=4 & V1=7 then V1_final="T    ";\nelse if ModeType~="" & pMode>1 & V1 in(1:7) then V1_final="T    ";\nelse if ModeType~="" & pMode=1 & V1 in(1:7) then V1_final="T    ";\nelse V1_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'V1 8WAY w Other', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"V1X, V1Y, V1","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if ModeType="" & pMode=1 & V1=V1p & ((V1p_other="" & V1p in(1:14,16)) OR (V1p_other~="" & V1p in(15))) then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=1 & V1Y="" & V1=1 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=2 & V1Y="" & V1=3 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=3 & V1Y="" & V1=5 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=4 & V1Y="" & V1=7 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=5 & V1Y="" & V1=9 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=6 & V1Y="" & V1=11 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=7 & V1Y="" & V1=13 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=8 & V1Y="" & V1_other~="" & V1=15 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=9 & V1Y=1 & V1=2 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=9 & V1Y=2 & V1=4 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=9 & V1Y=3 & V1=6 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=9 & V1Y=4 & V1=8 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=9 & V1Y=5 & V1=10 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=9 & V1Y=6 & V1=12 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=9 & V1Y=7 & V1=14 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=9 & V1Y=8 &  V1_other~="" & V1=15 then V1_final="T    ";\nelse if ModeType="" & pMode>1 & V1X=9 & V1Y=9 & V1=16 then V1_final="T    ";\nelse if ModeType~="" & pMode=1 & ((V1 in (1:14,16) & V1_other="") OR (V1_other~="" & V1=15)) then V1_final="T    "; \nelse if ModeType~="" & pMode>1 & ((V1 in (1:14,16) & V1_other="") OR (V1_other~="" & V1=15)) then V1_final="T    ";\nelse V1_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'V1 2WAY w SL', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"V1X, V1Y, V1","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if (SkipLogic) & ModeType="" & pMode=1 & V1=V1p & V1 in(1:5) then V1_final="T    ";\nelse if (SkipLogic) & ModeType="" & pMode>1 & V1X=1 & V1Y="" & V1=1 then V1_final="T    ";\nelse if (SkipLogic) & ModeType="" & pMode>1 & V1X=2 & V1Y="" & V1=3 then V1_final="T    ";\nelse if (SkipLogic) & ModeType="" & pMode>1 & V1X=3 & V1Y=1 & V1=2 then V1_final="T    ";\nelse if (SkipLogic) & ModeType="" & pMode>1 & V1X=3 & V1Y=2 & V1=4 then V1_final="T    ";\nelse if (SkipLogic) & ModeType="" & pMode>1 & V1X=3 & V1Y=3 & V1=5 then V1_final="T    ";\nelse if (SkipLogic) & ModeType~="" & pMode>1 & V1 in(1:5) then V1_final="T    ";\nelse if (SkipLogic) & ModeType~="" & pMode=1 & V1 in(1:5) then V1_final="T    ";\nelse if ~(SkipLogic) & V1="" then V1_final="T    ";\nelse V1_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'V1 3WAY w SL', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"V1X, V1Y, V1","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if (SkipLogic) & ModeType="" & pMode=1 & V1=V1p & V1 in(1:7) then V1_final="T    ";\nelse if (SkipLogic) & ModeType="" & pMode>1 & V1X=1 & V1Y="" & V1=1 then V1_final="T    ";\nelse if (SkipLogic) & ModeType="" & pMode>1 & V1X=2 & V1Y="" & V1=3 then V1_final="T    ";\nelse if (SkipLogic) & ModeType="" & pMode>1 & V1X=3 & V1Y="" & V1=5 then V1_final="T    ";\nelse if (SkipLogic) & ModeType="" & pMode>1 & V1X=4 & V1Y=1 & V1=2 then V1_final="T    ";\nelse if (SkipLogic) & ModeType="" & pMode>1 & V1X=4 & V1Y=2 & V1=4 then V1_final="T    ";\nelse if (SkipLogic) & ModeType="" & pMode>1 & V1X=4 & V1Y=3 & V1=6 then V1_final="T    ";\nelse if (SkipLogic) & ModeType="" & pMode>1 & V1X=4 & V1Y=4 & V1=7 then V1_final="T    ";\nelse if (SkipLogic) & ModeType~="" & pMode>1 & V1 in(1:7) then V1_final="T    ";\nelse if (SkipLogic) & ModeType~="" & pMode=1 & V1 in(1:7) then V1_final="T    ";\nelse if ~(SkipLogic) & V1="" then V1_final="T    ";\nelse V1_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'Seen Heard CMB', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"Q1X, Q1Y, Q1","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if ModeType="" & pMode=1 & Q1=Q1p & Q1 in(1:6) then Q1_final="T    ";\nelse if ModeType="" & pMode>1 & Q1X=1 & Q1=Q1Y & Q1 in(1:3) then Q1_final="T    ";\nelse if ModeType="" & pMode>1 & Q1X=2 & Q1Y="" & Q1=5 then Q1_final="T    ";\nelse if ModeType~="" & pMode>1 & Q1 in(1:3,5) then Q1_final="T    ";\nelse if ModeType~="" & pMode=1 & Q1 in(1:6) then Q1_final="T    ";\nelse Q1_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'D101 CMB', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"D101, D101o, D101p","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if ModeType="" & pMode=1 & D101=D101p & D101p in (1900:2005,9999) then D101_final="T    ";\nelse if ModeType="" & pMode>1 & D101=(2022-D101o) & D101o in (18:120) then D101_final="T    ";\nelse if ModeType~="" & pMode=1 & D101 in (1900:2005,9999) then D101_final="T    ";\nelse if ModeType~="" & pMode>1 & D101 in (1900:2005) then D101_final="T    ";\nelse D101_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
        ]
    },
    {
        title:"h1",
        label:"H1",
        codes:[
            {   
                title:'Select Q', 
                question:{}
            },
            {
                title:'QS4', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QS4a, QS4b, QS4abTH","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if ((pMode=1 & QS4a in (1:3)) OR (pMode>1 & QS4a in (1:2))) then QS4a_final="T    "; \nelse QS4a_final="WRONG";\n\nif (QS4a in (2,3)) & ((pMode=1 & QS4b in (1:6)) OR (pMode>1 & QS4b in (1:4))) then QS4b_final="T    "; \nelse if ~(QS4a in (2,3)) & QS4b="" then QS4b_final="T    ";\nelse QS4b_final="WRONG";\n\nif QS4a=1 & QS4b="" & QS4abTH=5 then QS4abTH_final="T    ";\nelse if QS4a in (2,3) & QS4abTH=QS4b then QS4abTH_final="T    ";\nelse QS4abTH_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'Generic 2WAY CMB', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if QXa=1 & QXabTH=1 then QXabTH_final="T    ";\nelse if QXb=1 & QXabTH=2 then QXabTH_final="T    ";\nelse if QXa=2 & QXabTH=3 then QXabTH_final="T    ";\nelse if QXb=2 & QXabTH=4 then QXabTH_final="T    ";\nelse if QXb=3 & QXabTH=5 then QXabTH_final="T    ";\nelse QXabTH_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
        ]
    },
    {
        title:"i1",
        label:"I1",
        codes:[
            {   
                title:'Select Q', 
                question:{}
            },
            {
                title:'VH Prog', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QVH","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if (pVoteHistory=0) & QVH in (1) then QVH_final="T    ";\nelse if (pVoteHistory=1) & QVH in (1:2,5) then QVH_final="T    ";\nelse if (pVoteHistory=2) & QVH in (1:5) then QVH_final="T    ";\nelse QVH_final="WRONG";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'VH Data', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"QVH","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`if (VoteHistoryLogic=0) & QVH in (1) then QVH_final="T    ";\nelse if (VoteHistoryLogic=1) & QVH in (1:2,5) then QVH_final="T    ";\nelse if (VoteHistoryLogic=2) & QVH in (1:5) then QVH_final="T    ";\nelse QVH_final="WRONG";";`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'Retain Generic', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`data data;\n   retain Q26 Q27 Q28 Q29 Q30 EDUCATIONAL_ATTAINMENT_MODEL partisanscoref urbanity_a DWID_a Five_digit_FIPS;\n   set data;\nrun;`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'Ethnicityf', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`QXN=ethnicityf\nDrop QX;\nRename QXN=QX;`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'Partyf', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`QXN=partyf\nDrop QX;\nRename QXN=QX;`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'VH15PRI', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`QXN=VH15PRI\nDrop QX;\nRename QXN=QX;`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'VH15GE', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`QXN=VH15GE\nDrop QX;\nRename QXN=QX;`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'VH18PRI', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`QXN=VH18PRI\nDrop QX;\nRename QXN=QX;`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'VH18GE', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`QXN=VH18GE\nDrop QX;\nRename QXN=QX;`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'VH19PRI', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`QXN=VH19PRI\nDrop QX;\nRename QXN=QX;`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'VH19GE', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`QXN=VH19GE\nDrop QX;\nRename QXN=QX;`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'VH20PRI', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`QXN=VH20PRI\nDrop QX;\nRename QXN=QX;`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'VH22PRI', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`QXN=VH22PRI\nDrop QX;\nRename QXN=QX;`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
             {
                title:'VH22GE', 
                question:{"id":String(Math.random()*3000),"questionType":"customcode","questionCode":"","answerOptions":"","skipLogic":"","otherCode":"","exclusiveOption":"","subQuestions":"","customCode":`QXN=VH22GE\nDrop QX;\nRename QXN=QX;`,"minMax":"","oldLogic":"","newLogic":"","changeDate":""}
             },
        ]
    },
    {
        title:"p1",
        label:"P1",
        codes:[
            {   
                title:'Select Q', 
                question:{}
            },
        ]
    },
    {
        title:"n1",
        label:"N1",
        codes:[
            {   
                title:'Select Q', 
                question:{}
            },
        ]
    },
]

export default db;