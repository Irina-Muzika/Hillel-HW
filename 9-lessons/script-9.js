const ul = document.querySelector('.ull')
const btn = document.querySelector('.btn');
const input = document.querySelector('.inp')


const clickBtn = btn.addEventListener('click',onButtonClick)


function onButtonClick(){
const li = document.createElement('li')
li.textContent = input.value
if (input.value !== ''){
    ul.append (li)
    input.value = ''
}

}








