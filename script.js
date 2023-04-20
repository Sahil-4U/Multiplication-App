const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const question=document.getElementById('question');
question.innerText=`what is ${num1} multiple by ${num2}?`;

const userValue=document.getElementById('input');
const formEl=document.getElementById('form');
console.log(userValue);
const correctAns=num1*num2;

let score=JSON.parse(localStorage.getItem('score'));
if(!score){
    score=0;
}
function updateScore(){
    localStorage.setItem('score',JSON.stringify(score));
}
const scoreValue=document.getElementById('score');
scoreValue.innerText=`Score:${score}`;
const form=document.getElementById('form');
formEl.addEventListener('submit',()=>{
    let ans=Number(userValue.value);
    if(ans===correctAns){
        score++; 
        updateScore();
    }else{
        score--;
        updateScore();
    }
    
})