
const survey = [ { question: 'Сколько будет 2+2?', answer: 4, type: 'prompt' },
{ question: 'Солнце встает на востоке?', answer: true, type: 'confirm' },
{ question: 'Сколько будет 5 * 4 ?', answer: 20, type: 'prompt' } ,
{question: 'Какого цвета небо ?', answer: 'blue', type: 'prompt'} ,
{question: 'Главный вопрос жизни, вселенной и всего такого', answer: '42', type: 'prompt'}];
let points = 0;

action(survey)
res(points)


function action(survey) {
    for(let q = 0; q < survey.length; q++) {
        if (userQuestion(survey[q])) {
        points += 10;
        
        } 
        } 
}

function userQuestion(survey) {
let user;
if (survey.type === 'prompt') {
user = prompt;
} else if (survey.type === 'confirm') {
user= confirm;
}
return(user(survey.question) == survey.answer);
}


function res(points) {
    alert(`Ваш результат ${points} баллов!`);
}



