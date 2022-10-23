
const INSERT_THE_FIRST_NUMBER = 'A';
const INSERT_THE_SECOND_NUMBER= 'B';

const value = getAction(`+`, `-`, `*`,`/`);
const insertA = getNumber(INSERT_THE_FIRST_NUMBER);
const insertB = getNumber(INSERT_THE_SECOND_NUMBER);



let result = addition(value,insertA,insertB);

showResult(value,insertA ,insertB , result);


function getAction() {
    return prompt('Enter action ');
}

function getNumber(pickName) {
    if (value === '+', '-','*','/'){
    return Number(prompt(`Enter number ${pickName}`));
}else{
    return alert(`wrong action`)
}

}

function addition(operator, a, b) {
    if (Number(insertA) && Number(insertB)){
    switch (operator) {
        case '+': return add(a, b);
        case '-': return sub(a, b);
        case '*': return mul(a, b);
        case '/': return div(a, b);
    }
}else{
   return alert(`wrong number`)
}
}
function showResult(value, insertA, insertB , result) {
    if ((Number(insertA) && Number(insertB) && value ==='+')|| (Number(insertA) && Number(insertB) && value ==='-')
    || (Number(insertA) && Number(insertB) && value ==='*')||(Number(insertA) && Number(insertB) && value ==='/') ){
     alert(`${insertA} ${value} ${insertB } = ${result}`);
}else{
    return alert(`Error`)
}
}

function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}











