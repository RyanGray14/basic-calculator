let exp = '', flag = 0;
let result = JSON.parse(localStorage.getItem('result'))
        || '';
    document.querySelector('.output').innerHTML = result;
const symbols = ['-','+','*','/'];

const numbers = document.querySelectorAll('.number');
numbers.forEach(element => {
    element.addEventListener('click', event => {
        let txt = event.target.innerHTML;
        number(txt);
    });
});

const operators = document.querySelectorAll('.operation');
operators.forEach(element => {
    element.addEventListener('click', event => {
        let txt = event.target.innerHTML;
        operator(txt);
    });
});

const type = document.querySelector('.input');
type.addEventListener
('keyup', event => { expression(event.key); 
});
type.addEventListener
('keydown', () => { flag=0; });

document.body.addEventListener
('keydown', event => { type.focus() });

document.querySelector('.equal').
addEventListener('click', () => {
    if(!flag) equals();
})

document.querySelector('.clear').
addEventListener('click', () => {
    flag = 0; exp = '';
    document.querySelector('.display').innerHTML = '';
    localStorage.removeItem('result');
    document.querySelector('.input').value = '';
    console.clear();
});

document.querySelector('.backspace').
addEventListener('click', () => {
    exp = exp.slice(0, -1);
    document.querySelector('.output').innerHTML = exp;
});

function number(num){
    flag = 0;
    exp += `${num}`;
    document.querySelector('.output').innerHTML = exp;
}
function operator(opt){
    exp += ` ${opt} `;
    document.querySelector('.output').innerHTML = exp;
}

function expression(str){
    //console.log(str);
    if(str === 'Enter')
        equals();    
    if(!isNaN(str) || symbols.includes(str)){
        exp = document.querySelector('.input').value;
        document.querySelector('.output').innerHTML = exp;
    }
}

function equals(){
    result = eval(exp);
    flag = 1;
    console.log(exp);
    exp = '';
    localStorage.setItem('result',
        JSON.stringify(result));
    document.querySelector('.output').innerHTML =
        `${result}`;
    console.log(result);
}

